"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  User,
  Tractor,
  Package,
  Calendar,
  Truck,
  Shield,
  Phone,
  Zap,
  MapPin,
  DollarSign,
  Handshake,
} from "lucide-react";

export default function FarmerPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [formData, setFormData] = useState({
    name: "",
    farmName: "",
    phone: "",
    location: "",
    crops: "",
  });

  // SAME particles system
  const particles = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: 10 + i * 12,
        y: 20 + i * 15,
        emoji: ["🥬", "🥕", "🍅", "🥒"][i % 4],
      })),
    [],
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const tabs = [
    { id: "overview", label: "Benefits", icon: "🌱" },
    { id: "pricing", label: "Rates", icon: "💰" },
    { id: "process", label: "Process", icon: "🔄" },
    { id: "join", label: "Join Us", icon: "🤝" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 relative overflow-hidden">
      {/* SAME particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute text-2xl opacity-40 pointer-events-none drop-shadow-lg"
          style={{ left: `${particle.x}%`, top: `${particle.y}%` }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 180, 360],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          {particle.emoji}
        </motion.div>
      ))}

      {/* SAME hero style */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10rem] mx-auto mb-12 drop-shadow-2xl"
        >
          🌱
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-black bg-gradient-to-r from-gray-900 via-emerald-800 to-gray-900 bg-clip-text text-transparent mb-8 leading-tight"
        >
          Farmer Partners
          <span className="block text-5xl md:text-6xl bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
            Direct to Market
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Sell your harvest directly. Guaranteed daily pickup + 25-40% higher
          rates than mandis.
        </motion.p>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-4 bg-white/90 backdrop-blur-xl px-8 py-6 rounded-3xl shadow-xl border border-emerald-200/50 font-bold text-xl text-emerald-800"
        >
          <Zap className="w-8 h-8 text-emerald-600" />
          <span>100+ Farmers | ₹50L+ Paid | Daily Pickup</span>
          <motion.div
            className="w-3 h-3 bg-green-500 rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </section>

      {/* SAME tabs style */}
      <div className="max-w-5xl mx-auto px-6 mb-12">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-emerald-200/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className={`group p-8 rounded-2xl font-bold text-lg transition-all flex flex-col items-center gap-3 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-2xl"
                    : "text-gray-700 hover:text-emerald-700 bg-white/60 hover:bg-white hover:shadow-xl border hover:border-emerald-300/50"
                }`}
              >
                <div className="text-3xl p-4 rounded-2xl bg-white/30 group-hover:bg-white/50 transition-all w-16 h-16 flex items-center justify-center">
                  {tab.icon}
                </div>
                <span>{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === "overview" && <BenefitsSection />}
        {activeTab === "pricing" && <RatesSection />}
        {activeTab === "process" && <ProcessSection />}
        {activeTab === "join" && (
          <JoinFormSection
            formData={formData}
            onInputChange={handleInputChange}
          />
        )}
      </AnimatePresence>

      {/* SAME CTA style */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="text-center py-24 bg-gradient-to-r from-emerald-600 to-green-700 rounded-t-4xl -mt-20 max-w-4xl mx-auto shadow-2xl border-t-4 border-white/30"
      >
        <div className="text-8xl mb-12 drop-shadow-2xl">🌱</div>
        <h3 className="text-5xl font-black text-white mb-12">
          Join 100+ Happy Farmers
        </h3>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
          <Link
            href="#join"
            className="inline-flex items-center gap-4 bg-white text-emerald-800 px-12 py-6 rounded-3xl text-2xl font-black shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all flex-1 justify-center"
            onClick={() => setActiveTab("join")}
          >
            <Handshake className="w-8 h-8" />
            Partner Now
          </Link>
          <div className="text-2xl text-white/90 font-bold flex items-center gap-4 px-8 py-6 bg-white/20 rounded-3xl backdrop-blur-xl">
            <Phone className="w-8 h-8" />
            +91 98765 43210
          </div>
        </div>
      </motion.section>
    </div>
  );
}

// SAME shipping section style
function BenefitsSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-5xl font-black text-center text-gray-900 mb-20">
        Why Partner With Us?
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: DollarSign,
            title: "Higher Rates",
            desc: "25-40% more than mandi prices",
            badge: "+35% Avg",
          },
          {
            icon: Truck,
            title: "Daily Pickup",
            desc: "Doorstep collection every morning",
            badge: "6AM Sharp",
          },
          {
            icon: Calendar,
            title: "Guaranteed Demand",
            desc: "Fixed weekly orders - no uncertainty",
            badge: "100% Offtake",
          },
        ].map((benefit, i) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -12 }}
            className="group p-10 bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-emerald-200/50 hover:shadow-2xl hover:border-emerald-400/70 transition-all"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-8 text-white shadow-xl group-hover:scale-110 transition-all">
              <benefit.icon className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-emerald-700">
              {benefit.title}
            </h3>
            <p className="text-gray-700 mb-8 text-center">{benefit.desc}</p>
            <span className="inline-block bg-emerald-100 text-emerald-800 px-6 py-3 rounded-2xl font-bold mx-auto block group-hover:bg-emerald-200 transition-all">
              {benefit.badge}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function RatesSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <motion.div
        className="text-center mb-20"
        initial={{ y: 30 }}
        whileInView={{ y: 0 }}
      >
        <h2 className="text-5xl font-black text-gray-900 mb-6">
          Better Than Mandi
        </h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Real farmer rates vs traditional mandi
        </p>
      </motion.div>

      <div className="overflow-x-auto">
        <div className="grid lg:grid-cols-4 gap-6 min-w-max">
          {[
            { crop: "Tomato", mandi: "₹25", us: "₹35", gain: "+40%" },
            { crop: "Onion", mandi: "₹18", us: "₹25", gain: "+39%" },
            { crop: "Potato", mandi: "₹15", us: "₹22", gain: "+47%" },
            { crop: "Cabbage", mandi: "₹12", us: "₹18", gain: "+50%" },
            { crop: "Ladyfinger", mandi: "₹40", us: "₹55", gain: "+38%" },
            { crop: "Brinjal", mandi: "₹22", us: "₹32", gain: "+45%" },
          ].map((rate, i) => (
            <motion.div
              key={rate.crop}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-emerald-200/50 hover:shadow-2xl hover:border-emerald-400 hover:-translate-y-2 transition-all text-center"
            >
              <h4 className="text-xl font-bold text-gray-900 mb-6 capitalize">
                {rate.crop}
              </h4>
              <div className="space-y-3 mb-6">
                <div className="text-2xl font-black text-emerald-700">
                  ₹{rate.us}/kg
                </div>
                <div className="text-lg text-gray-500 line-through">
                  ₹{rate.mandi}
                </div>
                <div className="text-xl font-bold text-green-600">
                  {rate.gain}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-5xl font-black text-center text-gray-900 mb-20">
        How It Works
      </h2>
      <div className="grid md:grid-cols-3 gap-12 items-center">
        {[
          {
            step: "1",
            title: "Register",
            icon: User,
            desc: "Sign up & tell us your farm details",
          },
          {
            step: "2",
            title: "Daily Orders",
            icon: Package,
            desc: "Get confirmed orders every evening",
          },
          {
            step: "3",
            title: "Morning Pickup",
            icon: Tractor,
            desc: "We collect at 6AM - you get paid same day",
          },
        ].map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: i % 2 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="group p-10 bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-emerald-200/50 hover:shadow-2xl transition-all text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-8 text-white shadow-xl font-black text-2xl">
              {step.step}
            </div>
            <step.icon className="w-16 h-16 text-emerald-600 mx-auto mb-6 group-hover:scale-110 transition-all" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700">
              {step.title}
            </h3>
            <p className="text-gray-700 text-lg">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function JoinFormSection({ formData, onInputChange }: any) {
  return (
    <motion.section
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      className="max-w-3xl mx-auto px-6 mb-24"
    >
      <h3 className="text-4xl font-black text-gray-900 mb-12 text-center flex items-center justify-center gap-4">
        <Handshake className="w-10 h-10 text-emerald-600" />
        Become Partner
      </h3>
      <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-emerald-200/50 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <input
            name="name"
            value={formData.name}
            onChange={onInputChange}
            placeholder="Farmer Name *"
            className="px-6 py-5 text-xl font-semibold bg-white/80 backdrop-blur-xl rounded-2xl border-2 border-emerald-200/50 focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-100 shadow-lg transition-all w-full"
            required
          />
          <input
            name="farmName"
            value={formData.farmName}
            onChange={onInputChange}
            placeholder="Farm Name *"
            className="px-6 py-5 text-xl font-semibold bg-white/80 backdrop-blur-xl rounded-2xl border-2 border-emerald-200/50 focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-100 shadow-lg transition-all w-full"
            required
          />
        </div>
        <input
          name="phone"
          value={formData.phone}
          onChange={onInputChange}
          placeholder="Phone/WhatsApp *"
          className="w-full px-6 py-5 text-xl font-semibold bg-white/80 backdrop-blur-xl rounded-2xl border-2 border-emerald-200/50 focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-100 shadow-lg transition-all"
          required
        />
        <input
          name="location"
          value={formData.location}
          onChange={onInputChange}
          placeholder="Farm Location (Village/Taluka) *"
          className="w-full px-6 py-5 text-xl font-semibold bg-white/80 backdrop-blur-xl rounded-2xl border-2 border-emerald-200/50 focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-100 shadow-lg transition-all"
          required
        />
        <textarea
          name="crops"
          value={formData.crops}
          onChange={onInputChange}
          placeholder="Main Crops (Tomato, Onion, etc.)"
          rows={3}
          className="w-full px-6 py-5 text-xl font-semibold bg-white/80 backdrop-blur-xl rounded-2xl border-2 border-emerald-200/50 focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-100 shadow-lg transition-all resize-vertical"
        />

        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-xl py-5 px-12 rounded-2xl shadow-xl hover:shadow-2xl border border-emerald-400/50 transition-all whitespace-nowrap"
        >
          Join as Partner
          <Zap className="w-6 h-6 inline ml-3" />
        </motion.button>

        <div className="text-center text-sm text-emerald-700 mt-6 p-4 bg-emerald-100/50 rounded-2xl">
          🌾 We&apos;ll visit your farm within 24 hours to setup pickup!
        </div>
      </div>
    </motion.section>
  );
}
