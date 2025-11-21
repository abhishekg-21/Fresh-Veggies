"use client";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FiClock, FiUser, FiArrowRight, FiTag, FiSearch } from "react-icons/fi";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  img: string;
  category: string;
  author: string;
  authorImg: string;
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Health & Wellness",
    "Kitchen Tips",
    "Farm Stories",
    "Recipes",
    "Sustainability",
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "5 Amazing Benefits of Eating Local Organic Vegetables",
      excerpt:
        "Discover why choosing local organic produce not only improves your health but also supports your community and the environment.",
      img: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=800&q=80",
      category: "Health & Wellness",
      author: "Priya Sharma",
      authorImg: "https://randomuser.me/api/portraits/women/68.jpg",
      date: "Oct 20, 2025",
      readTime: "5 min read",
      tags: ["Organic", "Health", "Sustainability"],
      featured: true,
    },
    {
      id: 2,
      title: "How To Store Fresh Greens For Maximum Freshness",
      excerpt:
        "Learn the best techniques to keep your leafy greens crispy, fresh, and nutritious for longer periods with these simple storage tips.",
      img: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
      category: "Kitchen Tips",
      author: "Rahul Verma",
      authorImg: "https://randomuser.me/api/portraits/men/22.jpg",
      date: "Oct 18, 2025",
      readTime: "4 min read",
      tags: ["Storage", "Tips", "Vegetables"],
    },
    {
      id: 3,
      title: "Farm-to-Table: The Journey of Your Vegetables",
      excerpt:
        "Take a behind-the-scenes look at how your vegetables travel from our partner farms directly to your kitchen table.",
      img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80",
      category: "Farm Stories",
      author: "Anjali Patel",
      authorImg: "https://randomuser.me/api/portraits/women/33.jpg",
      date: "Oct 15, 2025",
      readTime: "6 min read",
      tags: ["Farm", "Organic", "Story"],
    },
    {
      id: 4,
      title: "10 Quick and Healthy Vegetable Recipes",
      excerpt:
        "Easy-to-make recipes that celebrate the natural flavors of fresh vegetables. Perfect for busy weeknight dinners.",
      img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
      category: "Recipes",
      author: "Priya Sharma",
      authorImg: "https://randomuser.me/api/portraits/women/68.jpg",
      date: "Oct 12, 2025",
      readTime: "7 min read",
      tags: ["Recipes", "Cooking", "Quick Meals"],
    },
    {
      id: 5,
      title: "Why Organic Farming Matters for Our Planet",
      excerpt:
        "Understanding the environmental impact of conventional vs. organic farming and how your choices make a difference.",
      img: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80",
      category: "Sustainability",
      author: "Rahul Verma",
      authorImg: "https://randomuser.me/api/portraits/men/22.jpg",
      date: "Oct 10, 2025",
      readTime: "8 min read",
      tags: ["Environment", "Organic", "Sustainability"],
    },
    {
      id: 6,
      title: "Seasonal Eating: What's Fresh This Month",
      excerpt:
        "A guide to seasonal vegetables and why eating with the seasons is better for your health and the environment.",
      img: "https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=800&q=80",
      category: "Health & Wellness",
      author: "Anjali Patel",
      authorImg: "https://randomuser.me/api/portraits/women/33.jpg",
      date: "Oct 8, 2025",
      readTime: "5 min read",
      tags: ["Seasonal", "Health", "Guide"],
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-700 via-green-800 to-green-600 text-white py-24 overflow-hidden shadow-lg">
        {/* Decorative layered orbs */}
        <div className="absolute left-6 top-6 w-36 h-36 bg-yellow-400 opacity-20 rounded-full blur-3xl filter animate-pulse"></div>
        <div className="absolute right-10 bottom-10 w-52 h-52 bg-green-900 opacity-10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 text-center space-y-10 relative z-20">
          <h1 className="text-6xl font-extrabold drop-shadow-lg tracking-tight leading-tight">
            Our <span className="text-yellow-300">Blog</span>
          </h1>

          <p className="text-2xl text-green-100 max-w-2xl mx-auto font-semibold tracking-wide">
            Fresh insights, tips, and stories for healthy living
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full py-4 pl-6 pr-14 rounded-full shadow-2xl border-2 border-yellow-400 focus:border-yellow-500 text-gray-900 font-semibold transition focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-50 placeholder-gray-500"
              aria-label="Search blog articles"
              spellCheck={false}
            />
            <FiSearch className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 text-3xl pointer-events-none" />
          </div>
        </div>

        {/* Subtle bottom wave SVG */}
        <svg
          className="absolute bottom-0 left-0 w-full text-white"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,64L80,53.3C160,43,320,21,480,37.3C640,53,800,107,960,128C1120,149,1280,139,1360,133.3L1440,128V160H0Z"
          />
        </svg>
      </div>

      {/* Category Filter */}
      <div className="bg-white border-b sticky top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-green-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full whitespace-nowrap font-semibold transition 
            focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 
            ${
              selectedCategory === cat
                ? "bg-green-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }
          `}
                aria-pressed={selectedCategory === cat}
                aria-label={`Filter category ${cat}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Featured Post */}
        {featuredPost && selectedCategory === "All" && !searchQuery && (
          <section className="mb-16">
            <h2 className="text-3xl font-extrabold mb-8 text-gray-900">
              Featured Article
            </h2>
            <article className="bg-white rounded-3xl shadow-2xl overflow-hidden md:flex">
              <div className="md:w-1/2 h-80 md:h-auto">
                <img
                  src={featuredPost.img}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="md:w-1/2 p-10 flex flex-col justify-between">
                <div>
                  <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                  <h3 className="text-4xl font-extrabold mt-6 mb-4 text-gray-900">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                    <time className="flex items-center gap-2">
                      <FiClock className="text-green-600" aria-hidden="true" />
                      <span>{featuredPost.readTime}</span>
                    </time>
                    <span>{featuredPost.date}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={featuredPost.authorImg}
                      alt={featuredPost.author}
                      className="w-12 h-12 rounded-full object-cover"
                      loading="lazy"
                    />
                    <span className="font-medium text-gray-900">
                      {featuredPost.author}
                    </span>
                  </div>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg flex items-center gap-3 transition">
                    Read More <FiArrowRight aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          </section>
        )}

        {/* Blog Grid */}
        <section>
          <h2 className="text-3xl font-extrabold mb-10 text-gray-900">
            {selectedCategory === "All" ? "All Articles" : selectedCategory}
          </h2>

          {regularPosts.length === 0 ? (
            <p className="text-center text-gray-500 text-lg py-16">
              No articles found matching your criteria.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {regularPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100"
                  tabIndex={0}
                  aria-label={`Article: ${post.title}`}
                >
                  <div className="relative h-56 overflow-hidden bg-gray-100 rounded-t-2xl">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                      <time className="flex items-center gap-1">
                        <FiClock
                          className="text-green-600"
                          aria-hidden="true"
                        />
                        {post.readTime}
                      </time>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="font-extrabold text-2xl text-gray-900 mb-4 line-clamp-2 group-hover:text-green-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {post.tags.slice(0, 2).map((tag, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs"
                        >
                          <FiTag className="text-xs" aria-hidden="true" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-3">
                        <img
                          src={post.authorImg}
                          alt={post.author}
                          className="w-8 h-8 rounded-full object-cover"
                          loading="lazy"
                        />
                        <span className="text-gray-700 font-medium text-sm">
                          {post.author}
                        </span>
                      </div>
                      <button className="text-green-600 hover:text-green-700 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                        Read <FiArrowRight aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Pagination */}
        {regularPosts.length > 0 && (
          <nav
            className="flex justify-center gap-3 mt-16"
            aria-label="Blog pagination"
          >
            {[1, 2, 3, 4].map((page) => (
              <button
                key={page}
                className={`px-5 py-2 rounded-lg font-semibold transition ${
                  page === 1
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                } focus:outline-none focus:ring-2 focus:ring-green-400`}
                aria-current={page === 1 ? "page" : undefined}
              >
                {page}
              </button>
            ))}
          </nav>
        )}
      </div>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center text-white space-y-6">
          <h2 className="text-4xl font-extrabold drop-shadow-lg">
            Stay Updated with Our Blog
          </h2>
          <p className="text-lg max-w-xl mx-auto text-green-100 font-medium">
            Get weekly tips, recipes, and organic living insights delivered
            straight to your inbox.
          </p>
          <form
            className="flex max-w-md mx-auto gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 rounded-full shadow-lg
    text-gray-900 font-semibold placeholder-gray-400
    transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-60
    caret-green-600
    placeholder-shown:italic placeholder-shown:text-gray-400
    placeholder-shown:font-normal border-2 border-yellow-400 focus:border-yellow-600"
              aria-label="Enter your email"
              spellCheck={false}
              autoComplete="email"
            />

            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold px-8 py-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Optional decorative blur */}
        <div className="pointer-events-none absolute -top-16 right-10 w-48 h-48 bg-yellow-300 opacity-30 rounded-full blur-3xl"></div>
      </section>

      <Footer />
    </>
  );
}
