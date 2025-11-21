// components/Header.tsx
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiSearch,
  FiShoppingCart,
  FiHeart,
  FiUser,
  FiMenu,
  FiX,
  FiPhone,
  FiMail,
  FiChevronDown,
} from "react-icons/fi";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import shop from "../shop/page";
import cart from "../cart/page";
const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const [wishlistCount, setWishlistCount] = useState(5);
  const pathname = usePathname(); // Use usePathname instead of useRouter

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Shop",
      href: "/shop",
      submenu: [
        { name: "Fresh Vegetables", href: "./shop" },
        { name: "Organic Fruits", href: "/shop?category=fruits" },
        { name: "Leafy Greens", href: "/shop?category=greens" },
        { name: "Seasonal Produce", href: "/shop?category=seasonal" },
      ],
    },
    { name: "About", href: "./about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "./contact" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-[#2C332D] text-gray-300 text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href="tel:+911234567890"
              className="flex items-center gap-2 hover:text-green-400 transition"
            >
              <FiPhone className="text-green-400" />
              <span>+91 123 456 7890</span>
            </a>
            <a
              href="mailto:support@organo.com"
              className="flex items-center gap-2 hover:text-green-400 transition"
            >
              <FiMail className="text-green-400" />
              <span>support@organo.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">Follow Us:</span>
            <div className="flex gap-3">
              <a href="#" className="hover:text-green-400 transition">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-green-400 transition">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-green-400 transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-green-400 transition">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div
        className={`transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-[#233125]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">O</span>
              </div>
              <span
                className={`font-extrabold text-2xl tracking-wide transition ${
                  scrolled ? "text-green-700" : "text-green-300"
                }`}
              >
                Organo
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 font-medium transition ${
                      scrolled
                        ? "text-gray-700 hover:text-green-600"
                        : "text-gray-200 hover:text-green-400"
                    } ${
                      pathname === item.href
                        ? "text-green-500 font-semibold"
                        : ""
                    }`}
                  >
                    {item.name}
                    {item.submenu && <FiChevronDown className="text-sm" />}
                  </Link>

                  {/* Dropdown Submenu */}
                  {item.submenu && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="py-2">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Search, Icons & CTA */}
            <div className="flex items-center gap-3">
              {/* Search Bar */}
              <div className="hidden md:flex items-center relative">
                {searchOpen ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Search products..."
                      autoFocus
                      className="w-64 px-4 py-2 rounded-lg border-2 border-green-400 focus:outline-none text-gray-900"
                      onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
                    />
                    <button
                      onClick={() => setSearchOpen(false)}
                      className="text-gray-600 hover:text-green-600"
                    >
                      <FiX className="text-xl" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setSearchOpen(true)}
                    className={`p-2 rounded-full transition ${
                      scrolled
                        ? "hover:bg-gray-100 text-gray-700"
                        : "hover:bg-[#31402f] text-green-300"
                    }`}
                  >
                    <FiSearch className="text-xl" />
                  </button>
                )}
              </div>

              {/* Wishlist */}
              <Link
                href="./wishlist"
                className={`relative p-2 rounded-full transition ${
                  scrolled
                    ? "hover:bg-gray-100 text-gray-700"
                    : "hover:bg-[#31402f] text-green-300"
                }`}
              >
                <FiHeart className="text-xl" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <Link
                href="./cart"
                className={`relative p-2 rounded-full transition ${
                  scrolled
                    ? "hover:bg-gray-100 text-gray-700"
                    : "hover:bg-[#31402f] text-green-300"
                }`}
              >
                <FiShoppingCart className="text-xl" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* User Account */}
              <Link
                href="./account"
                className={`hidden sm:flex p-2 rounded-full transition ${
                  scrolled
                    ? "hover:bg-gray-100 text-gray-700"
                    : "hover:bg-[#31402f] text-green-300"
                }`}
              >
                <FiUser className="text-xl" />
              </Link>

              {/* CTA Button */}
              <Link
                href="/shop"
                className="hidden md:block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow-lg transition-all ml-2"
              >
                Shop Now
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden text-2xl ${
                  scrolled ? "text-gray-700" : "text-green-300"
                }`}
              >
                {mobileMenuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-xl border-t">
          <nav className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block py-3 px-4 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="ml-4 space-y-1 mt-1">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block py-2 px-4 text-gray-600 hover:text-green-600 text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/shop"
              className="block mt-4 bg-green-600 hover:bg-green-700 text-white text-center font-semibold px-6 py-3 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
