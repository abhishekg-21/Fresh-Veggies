// components/FeaturedProducts.tsx
import React from "react";
import { FiShoppingCart, FiHeart, FiEye } from "react-icons/fi";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  img: string;
  badge?: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    price: 2.99,
    originalPrice: 4.99,
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=60",
    badge: "Sale",
    category: "Vegetables",
  },
  {
    id: 2,
    name: "Organic Carrots",
    price: 1.99,
    rating: 5,
    img: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=60",
    badge: "Best Seller",
    category: "Vegetables",
  },
  {
    id: 3,
    name: "Fresh Spinach",
    price: 3.49,
    rating: 4,
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=60",
    category: "Leafy Greens",
  },
  {
    id: 4,
    name: "Green Broccoli",
    price: 2.79,
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=60",
    badge: "Organic",
    category: "Vegetables",
  },
  {
    id: 5,
    name: "Red Peppers",
    price: 3.29,
    originalPrice: 4.49,
    rating: 4,
    img: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=400&q=60",
    badge: "Sale",
    category: "Vegetables",
  },
  {
    id: 6,
    name: "Fresh Cabbage",
    price: 1.89,
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1594282801870-5b0e54d06b7d?auto=format&fit=crop&w=400&q=60",
    category: "Vegetables",
  },
  {
    id: 7,
    name: "Green Beans",
    price: 2.49,
    rating: 4,
    img: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&w=400&q=60",
    category: "Vegetables",
  },
  {
    id: 8,
    name: "Fresh Potatoes",
    price: 1.49,
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=400&q=60",
    badge: "Best Seller",
    category: "Vegetables",
  },
];

const FeaturedProducts: React.FC = () => {
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
        <span className="text-xs text-gray-500 ml-1">({rating})</span>
      </div>
    );
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="text-3xl font-bold text-green-900 mb-2">
              Featured Products
            </h3>
            <p className="text-gray-600">Fresh picks from our organic farms</p>
          </div>
          <button className="hidden md:block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition font-semibold">
            View All Products
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden relative"
            >
              {/* Badge */}
              {product.badge && (
                <div
                  className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white ${
                    product.badge === "Sale"
                      ? "bg-red-500"
                      : product.badge === "Best Seller"
                      ? "bg-orange-500"
                      : "bg-green-600"
                  }`}
                >
                  {product.badge}
                </div>
              )}

              {/* Image Container */}
              <div className="relative overflow-hidden bg-gray-100 h-48">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Hover Action Buttons */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button className="bg-green-100 text-green-600 hover:bg-green-600 hover:text-white p-3 rounded-full transition">
                    <FiShoppingCart className="text-lg" />
                  </button>
                  <button className="bg-green-100 text-green-600 hover:bg-green-600 hover:text-white p-3 rounded-full transition">
                    <FiHeart className="text-lg" />
                  </button>
                  <button className="bg-green-100 text-green-600 hover:bg-green-600 hover:text-white p-3 rounded-full transition">
                    <FiEye className="text-lg" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <p className="text-xs text-green-600 font-semibold mb-1">
                  {product.category}
                </p>
                <h4 className="font-bold text-gray-800 text-lg mb-2 truncate">
                  {product.name}
                </h4>

                {/* Rating */}
                <div className="mb-3">{renderStars(product.rating)}</div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold text-green-700">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through ml-2">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition">
                    <FiShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition font-semibold w-full">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
