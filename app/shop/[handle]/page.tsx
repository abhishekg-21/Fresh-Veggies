"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Product {
  handle: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  img: string;
  badge?: string;
  body: string;
  productCategory: string;
  availability?: string;
}

export default function ProductDetailPage() {
  const { handle } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p: Product) => p.handle === handle);
        setProduct(found || null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [handle]);

  if (loading)
    return (
      <div className="text-center py-20 text-xl font-semibold text-gray-500">
        Loading product...
      </div>
    );

  if (!product)
    return (
      <div className="text-center py-20 text-xl font-semibold text-red-500">
        Product Not Found
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto p-6 my-10 bg-white rounded-2xl shadow-lg">
      {/* GRID STRUCTURE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* LEFT: PRODUCT IMAGE */}
        <div className="rounded-xl overflow-hidden shadow-lg border bg-gray-50">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* RIGHT: DETAILS SECTION */}
        <div className="flex flex-col justify-center">
          {/* Badge */}
          {product.badge && (
            <span className="px-4 py-1 bg-red-600 text-white text-xs rounded-full w-max mb-4 font-semibold">
              {product.badge}
            </span>
          )}

          {/* Product Name */}
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {product.name}
          </h1>

          {/* Category */}
          <p className="text-sm text-green-700 font-medium mb-3 uppercase tracking-wide">
            {product.productCategory}
          </p>

          {/* Price Section */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl font-extrabold text-green-700">
              ₹{product.price}
            </span>

            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-6">
            <div className="text-yellow-400 text-lg">
              {"★".repeat(Math.floor(product.rating))}
              {"★".repeat(5 - Math.floor(product.rating)).replace(/★/g, "☆")}
            </div>
            <span className="text-gray-600">{product.rating}/5</span>
          </div>

          {/* Availability */}
          <p className="text-lg font-medium text-gray-700 mb-6">
            Availability:{" "}
            <span className="text-green-600 font-semibold">
              {product.availability || "In Stock"}
            </span>
          </p>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-10">{product.body}</p>

          {/* Add to Cart Button */}
          <button className="bg-green-600 hover:bg-green-700 transition text-white font-semibold px-6 py-4 rounded-xl text-lg shadow-md w-full">
            Add to Cart
          </button>
        </div>
      </div>

      {/* STICKY ADD-TO-CART BAR */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-xl border-t p-4 flex justify-between items-center md:hidden">
        <div className="flex flex-col">
          <span className="text-green-700 text-xl font-bold">
            ₹{product.price}
          </span>
          {product.originalPrice && (
            <span className="line-through text-sm text-gray-400">
              ₹{product.originalPrice}
            </span>
          )}
        </div>

        <button className="bg-green-600 hover:bg-green-700 transition text-white font-semibold px-6 py-3 rounded-xl text-lg">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
