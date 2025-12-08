// components/HeroBanner.tsx
import React from "react";
import Image from "next/image";

const HeroBanner: React.FC = () => {
  return (
    <section
      className="relative w-full h-[400px] md:h-[520px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "/images/hero banner/nrd-D6Tu_L3chLE-unsplash.jpg",
        backgroundSize: "contain ",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10000 via-black/50 to-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-5 leading-tight tracking-tight drop-shadow-xl">
          Discover the Joy of <br />
          <span className="text-green-400 animate-pulse">Organic Living</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 font-medium drop-shadow-sm">
          Healthy, fresh, and wholesome vegetables delivered right to your door.
        </p>
        <button className="bg-green-400 hover:bg-green-300 text-green-900 px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
          Shop Now
        </button>
      </div>

      {/* Decorative Leaf */}
      <Image
        src="/images/hero banner/Hero_banner_image.webp"
        alt="Decorative leaf"
        width={64}
        height={64}
        className="absolute bottom-8 left-8 w-16 h-16 opacity-40 hidden md:block"
      />
    </section>
  );
};

export default HeroBanner;
