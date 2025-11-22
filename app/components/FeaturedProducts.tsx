"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiHeart, FiEye, FiShoppingCart } from "react-icons/fi";

interface Product {
  id: string;
  name: string;
  handle: string;
  price: number;
  image: string;
}

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch from your API: /api/products
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to load products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <section className="mb-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Featured Products
        </h2>
        <Link
          href="/shop"
          className="text-green-600 hover:underline font-medium"
        >
          View All →
        </Link>
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length === 0 && (
          <p className="text-gray-500">Loading products...</p>
        )}

        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white shadow-md rounded-xl overflow-hidden transition hover:shadow-lg"
          >
            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Hover Buttons */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                <button className="bg-green-100 text-green-600 hover:bg-green-600 hover:text-white p-3 rounded-full transition">
                  <FiShoppingCart className="text-lg" />
                </button>

                <button className="bg-green-100 text-green-600 hover:bg-green-600 hover:text-white p-3 rounded-full transition">
                  <FiHeart className="text-lg" />
                </button>

                {/* PRODUCT DETAILS PAGE */}
                <Link href={`/shop/${product.handle}`}>
                  <button className="bg-green-100 text-green-600 hover:bg-green-600 hover:text-white p-3 rounded-full transition">
                    <FiEye className="text-lg" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Product Details */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-green-600 font-bold text-lg">
                ₹{product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
