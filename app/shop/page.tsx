// /app/shop/page.tsx
"use client";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FiShoppingCart, FiHeart, FiEye, FiFilter } from "react-icons/fi";

interface Product {
  handle: string;
  name: string;
  body: string;
  variantFulfillmentServices: number;
  originalPrice: number;
  rating: number;
  img: string;
  badge?: string;
  productCategory: string;
}

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [products, setProducts] = useState<Product[]>([]);
  const [priceRange, setPriceRange] = useState(100);
  const { addToWishlist, wishlist } = useWishlist();
  const categories = [
    "All",
    "Vegetables",
    "Fruits",
    "Leafy Greens",
    "Organic",
    "Seasonal",
  ];
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("/api/products")
      .then(async (res) => {
        const data = await res.json().catch(() => null);
        if (!res.ok) {
          console.error("/api/products returned error:", data);
          setProducts([]);
          return;
        }
        if (!Array.isArray(data)) {
          console.error("/api/products returned non-array response:", data);
          setProducts([]);
          return;
        }
        setProducts(data);
      })
      .catch((err) => {
        console.error("Error fetching /api/products:", err);
        setProducts([]);
      });
  }, []);

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
    </div>
  );

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "All" ||
        product.productCategory === selectedCategory) &&
      product.variantFulfillmentServices <= priceRange
  );

  return (
    <>
      <Header />

      {/* Page Header */}
      <div className="relative bg-gradient-to-r from-green-700 via-green-800 to-green-600 text-white py-20 shadow-lg overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-900 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 right-0 w-96 h-96 bg-yellow-400 opacity-10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg mb-4 tracking-tight">
            Our <span className="text-yellow-300">Products</span>
          </h1>
          <p className="max-w-xl mx-auto text-xl md:text-2xl text-green-100 font-semibold tracking-wide">
            Fresh organic vegetables from{" "}
            <span className="underline decoration-yellow-300">local farms</span>
            , delivered daily.
          </p>
        </div>

        <svg
          className="absolute bottom-0 left-0 w-full text-white"
          viewBox="0 0 1440 120"
          fill="none"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,64L80,53.3C160,43,320,21,480,37.3C640,53,800,107,960,128C1120,149,1280,139,1360,133.3L1440,128V160H0Z"
          />
        </svg>
      </div>

      {/* Shop Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-3xl shadow-lg p-6 sticky top-24">
              <h3 className="font-bold text-lg mb-6 flex items-center gap-3 text-green-700">
                <FiFilter className="text-2xl" aria-hidden="true" />
                <span>Filters</span>
              </h3>

              {/* Categories */}
              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-gray-900">Categories</h4>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-5 py-3 rounded-xl font-semibold transition-all duration-300 ${
                        selectedCategory === cat
                          ? "bg-green-700 text-white shadow-md"
                          : "hover:bg-green-100 text-gray-700"
                      }`}
                      aria-pressed={selectedCategory === cat}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h4 className="font-semibold mb-4 text-gray-900">
                  Price Range
                </h4>
                <input
                  type="range"
                  min="0"
                  max="100"
                  className="w-full accent-green-600 cursor-pointer"
                  value={priceRange}
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
                  aria-label="Filter products by price range"
                />
                <div className="flex justify-between text-sm text-green-600 mt-2 font-medium">
                  <span>$0</span>
                  <span>${priceRange}</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            {/* Sort & View Options */}
            <div className="flex justify-between items-center mb-8 px-2 md:px-0">
              <p className="text-white font-medium">
                {`Showing ${filteredProducts.length} products`}
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                aria-label="Sort products"
              >
                <option value="featured" className="text-gray-700">
                  Featured
                </option>
                <option value="price-low" className="text-gray-700">
                  Price: Low to High
                </option>
                <option value="price-high" className="text-gray-700">
                  Price: High to Low
                </option>
                <option value="rating" className="text-gray-700">
                  Highest Rated
                </option>
              </select>
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <Link
                  key={product.handle}
                  href={`/shop/${product.handle}`}
                  className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden relative block"
                  tabIndex={0}
                  aria-label={`${product.name}, price $${product.variantFulfillmentServices}`}
                >
                  {product.badge && (
                    <div
                      className="absolute top-3 left-3 z-10 px-4 py-1 rounded-full text-xs font-bold text-white bg-red-600 shadow-lg"
                      aria-label="Product badge"
                    >
                      {product.badge}
                    </div>
                  )}
                  <div className="relative overflow-hidden bg-gray-100 h-52 rounded-t-3xl">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      width={320}
                      height={208}
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 rounded-t-3xl">
                      <button
                        className="bg-green-100 text-green-600 hover:bg-green-600 hover:text-white p-3 rounded-full transition cursor-pointer"
                        aria-label={`Add ${product.name} to Cart`}
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          addToCart({
                            handle: product.handle,
                            name: product.name,
                            price: product.variantFulfillmentServices,
                            originalPrice: product.originalPrice,
                            img: product.img,
                            category: product.productCategory,
                            rating: product.rating,
                            inStock: true, // 👈 Add these
                            maxQuantity: 10, // 👈 Add these
                          });
                          // Optionally show a notification!
                        }}
                      >
                        <FiShoppingCart className="text-xl" />
                      </button>
                      <button
                        className={`bg-green-100 text-green-600 hover:bg-green-600 hover:text-white p-3 rounded-full transition cursor-pointer ${
                          wishlist.find(
                            (item) => item.handle === product.handle
                          )
                            ? "bg-red-200 text-red-600"
                            : ""
                        }`}
                        aria-label={`Add ${product.name} to Wishlist`}
                        onClick={(e) => {
                          e.preventDefault();
                          addToWishlist({
                            handle: product.handle,
                            name: product.name,
                            price: product.variantFulfillmentServices,
                            originalPrice: product.originalPrice,
                            img: product.img,
                            category: product.productCategory,
                            rating: product.rating,
                          });
                        }}
                      >
                        <FiHeart className="text-xl" />
                      </button>
                      <button
                        className="bg-green-100 text-green-600 hover:bg-green-600 hover:text-white p-3 rounded-full transition cursor-pointer"
                        aria-label={`View details of ${product.name}`}
                      >
                        <FiEye className="text-xl" />
                      </button>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-green-700 font-semibold mb-2 uppercase tracking-wider">
                      {product.productCategory}
                    </p>
                    <h4 className="font-bold text-gray-900 text-lg mb-2 truncate">
                      {product.name}
                    </h4>
                    {/* renderStars(product.rating) */}
                    <div className="flex items-center justify-between mt-4">
                      <div>
                        <span className="text-2xl font-bold text-green-700">
                          ${product.variantFulfillmentServices}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through ml-3">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
}
