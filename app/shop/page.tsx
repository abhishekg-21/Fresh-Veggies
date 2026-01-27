"use client";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiShoppingCart,
  FiHeart,
  FiEye,
  FiFilter,
  FiTruck,
  FiZap,
  FiStar,
} from "react-icons/fi";

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
  inStock?: boolean;
}

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState(100);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  const { addToCart } = useCart();
  const { addToWishlist, wishlist } = useWishlist();

  const categories = [
    "All",
    "Vegetables",
    "Fruits",
    "Leafy Greens",
    "Organic",
    "Seasonal",
  ];

  // ✅ FIXED: Separate loading state + useEffect cleanup
  useEffect(() => {
    let mounted = true;

    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();

        if (mounted && res.ok && Array.isArray(data)) {
          setProducts(data);
        } else if (mounted) {
          console.error("/api/products error:", data);
          setProducts([]);
        }
      } catch (err) {
        if (mounted) {
          console.error("Fetch error:", err);
          setProducts([]);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchProducts();

    return () => {
      mounted = false; // Cleanup flag
    };
  }, []);

  // ✅ FIXED: Use const instead of let for result (never reassigned)
  const filteredProducts = useMemo(() => {
    const result = products.filter(
      (product) =>
        (selectedCategory === "All" ||
          product.productCategory === selectedCategory) &&
        product.variantFulfillmentServices <= priceRange,
    );

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        result.sort(
          (a, b) => a.variantFulfillmentServices - b.variantFulfillmentServices,
        );
        break;
      case "price-high":
        result.sort(
          (a, b) => b.variantFulfillmentServices - a.variantFulfillmentServices,
        );
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
    }
    return result;
  }, [products, selectedCategory, priceRange, sortBy]);

  const renderStars = (rating: number) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <motion.span
          key={i}
          className={`text-xs transition-all ${
            i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
          }`}
          whileHover={{ scale: 1.3 }}
        >
          ★
        </motion.span>
      ))}
      <span className="text-xs text-gray-500 ml-1">({rating})</span>
    </div>
  );

  // ✅ FIXED: Map Product to WishlistProduct type
  const addToCartHandler = useCallback(
    (e: React.MouseEvent, product: Product) => {
      e.preventDefault();
      e.stopPropagation();
      addToCart({
        handle: product.handle,
        name: product.name,
        price: product.variantFulfillmentServices,
        originalPrice: product.originalPrice,
        img: product.img,
        category: product.productCategory,
        rating: product.rating,
        inStock: true,
        maxQuantity: 10,
      });
    },
    [addToCart],
  );

  // ✅ FIXED: Create proper WishlistProduct object
  const addToWishlistHandler = useCallback(
    (e: React.MouseEvent, product: Product) => {
      e.preventDefault();
      e.stopPropagation();

      // Map Product to expected WishlistProduct shape
      const wishlistProduct = {
        handle: product.handle,
        name: product.name,
        price: product.variantFulfillmentServices, // ✅ Required field
        img: product.img,
        category: product.productCategory, // ✅ Required field
        rating: product.rating,
        originalPrice: product.originalPrice,
        inStock: product.inStock ?? true,
      };

      addToWishlist(wishlistProduct);
    },
    [addToWishlist],
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 relative overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-gradient-to-r from-emerald-600 via-green-700 to-emerald-800 text-white 
             h-[60vh] md:h-[70vh] lg:h-[90vh] min-h-[600px]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="text-[12rem] mx-auto  drop-shadow-4xl opacity-80"
        >
          🥬
        </motion.div>

        <div className="max-w-6xl mx-auto px-6 text-center relative">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-yellow-300 via-white to-yellow-200 bg-clip-text text-transparent leading-tight drop-shadow-2xl mt-0 mb-2"
          >
            Fresh Harvest
          </motion.h1>

          {/* Subtitle - Lower down */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl text-emerald-100/90 max-w-2xl mx-auto mb-0 leading-relaxed font-medium"
          >
            Straight from farm to your table.
            <span className="block text-yellow-200 font-bold mt-2">
              24hr freshness guaranteed
            </span>
          </motion.p>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-4 bg-white/20 backdrop-blur-xl px-10 py-6 rounded-3xl shadow-2xl border border-white/30 font-bold text-xl text-white"
          >
            <FiTruck className="w-8 h-8" />
            <span>Free Delivery over ₹299</span>
            <motion.div
              className="w-3 h-3 bg-emerald-300 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </div>

        {/* Wave separator */}
        {/* <svg
          className="absolute bottom-0 left-0 w-full h-24 text-emerald-50"
          viewBox="0 0 1440 120"
          fill="none"
        >
          <path
            d="M0,96L48,90.7C96,85,192,75,288,80C384,85,480,107,576,112C672,117,768,107,864,101.3C960,96,1056,96,1152,101.3C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            fill="currentColor"
          />
        </svg> */}
      </motion.section>

      <div className="max-w-7xl mx-auto px-6 py-20 relative">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <motion.aside
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="w-full lg:w-80 flex-shrink-0 lg:sticky lg:top-32"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-emerald-200/50"
            >
              <h3 className="text-2xl font-black mb-8 flex items-center gap-3 text-emerald-800">
                <FiFilter className="w-8 h-8" />
                Refine Results
              </h3>

              {/* Categories */}
              <div className="mb-10">
                <h4 className="font-bold text-lg mb-6 text-gray-900 flex items-center gap-2">
                  Categories
                </h4>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <motion.button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      className={`group w-full text-left px-6 py-4 rounded-2xl font-semibold transition-all border ${
                        selectedCategory === cat
                          ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white border-emerald-400 shadow-lg"
                          : "border-emerald-200/50 hover:border-emerald-300 hover:bg-emerald-50 text-gray-800 hover:shadow-md"
                      }`}
                    >
                      <span className="flex items-center justify-between">
                        {cat}
                        <motion.div
                          className={`w-3 h-3 rounded-full transition-all ${
                            selectedCategory === cat
                              ? "bg-white"
                              : "bg-emerald-500"
                          }`}
                          animate={
                            selectedCategory === cat
                              ? { scale: [1, 1.3, 1] }
                              : {}
                          }
                        />
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h4 className="font-bold text-lg mb-6 text-gray-900">
                  Price Range
                </h4>
                <div className="relative">
                  <input
                    type="range"
                    min="0"
                    max="200"
                    step="10"
                    value={priceRange}
                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
                    className="w-full h-3 bg-emerald-200 rounded-lg appearance-none cursor-pointer accent-emerald-600 hover:accent-emerald-500 shadow-md"
                  />
                  <div className="flex justify-between text-sm text-emerald-700 mt-3 font-semibold">
                    <span>₹0</span>
                    <span>₹{priceRange}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.aside>

          {/* Products Section */}
          <motion.main
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1"
          >
            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4 bg-white/60 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-emerald-200/50">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold text-emerald-800"
              >
                {filteredProducts.length}{" "}
                {filteredProducts.length === 1 ? "product" : "products"} found
              </motion.div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-6 py-3 bg-white rounded-2xl border-2 border-emerald-200 focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-100 shadow-lg font-semibold text-lg text-black transition-all hover:shadow-xl"
              >
                <option value="featured">Featured First</option>
                <option value="price-low">Price: Low → High</option>
                <option value="price-high">Price: High → Low</option>
                <option value="rating">Best Rated</option>
              </select>
            </div>

            {/* Loading & Products */}
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                >
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-6 animate-pulse border border-emerald-200/50"
                    >
                      <div className="bg-emerald-200/50 rounded-2xl h-48 mb-4 animate-pulse"></div>
                      <div className="h-6 bg-emerald-200/50 rounded-xl mb-3 animate-pulse"></div>
                      <div className="h-6 bg-emerald-200/30 rounded-xl w-3/4 animate-pulse"></div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  <AnimatePresence>
                    {filteredProducts.map((product, index) => (
                      <motion.div
                        key={product.handle}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        exit={{ opacity: 0 }}
                        className="group"
                      >
                        <Link
                          href={`/shop/${product.handle}`}
                          className="block bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl border border-emerald-200/50 hover:border-emerald-400/70 transition-all duration-500 overflow-hidden hover:-translate-y-3"
                        >
                          {/* Badge */}
                          {product.badge && (
                            <motion.div
                              className="absolute top-4 left-4 px-4 py-2 rounded-2xl text-xs font-black text-white bg-gradient-to-r from-red-500 to-pink-600 shadow-2xl"
                              whileHover={{ scale: 1.1 }}
                            >
                              {product.badge}
                            </motion.div>
                          )}

                          {/* Image + Quick Actions */}
                          <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-green-50 h-56 rounded-t-3xl">
                            <img
                              src={product.img}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              loading="lazy"
                            />

                            {/* Quick Actions Overlay */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4 p-6"
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileHover={{ opacity: 1, scale: 1 }}
                            >
                              <motion.button
                                onClick={(e) => addToCartHandler(e, product)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-14 h-14 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl flex items-center justify-center text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all border border-emerald-200/50"
                                aria-label={`Add ${product.name} to cart`}
                              >
                                <FiShoppingCart className="w-6 h-6" />
                              </motion.button>

                              {/* ✅ FIXED: Use proper handler with mapped product */}
                              <motion.button
                                onClick={(e) =>
                                  addToWishlistHandler(e, product)
                                }
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className={`w-14 h-14 bg-white/90 backdrop-blur-xl rounded-3xl text-red-500 shadow-2xl flex items-center justify-center hover:bg-red-500 hover:text-white transition-all border border-emerald-200/50 ${
                                  wishlist.some(
                                    (item) => item.handle === product.handle,
                                  )
                                    ? "bg-red-500/30 border-red-300 shadow-red-200"
                                    : ""
                                }`}
                                aria-label={`Toggle ${product.name} wishlist`}
                              >
                                <FiHeart className="w-6 h-6" />
                              </motion.button>

                              <Link
                                href={`/shop/${product.handle}`}
                                className="w-14 h-14 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl flex items-center justify-center hover:bg-emerald-500 text-emerald-500 hover:text-white transition-all border border-emerald-200/50"
                              >
                                <FiEye className="w-6 h-6" />
                              </Link>
                            </motion.div>
                          </div>

                          {/* Product Info */}
                          <div className="p-6">
                            <motion.p
                              className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-3"
                              whileHover={{ scale: 1.05 }}
                            >
                              {product.productCategory}
                            </motion.p>

                            <h3 className="font-black text-xl text-gray-900 mb-3 leading-tight line-clamp-2 group-hover:text-emerald-800 transition-colors">
                              {product.name}
                            </h3>

                            {renderStars(product.rating)}

                            <div className="flex items-center justify-between mt-6 pt-4 border-t border-emerald-100">
                              <div className="space-y-1">
                                <div className="flex items-baseline gap-2">
                                  <span className="text-2xl font-black text-emerald-800">
                                    ₹{product.variantFulfillmentServices}
                                  </span>
                                  {product.originalPrice && (
                                    <span className="text-lg text-gray-400 line-through font-medium">
                                      ₹{product.originalPrice}
                                    </span>
                                  )}
                                </div>
                                <div className="flex items-center gap-2 text-emerald-600 text-sm font-semibold">
                                  <FiZap className="w-3 h-3" />
                                  <span>Free Delivery</span>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="w-20 h-1 bg-emerald-200 rounded-full overflow-hidden">
                                  <motion.div
                                    className="h-full bg-gradient-to-r from-emerald-500 to-green-600"
                                    initial={{ width: 0 }}
                                    animate={{
                                      width: `${Math.min((product.rating / 5) * 100, 100)}%`,
                                    }}
                                    transition={{ duration: 1 }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {!loading && filteredProducts.length === 0 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="col-span-full text-center py-32"
                    >
                      <div className="text-8xl mb-8 opacity-50">🥬</div>
                      <h3 className="text-4xl font-black text-gray-800 mb-4">
                        No products found
                      </h3>
                      <p className="text-xl text-gray-600 mb-8">
                        Try adjusting your filters
                      </p>
                      <motion.button
                        onClick={() => {
                          setSelectedCategory("All");
                          setPriceRange(200);
                          setSortBy("featured");
                        }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-12 py-4 rounded-3xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all"
                      >
                        Clear Filters
                      </motion.button>
                    </motion.div>
                  )}
                </div>
              )}
            </AnimatePresence>
          </motion.main>
        </div>
      </div>
    </div>
  );
}
