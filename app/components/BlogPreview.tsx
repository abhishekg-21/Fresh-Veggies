// components/BlogPreview.tsx
import React from "react";
import { FiClock, FiArrowRight, FiTag } from "react-icons/fi";
import Image from "next/image";

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
}

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
];

const BlogPreview: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-green-100 rounded-full opacity-30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative ">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">
              Our Blog
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-2">
              News & Blog Insight
            </h2>
            <p className="text-gray-600 text-lg">
              Fresh insights and tips for healthy living
            </p>
          </div>
          <button className="hidden md:block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
            View All Posts
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <Image
                  src={post.img}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <FiClock className="text-green-600" />
                    {post.readTime}
                  </span>
                  <span>{post.date}</span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-xl text-gray-900 mb-3 leading-tight group-hover:text-green-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                    >
                      <FiTag className="text-xs" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Author & Read More */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <Image
                      src={post.authorImg}
                      alt={post.author}
                      width={800}
                      height={400}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-sm text-gray-700 font-medium">
                      {post.author}
                    </span>
                  </div>
                  <button className="text-green-600 hover:text-green-700 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More
                    <FiArrowRight />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-10 text-center md:hidden">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold w-full transition-all">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
