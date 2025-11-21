"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FiCheckCircle,
  FiUsers,
  FiTruck,
  FiAward,
  FiHeart,
} from "react-icons/fi";
import CountUp from "react-countup";
import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type Stat = {
  value: string;
  suffix?: string;
  label: string;
  icon: React.ReactNode;
};
export default function AboutPage() {
  const stats = [
    {
      value: "10000",
      suffix: "+",
      label: "Happy Customers",
      icon: <FiUsers className="text-3xl" />,
    },
    {
      value: "500",
      suffix: "+",
      label: "Organic Products",
      icon: <FiAward className="text-3xl" />,
    },
    {
      value: "50",
      suffix: "+",
      label: "Partner Farms",
      icon: <FiTruck className="text-3xl" />,
    },
    {
      value: "15",
      suffix: "+",
      label: "Years Experience",
      icon: <FiHeart className="text-3xl" />,
    },
  ];

  const values = [
    {
      title: "Quality First",
      description:
        "We never compromise on the quality of our organic produce. Every vegetable is carefully selected and inspected.",
      icon: <FiAward className="text-4xl text-green-600" />,
    },
    {
      title: "Sustainability",
      description:
        "Our commitment to the environment drives everything we do. We support eco-friendly farming practices.",
      icon: <FiHeart className="text-4xl text-green-600" />,
    },
    {
      title: "Community Support",
      description:
        "We partner directly with local farmers, ensuring fair prices and supporting rural communities.",
      icon: <FiUsers className="text-4xl text-green-600" />,
    },
    {
      title: "Fast Delivery",
      description:
        "Fresh produce delivered to your doorstep within 24 hours. Farm-to-table has never been easier.",
      icon: <FiTruck className="text-4xl text-green-600" />,
    },
  ];

  const team = [
    {
      name: "Aman Singh",
      role: "Lead Farmer",
      bio: "15+ years of organic farming experience",
      img: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      name: "Bhavna Gupta",
      role: "Quality Head",
      bio: "Ensuring premium quality in every product",
      img: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    {
      name: "Raj Patel",
      role: "Delivery Manager",
      bio: "Making sure your orders arrive fresh",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Priya Sharma",
      role: "Customer Success",
      bio: "Your satisfaction is our priority",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];

  // Intersection observer hooks for stats
  const [statsInView, setStatsInView] = useState([false, false, false, false]);
  const statRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  useEffect(() => {
    const observers = statRefs.map(
      (ref, i) =>
        new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setStatsInView((prev) =>
                prev.map((v, idx) => (idx === i ? true : v))
              );
              observers[i].disconnect();
            }
          },
          { threshold: 0.9 }
        )
    );
    statRefs.forEach((ref, i) => {
      if (ref.current) observers[i].observe(ref.current);
    });
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [statRefs]);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-700 via-green-800 to-green-600 text-white py-32 md:py-40 overflow-hidden shadow-lg">
        {/* Decorative Blurs / Orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-[-60px] left-[-60px] w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-80px] right-[-100px] w-[450px] h-[300px] bg-yellow-300/20 rounded-full blur-3xl"></div>
          <div
            className="absolute top-1/2 left-1/2 w-32 h-32 bg-green-400 opacity-15 rounded-full blur-2xl pointer-events-none"
            style={{ transform: "translate(-50%, -50%)" }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          {/* Brand Icon or Illustration */}
          <div className="mb-8 flex justify-center">
            <svg
              width="90"
              height="90"
              viewBox="0 0 90 90"
              fill="none"
              className="drop-shadow-lg"
            >
              <circle cx="45" cy="45" r="43" fill="#D1FAE5" />
              <path
                d="M45,70 Q30,60 22,48 Q15,36 22,30 Q28,24 36,32 Q45,24 54,32 Q62,24 68,30 Q75,36 68,48 Q60,60 45,70Z"
                fill="#FFF"
                stroke="#43A047"
                strokeWidth="2.5"
              />
              <ellipse cx="45" cy="46" rx="8" ry="6" fill="#A7F3D0" />
            </svg>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight drop-shadow-xl">
            About <span className="text-yellow-300">Organo</span>
          </h1>

          <p className="text-2xl md:text-3xl text-green-50 max-w-2xl mx-auto mb-6 font-semibold">
            Bringing{" "}
            <span className="text-yellow-200 font-bold">
              fresh, organic vegetables
            </span>{" "}
            from local farms to your table since 2010.
          </p>

          <p className="text-lg text-green-400 max-w-2xl mx-auto">
            We believe in honest food grown by passionate farmers. Every order
            supports your local community & healthy living—delivered daily, the
            Organo way.
          </p>
        </div>

        {/* Wave divider */}
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

      {/* Our Story */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* Photo collage */}
            <div className="relative flex flex-col gap-4">
              <div className="flex gap-4">
                <img
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80"
                  alt="Fresh Vegetables"
                  className="rounded-3xl shadow-2xl w-2/3 h-64 object-cover border-4 border-white"
                  style={{ zIndex: 2 }}
                />
                <img
                  src="https://images.unsplash.com/photo-1592921870789-04563d55041c?auto=format&fit=crop&w=400&q=80"
                  alt="Farmer"
                  className="rounded-2xl shadow-xl w-1/3 h-44 object-cover border-2 border-yellow-200 -translate-y-8"
                  style={{ zIndex: 1 }}
                />
              </div>
              <img
                src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=400&q=80"
                alt="Organic Farm"
                className="rounded-2xl shadow-xl w-1/2 h-36 object-cover border-2 border-green-200 translate-x-1/2 -translate-y-4"
                style={{ zIndex: 0 }}
              />
              <div className="absolute left-0 -top-7 bg-yellow-400 text-green-900 px-5 py-2 font-bold text-sm uppercase rounded-full shadow animate-bounce ring-2 ring-yellow-200 ring-offset-2 z-20">
                Est. 2010
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="inline-block text-green-600 font-bold text-base uppercase tracking-widest mb-2 animate-fadein">
                Our Story
              </span>
              <h2 className="text-5xl font-extrabold text-gray-900 mt-0 mb-5 leading-tight drop-shadow">
                Fresh Organic Vegetables Since{" "}
                <span className="text-yellow-500">2010</span>
              </h2>
              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                What started as a small family farm has blossomed into a
                trusted, community-powered source for vibrant, chemical-free
                produce. Our mission: deliver the freshest, healthiest
                vegetables—while championing local farmers and regenerative
                agriculture.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-7">
                Today, we work directly with 50+ partner farms. Every carrot,
                leaf, and tomato meets our strict standards—because we
                personally oversee every step, from seed to doorstep, ensuring
                real farm-fresh quality in every delivery.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-green-600 text-2xl" />
                  <span className="text-gray-900 font-semibold">
                    100% Certified Organic
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-green-600 text-2xl" />
                  <span className="text-gray-900 font-semibold">
                    Direct from Local Farms
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-green-600 text-2xl" />
                  <span className="text-gray-900 font-semibold">
                    No Harmful Pesticides—Ever
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-green-600 text-2xl" />
                  <span className="text-gray-900 font-semibold">
                    Same-Day Delivery Available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white relative overflow-hidden">
        <div className="absolute left-[-60px] top-[-40px] w-72 h-72 bg-white/10 rounded-full blur-3xl -z-10" />
        <div className="absolute right-[-50px] bottom-[-60px] w-60 h-60 bg-yellow-400/10 rounded-full blur-2xl -z-10" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat, index) => {
              return <StatCard key={index} stat={stat} />;
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest mb-2 inline-block animate-fadein">
              Our Values
            </span>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6 drop-shadow-md">
              What We Stand For
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed tracking-wide">
              Our core values guide everything we do, from selecting produce to
              delivering to your door.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="mb-6 text-green-600">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide rounded-full bg-green-100 px-4 py-1 inline-block">
              Meet The Team
            </span>
            <h2 className="text-5xl font-extrabold text-gray-900 mt-3 mb-6 drop-shadow">
              The People Behind Your Fresh Produce
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed tracking-wide px-4">
              Dedicated professionals committed to bringing you the best organic
              vegetables
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg transform transition duration-500 hover:-translate-y-3 hover:shadow-2xl overflow-hidden"
              >
                <div className="relative overflow-hidden h-64 bg-gray-100 rounded-t-3xl">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-green-700 font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed tracking-wide">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-700 to-green-800 text-white shadow-inner">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-5xl font-extrabold font-sans drop-shadow-lg leading-tight">
            Ready to Experience Fresh{" "}
            <span className="text-yellow-300">Organic Vegetables</span>?
          </h2>
          <p className="text-2xl text-green-200 font-medium max-w-xl mx-auto tracking-wide">
            Join thousands of satisfied customers who trust{" "}
            <strong>Organo</strong> for their daily fresh produce.
          </p>
          <a
            href="/shop"
            className="inline-flex items-center gap-4 bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold px-10 py-4 rounded-xl shadow-xl transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300"
            aria-label="Start Shopping Now"
          >
            Start Shopping Now
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

// Separate component for stat card to handle inView per card properly
function StatCard({ stat }: { stat: Stat }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <div
      ref={ref}
      className={`
        bg-white/10 rounded-2xl shadow-xl border border-green-500/10 
        backdrop-blur p-8 text-center flex flex-col items-center 
        transition-all duration-300 
        hover:-translate-y-2 hover:shadow-2xl group 
        opacity-0 translate-y-8 
        ${inView ? "animate-fadein-stats opacity-100 translate-y-0" : ""}
      `}
      style={{ animationDelay: "0.15s" }}
    >
      <div className="flex justify-center mb-4">
        <div className="bg-white/30 p-5 rounded-full shadow-lg border-2 border-white/60 group-hover:scale-110 transition">
          {stat.icon}
        </div>
      </div>
      <div className="text-5xl font-extrabold mb-1 tracking-tight text-yellow-300 drop-shadow-xl">
        {inView && (
          <CountUp
            end={parseFloat(stat.value.replace(/[^\d\.]/g, ""))}
            duration={1.6}
            separator=","
            suffix={stat.value.replace(/[\d\,\.]/g, "")}
          />
        )}
      </div>
      <div className="text-lg text-green-50 font-medium">{stat.label}</div>
    </div>
  );
}
