"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiCheckCircle, FiUsers, FiTruck, FiAward, FiHeart, FiZap,
  FiFeather, FiSun, FiGlobe, FiShield
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
    { value: "10000", suffix: "+", label: "Happy Customers", icon: <FiUsers className="text-3xl" /> },
    { value: "500", suffix: "+", label: "Organic Products", icon: <FiAward className="text-3xl" /> },
    { value: "50", suffix: "+", label: "Partner Farms", icon: <FiTruck className="text-3xl" /> },
    { value: "15", suffix: "+", label: "Years Experience", icon: <FiHeart className="text-3xl" /> },
  ];

  const values = [
    { title: "Quality First", description: "Every vegetable carefully selected and inspected.", icon: <FiAward className="text-4xl" /> },
    { title: "Sustainability", description: "Eco-friendly farming practices for future generations.", icon: <FiHeart className="text-4xl" /> },
    { title: "Community Support", description: "Fair prices for local farmers, strong rural communities.", icon: <FiUsers className="text-4xl" /> },
    { title: "Fast Delivery", description: "Farm-to-table within 24 hours—always fresh.", icon: <FiTruck className="text-4xl" /> },
  ];

  const team = [
    { name: "Aman Singh", role: "Lead Farmer", bio: "15+ years organic farming", img: "https://randomuser.me/api/portraits/men/11.jpg" },
    { name: "Bhavna Gupta", role: "Quality Head", bio: "Premium quality assurance", img: "https://randomuser.me/api/portraits/women/21.jpg" },
    { name: "Raj Patel", role: "Delivery Manager", bio: "Freshness guaranteed", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Priya Sharma", role: "Customer Success", bio: "Your satisfaction first", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 overflow-hidden">
      {/* Hero - Matches your system */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }} 
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-gradient-to-r from-emerald-600 via-green-700 to-emerald-800 text-white py-28 md:py-36 overflow-hidden"
      >
        {/* Particles */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-30 pointer-events-none drop-shadow-lg"
            style={{ 
              left: `${10 + i * 18}%`, 
              top: `${20 + i * 12}%`,
              animationDelay: `${i * 0.3}s`
            }}
            animate={{ 
              y: [0, -30, 0], 
              rotate: [0, 180, 360],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 10 + i * 2, repeat: Infinity }}
          >
            {['🥬', '🥕', '🍅', '🥒', '🌱'][i % 5]}
          </motion.div>
        ))}

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 flex flex-col items-center justify-center h-full gap-8 md:gap-12">
          <motion.div 
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-[10rem] drop-shadow-4xl opacity-90 mb-[-4rem]"
          >
            🌱
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-yellow-300 via-white to-yellow-200 bg-clip-text text-transparent leading-tight drop-shadow-2xl"
          >
            About <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">Organo</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl lg:text-3xl text-emerald-100/95 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Fresh organic vegetables from local farms to your table since <span className="text-yellow-200 font-bold block text-2xl md:text-3xl mt-2">2010</span>
          </motion.p>

          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-4 bg-white/20 backdrop-blur-xl px-10 py-6 rounded-3xl shadow-2xl border border-white/40 font-bold text-xl text-white"
          >
            <FiShield className="w-8 h-8" />
            <span>100% Organic Certified</span>
            <motion.div 
              className="w-3 h-3 bg-emerald-300 rounded-full" 
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </div>

        <svg className="absolute bottom-0 left-0 w-full h-24 text-emerald-50" viewBox="0 0 1440 120" fill="none">
          <path d="M0,96L48,90.7C96,85,192,75,288,80C384,85,480,107,576,112C672,117,768,107,864,101.3C960,96,1056,96,1152,101.3C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" fill="currentColor"/>
        </svg>
      </motion.section>

      {/* Our Story */}
      <section className="py-28 bg-white/70 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced Photo Collage */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="relative flex flex-col gap-6"
            >
              <div className="relative z-10">
                <Image
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1000&q=85"
                  alt="Fresh harvest"
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-2xl w-full h-80 object-cover border-4 border-white/80 hover:scale-105 transition-all duration-700"
                />
                <motion.div 
                  className="absolute -top-6 left-8 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-2xl font-bold shadow-2xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  Est. 2010
                </motion.div>
              </div>

              <div className="grid grid-cols-2 gap-4 -mt-12 lg:-mt-16 z-0">
                <Image
                  src="https://images.unsplash.com/photo-1592921870789-04563d55041c?auto=format&fit=crop&w=500&q=85"
                  alt="Farmer at work"
                  width={300}
                  height={250}
                  className="rounded-2xl shadow-xl object-cover border-2 border-emerald-100 hover:scale-105 transition-all"
                />
                <Image
                  src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=500&q=85"
                  alt="Organic farm"
                  width={300}
                  height={200}
                  className="rounded-2xl shadow-xl object-cover border-2 border-yellow-100 hover:scale-105 transition-all"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <motion.span 
                className="inline-block text-emerald-600 font-black text-lg uppercase tracking-widest px-6 py-3 bg-emerald-100 rounded-2xl shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                Our Story
              </motion.span>
              
              <h2 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-gray-900 to-emerald-900 bg-clip-text text-transparent leading-tight">
                Farm Fresh Since <span className="text-emerald-500">2010</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>From a small family farm to trusted organic leader. We deliver vibrant, chemical-free produce while championing local farmers.</p>
                <p>50+ partner farms. Every carrot, leaf, and tomato meets our strict standards—from seed to doorstep.</p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-emerald-100">
                {[
                  "100% Certified Organic",
                  "Direct Farm Partnership", 
                  "No Pesticides—Ever",
                  "24hr Delivery Guarantee"
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    className="flex items-center gap-4 p-4 bg-emerald-50/50 rounded-2xl hover:bg-emerald-100 transition-all group"
                    whileHover={{ x: 8 }}
                  >
                    <FiCheckCircle className="text-emerald-600 text-xl flex-shrink-0 group-hover:scale-110" />
                    <span className="font-semibold text-gray-800">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats - Enhanced */}
      <section className="py-28 relative bg-gradient-to-r from-emerald-600 via-green-700 to-emerald-800 text-white overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => {
          const seed = i * 12321;
          const randomLeft = ((seed * 9973) % 10000) / 100;
          const randomTop = ((seed * 6199) % 10000) / 100;
          const randomDelay = ((seed * 4721) % 4000) / 1000;
          
          return (
            <motion.div
              key={i}
              className="absolute text-2xl opacity-20 pointer-events-none"
              style={{ left: `${randomLeft}%`, top: `${randomTop}%` }}
              animate={{ y: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 8, repeat: Infinity, delay: randomDelay }}
            >
              {['🌱', '🥬', '🍅'][i % 3]}
            </motion.div>
          );
        })}

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} delay={index * 0.2} />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 bg-gradient-to-br from-emerald-50 via-white to-yellow-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <motion.span 
              className="inline-flex items-center gap-2 text-emerald-600 font-black text-xl uppercase tracking-widest px-8 py-4 bg-gradient-to-r from-emerald-100 to-green-100 rounded-3xl shadow-xl"
              whileHover={{ scale: 1.05 }}
            >
              <FiFeather className="w-6 h-6" />
              Our Core Values
            </motion.span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-gray-900 via-emerald-900 to-gray-900 bg-clip-text text-transparent mt-8 mb-6 leading-tight">
              What Drives Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group bg-white/70 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-emerald-200/50 hover:shadow-emerald-500/20 hover:border-emerald-400/70 transition-all duration-700 cursor-pointer"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-6 group-hover:text-emerald-700 transition-colors leading-tight">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-800">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <motion.span 
              className="inline-flex items-center gap-3 text-emerald-600 font-black text-lg uppercase tracking-widest px-8 py-4 bg-gradient-to-r from-emerald-100 via-green-100 to-emerald-100 rounded-3xl shadow-xl border border-emerald-200/50"
              whileHover={{ scale: 1.02, backgroundColor: '#10b981' }}
            >
              <FiUsers className="w-7 h-7" />
              Meet Our Team
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-gray-900 to-emerald-900 bg-clip-text text-transparent mt-8 mb-6">
              Passionate People Behind Your Freshness
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -16, scale: 1.03 }}
                className="group bg-gradient-to-b from-white to-emerald-50/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-emerald-100/50 overflow-hidden hover:shadow-emerald-500/25 hover:border-emerald-300/70 transition-all duration-700 cursor-pointer"
              >
                <div className="relative overflow-hidden h-72 rounded-t-3xl bg-gradient-to-br from-emerald-50 to-green-50">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6"
                  >
                    <div className="text-white space-y-2 w-full">
                      <h4 className="text-xl font-bold">{member.name}</h4>
                      <p className="font-medium opacity-90">{member.role}</p>
                    </div>
                  </motion.div>
                </div>
                
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-emerald-800">
                    {member.name}
                  </h3>
                  <p className="text-emerald-700 font-semibold text-lg mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-700 font-medium">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="py-28 bg-gradient-to-r from-emerald-600 via-green-700 to-emerald-800 text-white relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <motion.div 
            className="text-[12rem] opacity-20 drop-shadow-4xl mb-[-6rem]"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            🥬
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight drop-shadow-2xl">
            Ready For <span className="text-yellow-300 block text-6xl md:text-7xl">Fresh Organic?</span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-emerald-100/95 font-medium max-w-2xl mx-auto leading-relaxed">
            Join thousands who trust Organo for daily fresh produce.
          </p>
          
          <Link
            href="/shop"
            className="group inline-flex items-center gap-4 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-emerald-900 font-black text-xl px-12 py-6 rounded-3xl shadow-2xl hover:shadow-emerald-500/25 border border-yellow-300/50 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]"
          >
            Start Shopping Now
            <motion.div 
              className="w-6 h-6 bg-emerald-900 rounded-full flex items-center justify-center group-hover:bg-white transition-all"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.6, repeat: Infinity }}
            >
              →
            </motion.div>
          </Link>
        </div>
      </motion.section>
    </div>
  );
}

function StatCard({ stat, delay = 0 }: { stat: Stat; delay?: number }) {
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.3,
    rootMargin: "0px 0px -100px 0px"
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9, y: 60 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 1, delay }}
      whileHover={{ 
        y: -20, 
        scale: 1.1, 
        boxShadow: "0 35px 60px -12px rgba(0,0,0,0.25)" 
      }}
      className="group bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 p-10 text-center flex flex-col items-center transition-all duration-700 cursor-pointer hover:bg-white/40 hover:border-emerald-300/60"
    >
      <motion.div 
        className="w-20 h-20 bg-gradient-to-br from-yellow-400/80 to-orange-400/80 rounded-3xl flex items-center justify-center mb-8 shadow-2xl border-4 border-white/50 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700"
        whileHover={{ scale: 1.15, rotate: 180 }}
      >
        {stat.icon}
      </motion.div>
      
      <motion.div 
        className="text-5xl lg:text-6xl font-black mb-4 tracking-tight bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500 bg-clip-text text-transparent drop-shadow-xl"
        animate={inView ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 0.8, delay: delay + 0.5 }}
      >
        {inView ? (
          <CountUp
            end={parseFloat(stat.value.replace(/[^\d\.]/g, ""))}
            duration={2}
            separator=","
            suffix={stat.suffix || ""}
          />
        ) : stat.value}
      </motion.div>
      
      <motion.p 
        className="text-xl font-bold text-emerald-50/95 tracking-wide uppercase"
        animate={inView ? { opacity: 1 } : { opacity: 0.7 }}
      >
        {stat.label}
      </motion.p>
    </motion.div>
  );
}
