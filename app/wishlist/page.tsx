"use client";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import {
  FiEye,
  FiShoppingBag,
  FiShoppingCart,
  FiTrash2,
  FiHeart,
  FiShare2,
  FiX,
} from "react-icons/fi";

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  img: string;
  category: string;
  inStock: boolean;
  rating: number;
}

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    {
      id: 1,
      name: "Fresh Spinach",
      price: 3.49,
      img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=60",
      category: "Leafy Greens",
      inStock: true,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Green Broccoli",
      price: 2.79,
      originalPrice: 3.99,
      img: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=60",
      category: "Vegetables",
      inStock: true,
      rating: 4.0,
    },
    {
      id: 3,
      name: "Organic Kale",
      price: 4.29,
      img: "https://images.unsplash.com/photo-1505576633424-283fba52e1c4?auto=format&fit=crop&w=400&q=60",
      category: "Leafy Greens",
      inStock: false,
      rating: 5.0,
    },
    {
      id: 4,
      name: "Red Bell Peppers",
      price: 3.99,
      originalPrice: 5.49,
      img: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=400&q=60",
      category: "Vegetables",
      inStock: true,
      rating: 4.5,
    },
    {
      id: 5,
      name: "Fresh Cabbage",
      price: 1.89,
      img: "https://images.unsplash.com/photo-1594282801870-5b0e54d06b7d?auto=format&fit=crop&w=400&q=60",
      category: "Vegetables",
      inStock: true,
      rating: 4.0,
    },
  ]);

  const [notification, setNotification] = useState<string | null>(null);

  const removeItem = (id: number) => {
    const item = wishlistItems.find((item) => item.id === id);
    setWishlistItems((items) => items.filter((item) => item.id !== id));
    showNotification(`${item?.name} removed from wishlist`);
  };

  const addToCart = (item: WishlistItem) => {
    showNotification(`${item.name} added to cart!`);
    // Here you would typically dispatch to cart state/context
  };

  const addAllToCart = () => {
    const inStockItems = wishlistItems.filter((item) => item.inStock);
    showNotification(`${inStockItems.length} items added to cart!`);
  };

  const clearWishlist = () => {
    setWishlistItems([]);
    showNotification("Wishlist cleared");
  };

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const renderStars = (rating: number) => {
    return (
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
      </div>
    );
  };

  const totalValue = wishlistItems.reduce((sum, item) => sum + item.price, 0);
  const inStockCount = wishlistItems.filter((item) => item.inStock).length;

  return (
    <>
      <Header />

      {/* Notification Toast */}
      {notification && (
        <div className="fixed top-24 right-4 z-50 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-slide-in">
          <FiHeart className="text-xl" />
          <span>{notification}</span>
          <button onClick={() => setNotification(null)}>
            <FiX />
          </button>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-800 via-green-700 to-green-600 text-white py-5 md:py- overflow-hidden">
        {/* Abstract illustration/circle for depth */}
        <div className="absolute left-0 top-0 w-72 h-72 bg-green-900 opacity-10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-0 -bottom-32 w-60 h-60 bg-yellow-300 opacity-10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
            {/* Text */}
            <div className="flex-1 flex flex-col gap-7 max-w-2xl">
              <h1 className="font-extrabold text-4xl md:text-6xl drop-shadow-xl tracking-tight leading-tight">
                <span className="block text-white md:mb-2">Your</span>
                <span className="block">
                  <span className="text-white">Wishlist&nbsp;</span>
                  <span className="text-yellow-300">Favorites</span>
                </span>
              </h1>
              <p className="text-lg md:text-2xl font-medium text-green-50 mb-2 tracking-wide">
                You currently have&nbsp;
                <span className="text-yellow-300 font-extrabold underline underline-offset-4 hover:text-yellow-400 transition">
                  {wishlistItems.length}{" "}
                  {wishlistItems.length === 1 ? "item" : "items"}
                </span>{" "}
                in your wishlist — quick to compare, easy to buy later.
              </p>

              <div className="flex flex-wrap gap-4 pt-6">
                <button
                  onClick={addAllToCart}
                  className="inline-flex items-center gap-2 bg-yellow-300 text-green-800 hover:bg-yellow-400 font-bold text-base md:text-lg px-6 py-4 rounded-lg shadow-md transition-all hover:scale-105 border-2 border-yellow-200"
                >
                  <FiShoppingCart className="text-xl" />
                  Add All To Cart ({inStockCount})
                </button>
                <button
                  onClick={clearWishlist}
                  className="inline-flex items-center gap-2 bg-white text-red-600 hover:text-white hover:bg-red-600 font-bold text-base md:text-lg px-6 py-4 rounded-lg shadow-md transition-all hover:scale-105 border-2 border-red-200"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Clear All
                </button>
              </div>
            </div>
            {/* Hero Illustration */}
            <div className="flex justify-center md:justify-end flex-1 w-full md:w-auto">
              {/* Use any SVG, emoji or image that matches your wishlist/favorite theme */}
              <svg
                width="240"
                height="180"
                viewBox="0 0 240 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-xl"
              >
                {/* Gradient definition */}
                <defs>
                  <linearGradient
                    id="WishlistHeartGrad"
                    x1="120"
                    y1="60"
                    x2="120"
                    y2="150"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFD600" />
                    <stop offset="1" stopColor="#FFF9C4" />
                  </linearGradient>
                  <filter
                    id="shadow"
                    x="0"
                    y="0"
                    width="240"
                    height="180"
                    filterUnits="userSpaceOnUse"
                  >
                    <feDropShadow
                      dx="0"
                      dy="6"
                      stdDeviation="10"
                      floodColor="#222"
                      floodOpacity="0.18"
                    />
                  </filter>
                </defs>
                {/* Main Card */}
                <rect
                  x="60"
                  y="60"
                  width="120"
                  height="90"
                  rx="32"
                  fill="url(#WishlistHeartGrad)"
                  filter="url(#shadow)"
                />
                {/* Heart Outline */}
                <path
                  d="M120 137s-22-17-39-37c-10.5-13.8-6.1-39 12-41 10.2-1.2 17.8 8 19 14.1C113.1 63.6 120.5 55.8 131 57c18 2 22.5 27.2 12 41-17 20-39 37-39 37Z"
                  fill="#fff"
                  stroke="#FFD600"
                  strokeWidth="7"
                  filter="url(#shadow)"
                />
                {/* Subtle shine effect */}
                <ellipse
                  cx="125"
                  cy="90"
                  rx="18"
                  ry="7"
                  fill="#fff"
                  fillOpacity="0.3"
                  transform="rotate(-30 125 90)"
                />
                {/* Small sparkle star for highlight */}
                <g>
                  <circle cx="155" cy="75" r="5" fill="#FFEB3B" />
                  <rect
                    x="153.2"
                    y="71"
                    width="3.6"
                    height="8"
                    rx="1.25"
                    fill="#FFD600"
                    transform="rotate(20 153.2 71)"
                  />
                  <rect
                    x="159"
                    y="73.2"
                    width="2.2"
                    height="5.2"
                    rx="1.1"
                    fill="#FFD600"
                    transform="rotate(-20 159 73.2)"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
        {/* Bottom curve divider, similar to your cart hero */}
        <svg
          className="absolute bottom-0 left-0 w-full text-white"
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,64L80,53.3C160,43,320,21,480,37.3C640,53,800,107,960,128C1120,149,1280,139,1360,133.3L1440,128V160H0Z"
          />
        </svg>
      </div>

      {/* Wishlist Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {wishlistItems.length === 0 ? (
          <div className="text-center py-20">
            {/* Illustration */}
            <div className="inline-flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 p-10 rounded-full border-2 border-green-100 mb-6 shadow-md animate-float">
              <FiHeart className="text-7xl text-green-400 drop-shadow-xl" />
            </div>
            {/* Headline */}
            <h2 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
              Your Wishlist Is Empty
            </h2>
            {/* Subtext */}
            <p className="text-gray-600 mb-8 text-lg max-w-lg mx-auto">
              When you see something you love, tap the{" "}
              <FiHeart className="inline text-red-400" /> icon&nbsp; to save it
              here for later.
            </p>
            {/* Call to Action */}
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold px-7 py-4 rounded-xl shadow-lg transition-all border-2 border-green-700/70 hover:scale-105"
            >
              <span className="tracking-wide">Start Shopping</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </Link>
            {/* Friendly tip */}
            <div className="mt-8 flex flex-col items-center gap-2">
              <span className="inline-block bg-green-100 text-green-700 text-sm px-4 py-1 rounded-full font-semibold animate-bounce">
                💡 Tip: Wishlists make reordering and gifting lightning fast!
              </span>
              <span className="text-xs text-gray-400">
                Favorites are synced when you log in.
              </span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Wishlist Items Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {wishlistItems.map((item) => (
                  <div
                    key={item.id}
                    className="group bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl hover:border-green-400 transition-all duration-300 overflow-hidden relative"
                  >
                    {/* Out of Stock & Sale Badges */}
                    {!item.inStock && (
                      <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-red-500 via-pink-500 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow animate-pulse">
                        Out of Stock
                      </div>
                    )}
                    {item.originalPrice && (
                      <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow">
                        Sale
                      </div>
                    )}

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="absolute top-3 right-3 text-green-600 translate-x-14 group-hover:translate-x-0 z-20 bg-green-100 hover:bg-green-600 hover:text-white p-3 rounded-full shadow-lg transition-all border hover:border-green-600 cursor-pointer"
                      title="Remove from Wishlist"
                    >
                      <FiTrash2 />
                    </button>

                    {/* Image */}
                    <div className="relative h-52 overflow-hidden bg-gradient-to-br from-green-50 to-gray-100">
                      <img
                        src={item.img}
                        alt={item.name}
                        className={`w-full h-full object-cover rounded-lg transition-all duration-500 ${
                          item.inStock
                            ? "group-hover:scale-105"
                            : "opacity-50 grayscale"
                        }`}
                      />
                      {/* Hover overlay / quick add */}
                      <div className="absolute bottom-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        {item.inStock && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              addToCart(item);
                            }}
                            className="bg-green-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-green-700 transition flex items-center gap-1 cursor-pointer"
                            title="Quick Add to Cart"
                          >
                            <FiShoppingCart className="text-lg" /> Add
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-xs text-green-700 font-semibold tracking-widest uppercase">
                          {item.category}
                        </p>
                        {/* Wishlist heart status (if you want) */}
                      </div>
                      <h3 className="font-bold text-lg text-gray-900 mb-1 line-clamp-1">
                        {item.name}
                      </h3>

                      {/* Rating */}
                      <div className="mb-2">{renderStars(item.rating)}</div>

                      {/* Price block */}
                      <div className="flex items-end gap-2 mb-4">
                        <span
                          className={`text-2xl font-bold ${
                            item.originalPrice
                              ? "text-orange-600"
                              : "text-green-700"
                          }`}
                        >
                          ${item.price}
                        </span>
                        {item.originalPrice && (
                          <span className="text-base text-gray-400 line-through">
                            ${item.originalPrice}
                          </span>
                        )}
                      </div>

                      {/* Actions */}
                      <button
                        onClick={() => addToCart(item)}
                        disabled={!item.inStock}
                        className={`w-full font-semibold px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition shadow-md ${
                          item.inStock
                            ? "bg-green-600 hover:bg-green-700 text-white"
                            : "bg-gray-200 text-gray-400 cursor-not-allowed"
                        } cursor-pointer`}
                      >
                        <FiShoppingCart />
                        {item.inStock ? "Add to Cart" : "Out of Stock"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar Summary */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="bg-white border border-green-100 shadow-2xl rounded-2xl p-7 sticky top-24">
                <h3 className="font-bold text-2xl mb-7 text-green-700 text-center">
                  Wishlist Summary
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Total Items</span>
                    <span className="font-bold text-lg">
                      {wishlistItems.length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">In Stock</span>
                    <span className="font-bold text-lg text-green-600">
                      {inStockCount}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Out of Stock</span>
                    <span className="font-bold text-lg text-red-500">
                      {wishlistItems.length - inStockCount}
                    </span>
                  </div>
                  <div className="border-t pt-4 flex justify-between items-center">
                    <span className="font-semibold text-green-700 text-xl">
                      Total Value
                    </span>
                    <span className="font-bold text-2xl text-green-700">
                      ${totalValue.toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={addAllToCart}
                  disabled={inStockCount === 0}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 rounded-lg mb-3 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  Add All to Cart
                </button>
                <button className="w-full border-2 border-green-600 text-green-700 hover:bg-green-50 font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition shadow">
                  <FiShare2 /> Share Wishlist
                </button>

                <div className="mt-7 p-4 bg-gradient-to-br from-green-50 to-white rounded-lg border border-green-100">
                  <p className="text-sm text-gray-700 mb-1">
                    💡 <span className="font-bold">Tip:</span> Move in-stock
                    items to your cart quickly before they go out of stock!
                  </p>
                  <p className="text-xs text-gray-500">
                    Sharing your wishlist helps friends/family buy gifts you
                    love.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>

      {/* Recommended Section */}
      {wishlistItems.length > 0 && (
        <section className="bg-gradient-to-b from-gray-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section Header */}
            <h2 className="text-4xl font-extrabold text-gray-900 mb-10 tracking-tight text-center md:text-left">
              You Might Also Like
            </h2>
            {/* Product grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  id: 101,
                  name: "Fresh Cucumbers",
                  price: 2.49,
                  originalPrice: 3.49,
                  img: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=400&q=60",
                  rating: 4.5,
                  badge: "Best Seller",
                },
                {
                  id: 102,
                  name: "Red Bell Peppers",
                  price: 3.99,
                  img: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=400&q=60",
                  rating: 5,
                  badge: null,
                },
                {
                  id: 103,
                  name: "Fresh Onions",
                  price: 1.79,
                  originalPrice: 2.29,
                  img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=400&q=60",
                  rating: 4,
                  badge: "Sale",
                },
                {
                  id: 104,
                  name: "Green Lettuce",
                  price: 2.99,
                  img: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=400&q=60",
                  rating: 4.5,
                  badge: null,
                },
              ].map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative border-2 border-transparent hover:border-green-500 hover:-translate-y-2"
                >
                  {/* Badge */}
                  {product.badge && (
                    <div
                      className={`absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-xs font-bold text-white ${
                        product.badge === "Sale"
                          ? "bg-red-500"
                          : "bg-orange-500"
                      }`}
                    >
                      {product.badge}
                    </div>
                  )}

                  {/* Quick Action Buttons */}
                  <div className="absolute top-3 right-3 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        showNotification(`${product.name} added to wishlist!`);
                      }}
                      className="bg-green-100 text-green-600 hover:bg-green-600 hover:text-white p-3 rounded-full transition cursor-pointer"
                      title="Add to Wishlist"
                    >
                      <FiHeart />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        showNotification(`Opening ${product.name} details...`);
                      }}
                      className="bg-green-100 text-green-600 hover:bg-green-600 hover:text-white p-3 rounded-full transition cursor-pointer"
                      title="Quick View"
                    >
                      <FiEye />
                    </button>
                  </div>

                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Optional: Overlay effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    {/* Product Name */}
                    <h4 className="font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-green-600 transition-colors">
                      {product.name}
                    </h4>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, index) => (
                        <span
                          key={index}
                          className={`text-sm ${
                            index < Math.floor(product.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                      <span className="text-xs text-gray-500 ml-1">
                        ({product.rating})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xl font-bold text-green-700">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      onClick={() =>
                        showNotification(`${product.name} added to cart!`)
                      }
                      className="w-full bg-green-600 cursor-pointer hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2 group-hover:shadow-lg"
                    >
                      <FiShoppingBag className="text-lg" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* Call to action below */}
            <div className="flex justify-center mt-12">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow transition hover:scale-105"
              >
                See All Products{" "}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
