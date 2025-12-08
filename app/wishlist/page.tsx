"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { FiTrash2, FiShoppingCart, FiHeart, FiX } from "react-icons/fi";
import { useWishlist } from "../context/WishlistContext";
import Link from "next/link";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const renderStars = (rating: number) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, idx) => (
        <span
          key={idx}
          className={`text-sm ${
            idx < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );

  return (
    <>
      <Header />
      {notification && (
        <div className="fixed top-24 right-4 z-50 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-slide-in">
          <FiHeart className="text-xl" />
          <span>{notification}</span>
          <button onClick={() => setNotification(null)}>
            <FiX />
          </button>
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {wishlist.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
              Your Wishlist Is Empty
            </h2>
            <p className="text-gray-600 mb-8 text-lg max-w-lg mx-auto">
              When you see something you love, tap the{" "}
              <FiHeart className="inline text-red-400" /> icon&nbsp; to save it
              here for later.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold px-7 py-4 rounded-xl shadow-lg transition-all border-2 border-green-700/70 hover:scale-105"
            >
              <span className="tracking-wide">Start Shopping</span>
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {wishlist.map((item) => (
              <div
                key={item.handle}
                className="group bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl hover:border-green-400 transition-all duration-300 overflow-hidden relative"
              >
                <button
                  onClick={() => {
                    removeFromWishlist(item.handle);
                    showNotification(`${item.name} removed from wishlist`);
                  }}
                  className="absolute top-3 right-3 text-green-600 z-20 bg-green-100 hover:bg-green-600 hover:text-white p-3 rounded-full shadow-lg transition-all border hover:border-green-600"
                  title="Remove from Wishlist"
                >
                  <FiTrash2 />
                </button>
                <div className="relative h-52 overflow-hidden bg-gradient-to-br from-green-50 to-gray-100">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-lg transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs text-green-700 font-semibold tracking-widest uppercase">
                    {item.category}
                  </p>
                  <h3 className="font-bold text-lg text-gray-900 mb-1 line-clamp-1">
                    {item.name}
                  </h3>
                  <div className="mb-2">{renderStars(item.rating)}</div>
                  <div className="flex items-end gap-2 mb-4">
                    <span className="text-2xl font-bold text-green-700">
                      ${item.price}
                    </span>
                    {item.originalPrice && (
                      <span className="text-base text-gray-400 line-through">
                        ${item.originalPrice}
                      </span>
                    )}
                  </div>
                  <button
                    className="w-full font-semibold px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition shadow-md bg-green-600 hover:bg-green-700 text-white cursor-pointer"
                    onClick={() =>
                      showNotification(`${item.name} added to cart!`)
                    }
                  >
                    <FiShoppingCart /> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
