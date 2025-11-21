"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FiUser, FiShoppingBag, FiHeart, FiSettings } from "react-icons/fi";

export default function AccountPage() {
  return (
    <>
      <Header />

      {/* Enhanced Account Page Hero */}
      <section className="relative bg-gradient-to-tr from-green-700 via-green-800 to-green-600 text-white py-20 overflow-hidden shadow-md">
        {/* Decorative Circles */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-green-900 opacity-15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-10 w-56 h-56 bg-green-300 opacity-10 rounded-full blur-2xl"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Main Heading */}
            <div className="text-center md:text-left flex-1">
              <div className="flex flex-col items-center md:items-start gap-3">
                <span className="inline-flex items-center gap-2 bg-white/20 text-green-100 rounded-full px-4 py-1 font-semibold tracking-wide uppercase text-xs mb-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5.121 17.804A8 8 0 1118.348 4.575a8 8 0 01-13.227 13.23z"
                    />
                  </svg>
                  Welcome to Your Dashboard
                </span>
                <h1 className="text-5xl font-extrabold drop-shadow-md mb-3">
                  My Account
                </h1>
                <p className="text-lg text-green-50 max-w-xl">
                  Manage your{" "}
                  <span className="font-semibold text-yellow-300 underline underline-offset-2">
                    profile
                  </span>
                  , track{" "}
                  <span className="font-semibold text-yellow-200">orders</span>,
                  and keep your{" "}
                  <span className="font-semibold text-yellow-300">
                    wishlist
                  </span>{" "}
                  updated.
                </p>
              </div>
            </div>
            {/* Avatar Illustration */}
            <div className="hidden md:block">
              <div className="w-32 h-32 bg-green-800/60 rounded-full flex items-center justify-center border-4 border-green-500 shadow-lg relative animate-float">
                <svg width="75" height="75" fill="none" viewBox="0 0 75 75">
                  <circle
                    cx="37.5"
                    cy="37.5"
                    r="36"
                    fill="#FFF"
                    fillOpacity="0.12"
                  />
                  <path
                    d="M37.5 45c-5.25 0-16 2.625-16 7.875V57h32v-4.125C53.5 47.625 42.75 45 37.5 45zM37.5 41.25c3.71 0 6.75-3.04 6.75-6.75s-3.04-6.75-6.75-6.75-6.75 3.04-6.75 6.75 3.04 6.75 6.75 6.75z"
                    fill="#FFF"
                  />
                </svg>
                <span className="absolute right-2 bottom-2 bg-yellow-300 text-green-900 text-xs font-bold px-2 py-0.5 rounded-full shadow">
                  PRO
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Sidebar */}
          <aside className="md:col-span-1">
            <div className="bg-gradient-to-b from-white to-green-50 border border-green-100 rounded-2xl shadow-lg py-8 px-6 sticky top-28">
              <div className="flex flex-col items-center mb-10">
                {/* Animated avatar with status */}
                <div className="relative w-24 h-24 mb-3">
                  <div className="absolute top-0 right-0 w-5 h-5 bg-green-500 border-4 border-white rounded-full animate-pulse z-10"></div>
                  <div className="w-full h-full bg-gradient-to-br from-green-200 to-green-300 rounded-full flex items-center justify-center shadow-lg animate-float">
                    <FiUser className="text-5xl text-green-800" />
                  </div>
                </div>
                <h3 className="font-bold text-xl text-gray-900">John Doe</h3>
                <p className="text-gray-500 text-sm mb-2">john@example.com</p>
                <span className="bg-green-100 text-green-700 text-xs px-3 py-0.5 rounded-full font-semibold mb-4">
                  Verified Member
                </span>
              </div>
              <nav className="flex flex-col gap-2">
                <button className="w-full text-left px-4 py-2 bg-green-50 text-green-700 font-bold rounded transition shadow hover:bg-green-100 flex items-center gap-2">
                  <FiUser /> Profile
                </button>
                <button className="w-full text-left px-4 py-2 bg-green-50 text-green-700 font-bold rounded transition shadow hover:bg-green-100 flex items-center gap-2">
                  <FiShoppingBag /> Orders
                </button>
                <button className="w-full text-left px-4 py-2 bg-green-50 text-green-700 font-bold rounded transition shadow hover:bg-green-100 flex items-center gap-2">
                  <FiHeart /> Wishlist
                </button>
                <button className="w-full text-left px-4 py-2 bg-green-50 text-green-700 font-bold rounded transition shadow hover:bg-green-100 flex items-center gap-2">
                  <FiSettings /> Settings
                </button>
              </nav>
              {/* Logout Button */}
              <button className="w-full mt-7 bg-red-50 hover:bg-red-100 text-red-600 font-semibold py-2 px-4 rounded transition flex items-center gap-2 justify-center shadow">
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
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1"
                  ></path>
                </svg>
                Log Out
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="bg-white border border-gray-100 rounded-2xl shadow-xl p-10">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Profile Information
              </h2>
              <div className="mb-7 border-b border-gray-100 pb-6">
                <div className="flex items-center gap-4">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18.364 5.636l-1.414 1.414A7 7 0 005.636 18.364l-1.414-1.414A9 9 0 1118.364 5.636z"
                    />
                  </svg>
                  <span className="text-gray-600">
                    Keep your profile up to date for personalized
                    recommendations and secure account recovery.
                  </span>
                </div>
              </div>
              <form
                className="space-y-8"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Profile updated successfully!");
                }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      defaultValue="John"
                      className="w-full px-4 py-3 border text-black border-green-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Doe"
                      className="w-full px-4 py-3 border text-black border-green-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      Email address
                    </label>
                    <input
                      type="email"
                      defaultValue="john@example.com"
                      className="w-full px-4 py-3 border text-black text-black border-green-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      Phone
                    </label>
                    <input
                      type="tel"
                      defaultValue="+91 123 456 7890"
                      className="w-full px-4 py-3 border text-black border-green-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                    />
                  </div>
                </div>
                <div>
                  <button
                    className="w-full mt-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 px-8 rounded-lg font-semibold shadow-lg transition-all"
                    type="submit"
                  >
                    Update Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
