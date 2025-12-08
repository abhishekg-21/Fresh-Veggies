"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { useState } from "react";
import {
  FiEye,
  FiHeart,
  FiTrash2,
  FiMinus,
  FiPlus,
  FiShoppingBag,
  FiArrowRight,
  FiTag,
  FiTruck,
  FiX,
} from "react-icons/fi";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const applyCoupon = () => {
    if (couponCode.toUpperCase() === "SAVE10") {
      setAppliedCoupon("SAVE10");
      showNotification("Coupon applied! 10% discount");
    } else {
      showNotification("Invalid coupon code");
    }
    setCouponCode("");
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = appliedCoupon ? subtotal * 0.1 : 0;
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = (subtotal - discount) * 0.08;
  const total = subtotal - discount + shipping + tax;
  const savings = discount;

  return (
    <>
      <Header />

      {/* Notification Toast */}
      {notification && (
        <div className="fixed top-6 right-6 z-[9999] backdrop-blur-md bg-green-600/90 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 w-fit animate-slide-in border border-green-400/30 transition-all">
          <div className="bg-white/20 p-2 rounded-full flex items-center justify-center">
            <FiShoppingBag className="text-xl" />
          </div>
          <span className="font-semibold tracking-wide">{notification}</span>
          <button
            onClick={() => setNotification(null)}
            className="ml-2 hover:text-gray-200 transition-transform hover:scale-125"
          >
            <FiX className="text-lg" />
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-700 to-green-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 blur-3xl rounded-full -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300/10 blur-3xl rounded-full translate-x-24 translate-y-24"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
                Your Shopping <span className="text-yellow-300">Cart</span>
              </h1>
              <p className="text-lg md:text-xl text-green-50 mb-6 max-w-lg">
                You currently have{" "}
                <span className="font-semibold text-yellow-300 underline underline-offset-4">
                  {cart.length} {cart.length === 1 ? "item" : "items"}
                </span>{" "}
                in your cart — ready for checkout.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold px-6 py-3 rounded-lg shadow-md transition-transform hover:scale-105"
                >
                  <FiShoppingBag />
                  Continue Shopping
                </Link>
                <Link
                  href="#checkout"
                  className="inline-flex items-center gap-2 bg-white/20 text-white font-medium px-6 py-3 rounded-lg border border-white/30 hover:bg-white/30 transition-all"
                >
                  Go to Checkout
                  <FiArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="hidden md:block">
              <img
                src="https://cdn-icons-png.flaticon.com/512/891/891462.png"
                alt="Cart illustration"
                className="w-56 h-56 md:w-72 md:h-72 drop-shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>

        <svg
          className="absolute bottom-0 left-0 w-full text-white"
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,64L80,53.3C160,43,320,21,480,37.3C640,53,800,107,960,128C1120,149,1280,139,1360,133.3L1440,128V160H0Z"
          ></path>
        </svg>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-14">
        {cart.length === 0 ? (
          // Empty Cart State
          <div className="text-center py-20">
            <div className="inline-block bg-green-50 p-8 rounded-full mb-6 border border-green-100">
              <FiShoppingBag className="text-6xl text-green-500" />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
              Your Cart is Empty
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Looks like you haven’t added any vegetables yet.
            </p>
            <Link
              href="/shop"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg shadow-md transition-all transform hover:scale-105"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          // Cart Content
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left: Cart Items */}
            <div className="lg:col-span-2">
              {/* Free Shipping Progress */}
              {subtotal < 50 && (
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-5 mb-8 flex items-center gap-4 shadow-sm">
                  <div className="flex justify-center items-center bg-blue-200 w-12 h-12 rounded-full">
                    <FiTruck className="text-2xl text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-blue-900">
                      Spend ${(50 - subtotal).toFixed(2)} more to unlock{" "}
                      <span className="text-blue-700 font-bold">
                        FREE shipping!
                      </span>
                    </p>
                    <div className="mt-2 h-3 bg-blue-200 rounded-full shadow-inner">
                      <div
                        className="bg-blue-600 h-3 rounded-full transition-all duration-500 ease-in-out"
                        style={{
                          width: `${Math.min(100, (subtotal / 50) * 100)}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Cart Items */}
              <div className="space-y-6">
                {cart.map((item) => (
                  <div
                    key={item.handle}
                    className="relative bg-white border border-gray-100 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 hover:shadow-2xl hover:border-green-300 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {/* Image */}
                    <div className="relative group">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-28 h-28 object-cover rounded-xl border border-gray-200 group-hover:scale-105 transition-transform duration-300"
                      />
                      {item.badge && (
                        <span className="absolute top-2 left-2 text-xs font-semibold text-white bg-green-600 px-2 py-1 rounded-md">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 w-full">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm uppercase text-green-600 font-semibold tracking-wide">
                            {item.category}
                          </p>
                          <h3 className="font-bold text-lg text-gray-900 leading-tight">
                            {item.name}
                          </h3>
                          <p className="text-sm font-medium mt-1">
                            {item.inStock ? (
                              <span className="text-green-600">✓ In Stock</span>
                            ) : (
                              <span className="text-red-500">Out of Stock</span>
                            )}
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            removeFromCart(item.handle);
                            showNotification(`${item.name} removed from cart`);
                          }}
                          className="text-red-500 hover:text.white hover:bg-red-500 cursor-pointer rounded-full p-2 transition-all"
                          title="Remove Item"
                        >
                          <FiTrash2 className="text-xl" />
                        </button>
                      </div>

                      {/* Quantity Controls */}
                      <div className="mt-5 flex justify-between items-center">
                        <div className="flex items-center bg-gray-100 rounded-lg px-2 py-1">
                          <button
                            onClick={() => updateQuantity(item.handle, -1)}
                            disabled={item.quantity <= 1}
                            className="p-2 hover:bg-white rounded-md cursor-pointer transition-all disabled:opacity-50"
                          >
                            <FiMinus className="text-gray-700" />
                          </button>
                          <span className="px-4 font-bold text-gray-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.handle, 1)}
                            disabled={item.quantity >= item.maxQuantity}
                            className="p-2 hover:bg.white cursor-pointer rounded-md transition-all disabled:opacity-50"
                          >
                            <FiPlus className="text-gray-700" />
                          </button>
                        </div>

                        <div className="text-right">
                          <p className="text-sm text-gray-500">
                            ${item.price} each
                          </p>
                          <p className="text-2xl font-extrabold text-green-700">
                            {(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>

                      {item.quantity >= item.maxQuantity && (
                        <p className="text-xs text-orange-600 mt-2">
                          Max available quantity reached
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Coupon Section */}
              <div className="bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-2xl shadow-md mt-10 p-6">
                <h3 className="flex items-center gap-2 mb-4 text-green-800 font-bold text-lg">
                  <FiTag className="text-green-600" /> Have a Coupon Code?
                </h3>
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="E.g., SAVE10"
                    className="flex-1 px-4 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                  <button
                    onClick={applyCoupon}
                    className="bg.green-600 hover:bg-green-700 cursor-pointer text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-lg hover:shadow-green-300/50"
                  >
                    Apply
                  </button>
                </div>
                {appliedCoupon && (
                  <div className="mt-4 flex items-center justify-between bg-green-100 text-green-800 px-4 py-2 rounded-lg">
                    <span>
                      ✅ <strong>{appliedCoupon}</strong> applied successfully!
                    </span>
                    <button
                      onClick={() => setAppliedCoupon(null)}
                      className="text-sm underline text-green-800 hover:text-green-700"
                    >
                      Remove
                    </button>
                  </div>
                )}
                <p className="text-xs text-gray-500 mt-3 italic">
                  Hint: Try{" "}
                  <span className="font-mono font-bold text-green-700">
                    SAVE10
                  </span>{" "}
                  for 10% off.
                </p>
              </div>
            </div>

            {/* Right: Summary */}
            <aside
              id="checkout"
              className="bg-white border border-gray-100 rounded-2xl shadow-xl p-8 sticky top-28 h-fit"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Order Summary
              </h3>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({cart.length} items)</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount (10%)</span>
                    <span>- ${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-600">
                  <span>Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>
                    <FiTruck className="inline mr-1 text-green-600" /> Shipping
                  </span>
                  <span>
                    {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-green-700">${total.toFixed(2)}</span>
                </div>
              </div>

              {savings > 0 && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center mb-5">
                  <p className="text-green-700 font-semibold">
                    🎉 You’re saving ${savings.toFixed(2)} today!
                  </p>
                </div>
              )}

              <button className="w-full bg-green-600 cursor-pointer hover:bg-green-700 text-white font-semibold py-4 rounded-lg mb-3 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                Proceed to Checkout <FiArrowRight />
              </button>

              <Link
                href="/shop"
                className="block text-center text-green-600 hover:text-green-700 font-medium mt-3"
              >
                Continue Shopping
              </Link>

              <div className="mt-6 border-t pt-6 space-y-3 text-sm text-gray-700">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <FiTruck className="text-green-600" />
                  </div>
                  <span>Free shipping above $50</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">🔒</div>
                  <span>Secure checkout (SSL protected)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">⭐</div>
                  <span>100% satisfaction guaranteed</span>
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>

      {/* Static recommended section can be added here if you want */}

      <Footer />
    </>
  );
}
