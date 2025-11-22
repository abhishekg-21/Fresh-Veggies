// /app/shop/handle/page.tsx
"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { FiShoppingBag, FiHeart, FiX } from "react-icons/fi";

interface Product {
  handle: string;
  name: string;
  body: string;
  variantFulfillmentServices: number;
  originalPrice?: number;
  rating: number;
  img: string;
  badge?: string;
  productCategory: string;
}

export default function ProductDetailPage() {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/products/[handle]/${handle}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        if (!cancelled) setProduct(data);
      } catch (err: unknown) {
        if (!cancelled) {
          setError(
            err instanceof Error ? err.message : "Unknown error occurred"
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    fetchProduct();
    return () => {
      cancelled = true;
    };
  }, [handle]);

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const renderStars = (rating: number) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`text-sm ${
            index < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
      <span className="ml-2 text-sm text-gray-600">({rating})</span>
    </div>
  );

  if (loading)
    return <div className="text-center mt-10">Loading product details...</div>;
  if (error)
    return <div className="text-center text-red-600 mt-10">Error: {error}</div>;
  if (!product)
    return <div className="text-center mt-10">Product not found.</div>;

  return (
    <>
      {/* Notification */}
      {notification && (
        <div className="fixed top-20 right-5 bg-green-600 text-white px-6 py-3 rounded-md shadow-lg flex items-center gap-3 z-50 animate-slide-in">
          <FiHeart className="text-xl" />
          <span>{notification}</span>
          <button
            onClick={() => setNotification(null)}
            aria-label="Close notification"
          >
            <FiX />
          </button>
        </div>
      )}

      <article className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 my-10">
        <h1 className="text-4xl font-extrabold mb-4">{product.name}</h1>
        {product.badge && (
          <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-6">
            {product.badge}
          </span>
        )}

        <img
          src={product.img}
          alt={product.name}
          className="w-full h-auto rounded-lg shadow-md mb-8 object-cover"
          loading="lazy"
        />

        <p className="text-gray-700 whitespace-pre-line mb-8 leading-relaxed">
          {product.body}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800 mb-8">
          {product.originalPrice && (
            <div>
              <span className="text-lg font-semibold text-green-700">
                ₹{product.originalPrice.toFixed(2)}
              </span>
              <span className="line-through text-gray-400 ml-3">
                ₹{product.variantFulfillmentServices.toFixed(2)}
              </span>
            </div>
          )}
          {!product.originalPrice && (
            <div>
              <span className="text-lg font-semibold text-green-700">
                ₹{product.variantFulfillmentServices.toFixed(2)}
              </span>
            </div>
          )}
          <div>
            Category:{" "}
            <span className="font-medium">{product.productCategory}</span>
          </div>
          <div>Rating: {renderStars(product.rating)}</div>
          <div>
            Availability:{" "}
            <span className="font-medium">
              {product.variantFulfillmentServices > 0
                ? "In Stock"
                : "Out of Stock"}
            </span>
          </div>
        </div>

        <button
          disabled={product.variantFulfillmentServices === 0}
          onClick={() => showNotification(`${product.name} added to cart!`)}
          className={`w-full bg-green-600 text-white py-3 rounded-lg font-semibold shadow-lg transition hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed`}
        >
          <FiShoppingBag className="inline-block mr-2 align-middle" />
          {product.variantFulfillmentServices > 0
            ? "Add to Cart"
            : "Out of Stock"}
        </button>
      </article>
    </>
  );
}
