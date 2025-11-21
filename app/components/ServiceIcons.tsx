// components/ServiceIcons.tsx
import React from "react";
import {
  FiTruck,
  FiShield,
  FiHeadphones,
  FiPackage,
  FiAward,
  FiRefreshCw,
} from "react-icons/fi";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const services: Service[] = [
  {
    icon: <FiPackage className="text-3xl" />,
    title: "100% Organic",
    description: "Fresh from farm",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: <FiTruck className="text-3xl" />,
    title: "Free Delivery",
    description: "On orders over $50",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: <FiShield className="text-3xl" />,
    title: "Secure Payment",
    description: "100% protected",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: <FiAward className="text-3xl" />,
    title: "Best Quality",
    description: "Premium products",
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    icon: <FiRefreshCw className="text-3xl" />,
    title: "Easy Returns",
    description: "30-day guarantee",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: <FiHeadphones className="text-3xl" />,
    title: "24/7 Support",
    description: "Always here for you",
    color: "bg-red-50 text-red-600",
  },
];

const ServiceIcons: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-900 mb-3">
            Why Choose Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the Organo difference with our commitment to quality,
            service, and sustainability
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl border-2 border-gray-100 p-6 hover:border-green-400 hover:shadow-lg transition-all duration-300 text-center"
            >
              {/* Icon Container */}
              <div
                className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>

              {/* Text Content */}
              <h3 className="font-bold text-gray-800 text-base mb-1 group-hover:text-green-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-xs text-gray-500">{service.description}</p>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-green-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceIcons;
