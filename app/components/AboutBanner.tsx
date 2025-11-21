// components/AboutBanner.tsx
import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const AboutBanner: React.FC = () => {
  const features = [
    "100% Natural & Organic Products",
    "Farm-to-Table Freshness Guaranteed",
    "Sustainable & Eco-Friendly Practices",
    "Direct Support to Local Farmers",
  ];

  const stats = [
    { value: "10K+", label: "Happy Customers" },
    { value: "500+", label: "Organic Products" },
    { value: "50+", label: "Partner Farms" },
    { value: "99%", label: "Satisfaction Rate" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-white to-green-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-300 rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main Large Image */}
              <div className="col-span-2">
                <img
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80"
                  alt="Fresh Vegetables"
                  className="rounded-2xl shadow-2xl w-full h-64 object-cover"
                />
              </div>
              {/* Two Smaller Images */}
              <img
                src="https://images.unsplash.com/photo-1592921870789-04563d55041c?auto=format&fit=crop&w=400&q=80"
                alt="Farmer"
                className="rounded-xl shadow-lg h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=400&q=80"
                alt="Organic Farm"
                className="rounded-xl shadow-lg h-48 object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="mb-4">
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">
                About Us
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4 leading-tight">
                We Are Committed To Providing High Quality{" "}
                <span className="text-green-600">Organic Food</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At Organo, we believe in bringing nature best directly to your
                table. Our vegetables are grown with love by local farmers using
                sustainable practices, ensuring every bite is packed with
                nutrition and flavor.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FiCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Shop Now
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl font-bold text-green-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
