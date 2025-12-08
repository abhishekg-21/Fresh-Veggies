// components/Testimonials.tsx
import React from "react";
import { FiStar } from "react-icons/fi";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  review: string;
  rating: number;
  img: string;
  verified: boolean;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Home Chef",
    review:
      "Absolutely the freshest and best tasting vegetables! The quality is outstanding and delivery is always on time. My family loves the organic produce.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    verified: true,
    location: "Mumbai, India",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Fitness Enthusiast",
    review:
      "As someone who cares about nutrition, I trust Organo completely. The vegetables are truly organic and you can taste the difference in every bite.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    verified: true,
    location: "Delhi, India",
  },
  {
    id: 3,
    name: "Anjali Patel",
    role: "Restaurant Owner",
    review:
      "We've been sourcing from Organo for our restaurant for over a year. Consistent quality, fair prices, and excellent customer service. Highly recommended!",
    rating: 5,
    img: "https://randomuser.me/api/portraits/women/33.jpg",
    verified: true,
    location: "Bangalore, India",
  },
  {
    id: 4,
    name: "Amit Kumar",
    role: "Health Blogger",
    review:
      "The best thing about Organo is their commitment to sustainability. Fresh, healthy, and delivered with care. This is how shopping for vegetables should be!",
    rating: 4,
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    verified: true,
    location: "Pune, India",
  },
];

const Testimonials: React.FC = () => {
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, index) => (
          <FiStar
            key={index}
            className={`${
              index < rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-white to-green-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-300 rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            What Our Clients Say About Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Dont just take our word for it - hear from our happy customers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="text-green-600 text-5xl font-serif mb-4 opacity-20"></div>

              {/* Rating Stars */}
              {renderStars(testimonial.rating)}

              {/* Review Text */}
              <blockquote className="text-gray-700 text-base leading-relaxed mb-6 italic">
                {testimonial.review}
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <Image
                  src={testimonial.img}
                  alt={testimonial.name}
                  width={800}
                  height={400}
                  className="w-14 h-14 rounded-full object-cover border-2 border-green-200"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    {testimonial.verified && (
                      <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                        ✓ Verified
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-400">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating Summary */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-6xl font-bold text-green-600">4.9</div>
            <div className="text-left">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className="fill-yellow-400 text-yellow-400 text-xl"
                  />
                ))}
              </div>
              <p className="text-gray-600 font-medium">
                Based on 2,500+ reviews
              </p>
            </div>
          </div>
          <p className="text-gray-600">
            Join thousands of satisfied customers who trust Organo for their
            daily fresh produce
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
