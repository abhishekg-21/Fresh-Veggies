"use client";
import Link from "next/link";
import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Truck,
  MapPin,
  Clock,
  Zap,
  Package,
  Thermometer,
  Shield,
} from "lucide-react";

type Tab = { id: string; label: string; icon: string };

export default function ShippingPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [pincode, setPincode] = useState("");
  const [showEstimate, setShowEstimate] = useState(false);

  const tabs: Tab[] = [
    { id: "overview", label: "Overview", icon: "🚚" },
    { id: "zones", label: "Zones", icon: "🗺️" },
    { id: "freshness", label: "Freshness", icon: "🥬" },
    { id: "costs", label: "Costs", icon: "💰" },
  ];

  const checkPincode = useCallback(() => {
    if (pincode.length === 6) setShowEstimate(true);
  }, [pincode]);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 relative overflow-hidden">
      {/* Tasteful Particles */}
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

      {/* Enhanced Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10rem] mx-auto mb-12 drop-shadow-2xl"
        >
          🥦
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-black bg-gradient-to-r from-gray-900 via-emerald-800 to-gray-900 bg-clip-text text-transparent mb-8 leading-tight"
        >
          Farm to Door
          <span className="block text-5xl md:text-6xl bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
            24 Hours Guaranteed
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Fresh veggies delivered across Pune & Mumbai with guaranteed cold
          chain.
        </motion.p>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-4 bg-white/90 backdrop-blur-xl px-8 py-6 rounded-3xl shadow-xl border border-emerald-200/50 font-bold text-xl text-emerald-800"
        >
          <Truck className="w-8 h-8 text-emerald-600" />
          <span>Lightning Fast Delivery</span>
          <motion.div
            className="w-3 h-3 bg-green-500 rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </section>

      {/* Enhanced PIN Checker */}
      <motion.section
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="max-w-3xl mx-auto px-6 mb-24"
      >
        <h3 className="text-4xl font-black text-gray-900 mb-12 text-center flex items-center justify-center gap-4">
          <MapPin className="w-10 h-10 text-emerald-600" />
          Check Your Delivery
        </h3>
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-emerald-200/50">
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              value={pincode}
              onChange={(e) => setPincode(e.target.value.replace(/\D/g, ""))}
              onBlur={checkPincode}
              placeholder="Enter 6-digit PIN code"
              maxLength={6}
              className="flex-1 px-6 py-5 text-xl font-semibold bg-white/80 backdrop-blur-xl rounded-2xl border-2 border-emerald-200/50 focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-100 shadow-lg transition-all"
            />
            <motion.button
              onClick={checkPincode}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-5 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-xl rounded-2xl shadow-xl hover:shadow-2xl border border-emerald-400/50 transition-all whitespace-nowrap"
            >
              Check Now
            </motion.button>
          </div>

          <AnimatePresence>
            {showEstimate && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="mt-12 pt-10 border-t border-emerald-200 text-center"
              >
                <motion.div
                  className="text-6xl mb-6"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 1 }}
                >
                  ✅
                </motion.div>
                <h4 className="text-3xl font-black text-emerald-800 mb-4">
                  Delivers to <span className="text-4xl">{pincode}</span>
                </h4>
                <div className="inline-flex items-center gap-3 bg-emerald-100/80 backdrop-blur-xl px-8 py-4 rounded-2xl font-bold text-xl text-emerald-800 shadow-lg border border-emerald-200">
                  <Clock className="w-6 h-6" />
                  Tomorrow Delivery
                  <motion.div
                    className="w-3 h-3 bg-green-500 rounded-full ml-2"
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>

      {/* Clean Tabs */}
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

      {/* Content */}
      <AnimatePresence mode="wait">
        {activeTab === "overview" && <OverviewSection />}
        {activeTab === "zones" && <ZonesSection />}
        {activeTab === "freshness" && <FreshnessSection />}
        {activeTab === "costs" && <CostsSection />}
      </AnimatePresence>

      {/* Simple CTA */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="text-center py-24 bg-gradient-to-r from-emerald-600 to-green-700 rounded-t-4xl -mt-20 max-w-4xl mx-auto shadow-2xl border-t-4 border-white/30"
      >
        <div className="text-8xl mb-12 drop-shadow-2xl">🥬</div>
        <h3 className="text-5xl font-black text-white mb-12">
          Ready for Fresh?
        </h3>
        <Link
          href="/shop"
          className="inline-flex items-center gap-4 bg-white text-emerald-800 px-12 py-6 rounded-3xl text-2xl font-black shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all"
        >
          🛒 Shop Fresh Veggies
          <Zap className="w-6 h-6" />
        </Link>
      </motion.section>
    </div>
  );
}

// Clean, enhanced sections
function OverviewSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-5xl font-black text-center text-gray-900 mb-20">
        Our Promise
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: Truck,
            title: "24 Hour Delivery",
            desc: "Pune & Mumbai",
            badge: "Guaranteed",
          },
          {
            icon: Thermometer,
            title: "Cold Chain",
            desc: "0-8°C Control",
            badge: "Ice Packed",
          },
          {
            icon: Shield,
            title: "Freshness Pledge",
            desc: "Not fresh? Free redo",
            badge: "100% Risk Free",
          },
        ].map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -12 }}
            className="group p-10 bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-emerald-200/50 hover:shadow-2xl hover:border-emerald-400/70 transition-all"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-8 text-white shadow-xl group-hover:scale-110 transition-all">
              <feature.icon className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-emerald-700">
              {feature.title}
            </h3>
            <p className="text-gray-700 mb-8 text-center">{feature.desc}</p>
            <span className="inline-block bg-emerald-100 text-emerald-800 px-6 py-3 rounded-2xl font-bold mx-auto block group-hover:bg-emerald-200 transition-all">
              {feature.badge}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ZonesSection() {
  const zones = [
    {
      zone: "Pune Metro",
      pin: "411",
      time: "Same Day",
      price: "FREE > ₹299",
      coverage: "Pune City, PCMC, Hinjewadi...",
    },
    {
      zone: "Mumbai Metro",
      pin: "400",
      time: "Next Day",
      price: "₹49 > ₹499",
      coverage: "Andheri, Bandra, Powai...",
    },
    {
      zone: "Pune MMR",
      pin: "412",
      time: "Next Day",
      price: "₹79 > ₹599",
      coverage: "Kharadi, Hadapsar, Viman...",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <motion.div
        className="text-center mb-20"
        initial={{ y: 30 }}
        whileInView={{ y: 0 }}
      >
        <h2 className="text-5xl font-black text-gray-900 mb-6">
          Delivery Zones
        </h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Lightning fast across Pune & Mumbai metro
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {zones.map((zone, i) => (
          <motion.div
            key={zone.zone}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white/70 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-emerald-200/50 hover:shadow-2xl hover:border-emerald-400 hover:-translate-y-2 transition-all"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-8 text-3xl font-bold text-white shadow-2xl">
              {zone.pin}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              {zone.zone}
            </h3>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Zap className="w-6 h-6 text-yellow-500" />
              <span className="text-xl font-semibold text-emerald-700">
                {zone.time}
              </span>
            </div>
            <div className="text-3xl font-black text-emerald-800 mb-6 text-center">
              {zone.price}
            </div>
            <p className="text-gray-700 text-center leading-relaxed">
              {zone.coverage}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FreshnessSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <div className="text-center mb-24">
        <motion.div
          className="text-7xl mb-12"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
        >
          🥬❄️
        </motion.div>
        <h2 className="text-5xl font-black bg-gradient-to-r from-emerald-700 to-green-700 bg-clip-text text-transparent mb-8">
          Freshness Guaranteed
        </h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Cold chain + same-day harvest = perfect veggies
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div
          className="p-12 bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-emerald-200/50"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-4">
            <Thermometer className="w-12 h-12 text-emerald-600" />
            Cold Chain (0-8°C)
          </h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            Ice gel packs + insulated boxes keep veggies crisp from farm to
            fridge.
          </p>
        </motion.div>

        <motion.div
          className="p-12 bg-gradient-to-br from-emerald-50 to-green-50 backdrop-blur-xl rounded-3xl shadow-xl border border-emerald-300/50 relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
        >
          <div className="text-6xl mb-8 text-center">✅</div>
          <h3 className="text-3xl font-black text-emerald-800 mb-6 text-center">
            Freshness Pledge
          </h3>
          <div className="space-y-4 text-xl text-emerald-900 text-left">
            <p>
              • Not fresh? <strong>Free replacement</strong> next day
            </p>
            <p>
              • Spoiled? <strong>Full refund + ₹100 credit</strong>
            </p>
            <p>
              • <strong>100% satisfaction</strong> guaranteed
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CostsSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-5xl font-black text-center text-gray-900 mb-20">
        Transparent Pricing
      </h2>
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h3 className="text-3xl font-bold mb-12 flex items-center justify-center gap-4 text-emerald-800">
            <Package className="w-10 h-10" />
            Free Shipping
          </h3>
          <div className="space-y-6">
            {[
              { min: "₹299", zone: "Pune Metro", save: "Save ₹49" },
              { min: "₹499", zone: "Mumbai Metro", save: "Save ₹49" },
              { min: "₹599", zone: "Pune MMR", save: "Save ₹79" },
            ].map((item, i) => (
              <motion.div
                key={item.zone}
                initial={{ x: -30 }}
                whileInView={{ x: 0 }}
                className="flex items-center justify-between p-8 bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg border-l-4 border-emerald-400 hover:shadow-xl transition-all"
              >
                <div>
                  <div className="text-3xl font-black text-gray-900">
                    {item.min}+
                  </div>
                  <div className="text-xl text-gray-600">{item.zone}</div>
                </div>
                <span className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold text-lg shadow-lg">
                  {item.save}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-12 text-center">
            Delivery Timeline
          </h3>
          <div className="space-y-8">
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              className="p-10 bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border hover:shadow-2xl transition-all"
            >
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center font-bold text-white text-2xl shadow-lg">
                  1-2 hrs
                </div>
                <span className="text-2xl font-bold">Order Processing</span>
              </div>
              <p className="text-xl text-gray-700">
                Picked, packed, chilled within hours
              </p>
            </motion.div>

            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              className="p-10 bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border hover:shadow-2xl transition-all"
            >
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 bg-emerald-400 rounded-2xl flex items-center justify-center font-bold text-white text-2xl shadow-lg">
                  24 hrs
                </div>
                <span className="text-2xl font-bold">Doorstep Delivery</span>
              </div>
              <p className="text-xl text-gray-700">
                Fresh to your door by next afternoon
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
