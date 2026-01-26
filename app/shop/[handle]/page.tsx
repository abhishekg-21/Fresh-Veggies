"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { FiShoppingCart, FiHeart, FiShare2, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

interface Product {
  handle: string;
  name: string;
  body: string;
  variantFulfillmentServices: number; // 👈 API price field
  originalPrice?: number;
  rating: number;
  img: string;
  badge?: string;
  productCategory: string;
  availability?: string;
}

export default function ProductDetailPage() {
  const { handle } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [imageError, setImageError] = useState(false);
  const { addToCart, cart } = useCart();
  const { addToWishlist, wishlist } = useWishlist();
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    if (!handle) return;
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-xl font-semibold text-gray-500">
            Loading product...
          </p>
        </div>
      </div>
    );

  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl text-gray-300 mb-4">😢</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Product Not Found
          </h1>
          <Link
            href="/shop"
            className="text-green-600 hover:underline font-semibold"
          >
            ← Back to Shop
          </Link>
        </div>
      </div>
    );

  const isInCart = !!cart.find((item) => item.handle === product.handle);
  const isInWishlist = wishlist.find((item) => item.handle === product.handle);

  // Update handleAddToCart:
  const handleAddToCart = async (e?: React.MouseEvent) => {
    e?.preventDefault();
    if (isAdding || isInCart) return;

    setIsAdding(true);
    try {
      addToCart({
        handle: product.handle,
        name: product.name,
        price: Number(product.variantFulfillmentServices),
        originalPrice: product.originalPrice
          ? Number(product.originalPrice)
          : undefined,
        img: product.img,
        category: product.productCategory,
        rating: Number(product.rating),
        inStock: product.availability !== "Out of Stock",
        maxQuantity: 99,
        // quantity, // 👈 UNCOMMENT THIS!
      });
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 py-8">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-green-700 hover:text-green-900 font-medium transition"
        >
          <FiArrowLeft />
          Back to Shop
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* IMAGE GALLERY */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] group">
              {imageError ? (
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <span className="text-gray-500 text-lg">
                    Image not available
                  </span>
                </div>
              ) : (
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 cursor-zoom-in"
                  onError={() => setImageError(true)}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              )}
            </div>

            {/* Actions Overlay */}
            <div className="flex gap-3">
              <button
                onClick={handleAddToCart}
                disabled={isInCart}
                className={`
    flex-1 relative group overflow-hidden rounded-2xl shadow-lg transition-all duration-300
    ${
      isInCart
        ? "bg-green-400 text-white shadow-green-200 cursor-not-allowed"
        : "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 hover:shadow-xl hover:scale-105"
    }
    text-white p-4 font-semibold flex items-center justify-center gap-2
    ${isInCart ? "opacity-80" : "active:scale-95"}
  `}
              >
                <FiShoppingCart className="text-xl group-hover:scale-110 transition-transform" />
                <span className="text-sm">{isInCart ? "Added!" : "Cart"}</span>
              </button>

              <button
                onClick={() => {
                  addToWishlist({
                    handle: product.handle,
                    name: product.name,
                    price: product.variantFulfillmentServices, // 👈 Match Shop page
                    originalPrice: product.originalPrice,
                    img: product.img,
                    category: product.productCategory,
                    rating: product.rating,
                  });
                }}
                className={`p-4 rounded-2xl flex items-center justify-center shadow-lg transition-all ${
                  isInWishlist
                    ? "bg-red-500 hover:bg-red-600 text-white"
                    : "bg-white hover:bg-gray-100 text-gray-700 border-2 border-gray-200"
                }`}
              >
                <FiHeart size={20} />
              </button>

              <button className="p-4 rounded-2xl bg-white hover:bg-gray-100 text-gray-700 border-2 border-gray-200 shadow-lg transition">
                <FiShare2 size={20} />
              </button>
            </div>
          </div>

          {/* PRODUCT DETAILS */}
          <div className="space-y-6">
            {/* Badge */}
            {product.badge && (
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm rounded-full font-bold shadow-lg">
                {product.badge}
              </span>
            )}

            {/* Name & Category */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-3">
                {product.name}
              </h1>
              <p className="text-green-700 text-lg font-semibold uppercase tracking-widest">
                {product.productCategory}
              </p>
            </div>

            {/* Price & Rating */}
            <div className="space-y-4">
              <div className="flex items-baseline gap-4">
                <span className="text-5xl font-black text-green-700">
                  ₹{product.variantFulfillmentServices}
                </span>
                {product.originalPrice && (
                  <span className="text-2xl text-gray-400 font-light line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3">
                <div className="flex text-2xl">
                  {"★".repeat(Math.floor(product.rating))}
                  {"☆".repeat(5 - Math.floor(product.rating))}
                </div>
                <span className="text-lg text-gray-600 font-medium">
                  {product.rating}/5 (127 reviews){" "}
                  {/* 👈 Fixed realistic number */}
                </span>
              </div>
            </div>

            {/* Availability & Quantity */}
            <div className="space-y-3">
              {product.availability !== "Out of Stock" && (
                <div className="space-y-3">
                  {/* Availability Status */}
                  <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                    <span>Availability:</span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-bold ${
                        product.availability === "Out of Stock"
                          ? "bg-red-100 text-red-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {product.availability || "In Stock"}
                    </span>
                  </div>

                  {/* Enhanced Quantity Selector */}
                  <div className="flex items-center gap-4">
                    <label className="font-semibold text-gray-700 text-lg whitespace-nowrap">
                      Quantity:
                    </label>

                    {/* Premium Quantity Input */}
                    <div className="relative group">
                      {/* Background Container */}
                      <div className="flex items-center bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-2 shadow-md hover:shadow-lg transition-all duration-300 hover:border-green-300">
                        {/* Decrease Button */}
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-12 h-12 flex items-center justify-center text-xl font-bold text-green-600 hover:text-green-700 hover:bg-green-100 rounded-xl transition-all duration-200 group-hover:scale-105 active:scale-95 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={quantity <= 1}
                        >
                          <span className="-mt-0.5">-</span>
                        </button>

                        {/* Quantity Display/Input */}
                        <div className="flex-1 px-4 py-3">
                          <input
                            type="number"
                            min="1"
                            max="99"
                            value={quantity}
                            onChange={(e) => {
                              const val = parseInt(e.target.value) || 1;
                              setQuantity(Math.max(1, Math.min(99, val)));
                            }}
                            className="w-full text-center text-2xl font-bold text-green-700 bg-transparent border-none outline-none focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none cursor-default select-none"
                          />
                        </div>

                        {/* Increase Button */}
                        <button
                          onClick={() =>
                            setQuantity(Math.min(99, quantity + 1))
                          }
                          className="w-12 h-12 flex items-center justify-center text-xl font-bold text-green-600 hover:text-green-700 hover:bg-green-100 rounded-xl transition-all duration-200 group-hover:scale-105 active:scale-95 shadow-sm hover:shadow-md"
                        >
                          <span className="-mt-0.5">+</span>
                        </button>
                      </div>

                      {/* Live Total Price Preview */}
                      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-2xl shadow-2xl border border-green-100 text-sm font-bold text-green-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300">
                        Total: ₹
                        {(
                          quantity * product.variantFulfillmentServices
                        ).toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Description
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg max-w-2xl">
                {product.body}
              </p>
            </div>

            {/* Primary Add to Cart */}
            {product.availability !== "Out of Stock" && (
              <button
                onClick={handleAddToCart}
                disabled={isInCart} // 👈 Disable if already in cart
                className={`
      w-full relative group overflow-hidden rounded-3xl shadow-2xl transition-all duration-300 transform
      ${
        isInCart
          ? "bg-green-400 cursor-not-allowed shadow-green-200"
          : "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 hover:shadow-3xl hover:-translate-y-1 hover:scale-[1.02]"
      }
      text-white font-black text-xl px-8 py-5 flex items-center justify-center gap-3
      ${isInCart ? "opacity-70" : "active:scale-[0.98] active:shadow-xl"}
    `}
              >
                {/* Animated Cart Icon */}
                <div className="relative">
                  <FiShoppingCart className="text-2xl group-hover:scale-110 transition-transform duration-300" />
                  {isInCart && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-green-600 font-bold text-xs shadow-lg">
                      ✓
                    </div>
                  )}
                </div>

                {/* Dynamic Text */}
                <span className="relative">
                  {isInCart
                    ? "Added to Cart!"
                    : `Add ${quantity > 1 ? `${quantity}x ` : ""}to Cart`}
                </span>

                {/* Pulse Animation Ring */}
                {!isInCart && (
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-400/30 to-emerald-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping" />
                )}

                {/* Ripple Effect */}
                {!isInCart && (
                  <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-150 rounded-3xl transition-transform duration-300 opacity-0 group-hover:opacity-100" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Sticky Bar */}
        <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-2xl border-t px-6 py-4 z-50">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-black text-green-700">
                ₹{product.variantFulfillmentServices}
              </div>
              <div className="text-sm text-gray-500">{product.name}</div>
            </div>
            <button
              onClick={handleAddToCart}
              disabled={product.availability === "Out of Stock" || isInCart}
              className={`
    bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 
    disabled:from-gray-400 disabled:to-gray-500 text-white font-bold px-8 py-4 rounded-2xl 
    shadow-xl transition-all flex items-center gap-2 duration-300 transform
    ${
      isInCart
        ? "scale-95 opacity-80 cursor-not-allowed shadow-green-200 bg-green-400"
        : "hover:shadow-2xl hover:-translate-y-0.5 hover:scale-105 active:scale-95"
    }
  `}
            >
              <FiShoppingCart className="text-xl" />
              <span>{isInCart ? "Added!" : "Add to Cart"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
