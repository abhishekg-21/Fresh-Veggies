"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ReturnsPolicy() {
  const [activeSection, setActiveSection] = useState("eligibility");

  const tabs = [
    { id: "summary", label: "Quick Summary", icon: "📊" },
    { id: "eligibility", label: "What Can I Return?", icon: "✅" },
    { id: "process", label: "How It Works", icon: "🔄" },
    { id: "refunds", label: "Your Money Back", icon: "💰" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto px-4 py-20 text-center"
      >
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block mb-8"
        >
          <div className="text-6xl">🥬</div>
        </motion.div>
        <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent mb-6 leading-tight">
          Returns Made
          <span className="block bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
            Deliciously Simple
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          7-day freshness guarantee. Free returns over ₹500.
          <span className="font-semibold text-emerald-700">
            No wilted promises.
          </span>
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 pb-20 space-y-20">
        {/* Sticky Navigation */}
        <motion.div
          className="sticky top-24 z-20 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 p-1 mx-auto max-w-2xl"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className={`group relative p-4 rounded-2xl font-semibold transition-all duration-300 flex items-center space-x-3 cursor-pointer ${
                  activeSection === tab.id
                    ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-xl"
                    : "text-gray-600 hover:text-emerald-600 hover:bg-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{tab.icon}</span>
                <span className="hidden md:inline">{tab.label}</span>
                <AnimatePresence>
                  {activeSection === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </AnimatePresence>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Dynamic Content */}
        <AnimatePresence mode="wait">
          {activeSection === "summary" && (
            <motion.section
              key="summary"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                { num: "7", label: "Days to Return", icon: "🕒" },
                { num: "100%", label: "Refund Guarantee", icon: "💯" },
                { num: "₹500+", label: "Free Returns", icon: "🚚" },
                { num: "24h", label: "Refund Speed", icon: "⚡" },
              ].map(({ num, label, icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 hover:-translate-y-4"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-700 mb-2">
                    {num}
                  </div>
                  <p className="text-gray-700 font-medium text-lg leading-tight">
                    {label}
                  </p>
                </motion.div>
              ))}
            </motion.section>
          )}

          {activeSection === "eligibility" && (
            <motion.section
              key="eligibility"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-12"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 backdrop-blur-xl rounded-3xl p-10 border border-emerald-200/50">
                  <h2 className="text-4xl font-black text-emerald-800 mb-8 flex items-center gap-4">
                    <span className="text-3xl">✅</span> Eligible Returns
                  </h2>
                  <div className="space-y-4 text-xl text-black">
                    {[
                      "🥬 Damaged/spoiled produce",
                      "❌ Wrong items delivered",
                      "📦 Missing items",
                      "🌡️ Freshness issues (24h report)",
                    ].map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-4 p-4 bg-white/50 rounded-2xl hover:bg-white hover:shadow-lg transition-all"
                      >
                        <span className="text-2xl mt-1 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-rose-500/10 to-red-500/10 backdrop-blur-xl rounded-3xl p-10 border border-rose-200/50">
                  <h2 className="text-4xl font-black text-rose-800 mb-8 flex items-center gap-4">
                    <span className="text-3xl">❌</span> Not Eligible
                  </h2>
                  <div className="space-y-4 text-xl">
                    {[
                      "🍽️ Consumed/opened perishables",
                      "🍅 Normal ripening",
                      "😕 Change of mind",
                      "📅 Orders > 7 days",
                    ].map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-4 p-4 bg-white/50 text-black rounded-2xl hover:bg-white hover:shadow-lg transition-all"
                      >
                        <span className="text-2xl mt-1 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {activeSection === "process" && (
            <motion.section
              key="process"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/50">
                <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-1">
                  <div className="bg-white/90 backdrop-blur-sm px-8 py-6 rounded-2xl -mt-1">
                    <h2 className="text-4xl font-black text-gray-900 mb-2 flex items-center gap-4">
                      🔄 5-Minute Return Process
                    </h2>
                    <p className="text-xl text-gray-500">
                      From complaint to credit, here's exactly what happens
                    </p>
                  </div>
                </div>

                <div className="p-12 divide-y divide-gray-100">
                  {[
                    {
                      step: "1",
                      action: "Contact Us",
                      desc: "Email or WhatsApp with Order ID + photos",
                      time: "2 mins",
                    },
                    {
                      step: "2",
                      action: "Get Label",
                      desc: "Receive prepaid label instantly",
                      time: "1 min",
                    },
                    {
                      step: "3",
                      action: "Ship Back",
                      desc: "Drop at nearest pickup (free > ₹500)",
                      time: "Day 1",
                    },
                    {
                      step: "4",
                      action: "We Inspect",
                      desc: "Quality check (usually < 2hrs)",
                      time: "Day 2",
                    },
                    {
                      step: "5",
                      action: "Get Refund",
                      desc: "Money back to original payment",
                      time: "24 hrs",
                    },
                  ].map((step, i) => (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.2 }}
                      className="flex items-start text-black gap-6 py-8 first:pt-0 last:pb-0"
                    >
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl flex items-center justify-center text-2xl font-black text-white shadow-2xl">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {step.action}
                        </h3>
                        <p className="text-lg text-gray-600 mb-3">
                          {step.desc}
                        </p>
                        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold">
                          ⏱️ {step.time}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid md:grid-cols-3 gap-6 mt-16">
                <motion.a
                  href="mailto:support@freshveggies.com"
                  className="group bg-gradient-to-r from-emerald-500 to-green-600 text-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 text-center font-bold text-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                    📧
                  </div>
                  <div>Email Support</div>
                </motion.a>
                <motion.a
                  href="https://wa.me/919876543210"
                  className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 text-center font-bold text-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                    💬
                  </div>
                  <div>WhatsApp</div>
                </motion.a>
                <Link
                  href="/track-order"
                  className="group bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 text-center font-bold text-xl"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                    📦
                  </div>
                  <div>Track Order</div>
                </Link>
              </div>
            </motion.section>
          )}

          {activeSection === "refunds" && (
            <motion.section
              key="refunds"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-12"
            >
              <div className="text-center mb-16">
                <div className="text-6xl mb-6">💰</div>
                <h2 className="text-5xl font-black bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent mb-6">
                  Your Money,
                  <span className="block">Back Fast</span>
                </h2>
                <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
                  No fine print. No delays. Just your money back where it
                  belongs.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-yellow-400/10 to-amber-400/10 backdrop-blur-xl rounded-3xl p-10 border border-yellow-200/50 group hover:shadow-2xl transition-all">
                  <h3 className="text-3xl font-black text-yellow-800 mb-6">
                    ⏱️ Refund Speed
                  </h3>
                  <div className="space-y-4 text-xl text-black">
                    <div className="flex items-center gap-4 p-4 bg-white/50 rounded-2xl">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center text-xl font-bold text-white shadow-lg">
                        24h
                      </div>
                      <span>Processing after we receive</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white/50 rounded-2xl">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center text-xl font-bold text-white shadow-lg">
                        3-5d
                      </div>
                      <span>Razorpay/UPI to bank</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white/50 rounded-2xl">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center text-xl font-bold text-white shadow-lg">
                        Instant
                      </div>
                      <span>Store credit/wallet</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 backdrop-blur-xl rounded-3xl p-10 border border-emerald-200/50 group hover:shadow-2xl transition-all">
                  <h3 className="text-3xl font-black text-emerald-800 mb-6">
                    🚚 Shipping Rules
                  </h3>
                  <div className="space-y-4 text-xl text-black">
                    <div className="flex items-center gap-4 p-4 bg-white/50 rounded-2xl border-l-4 border-emerald-400">
                      <span className="text-2xl">✅</span>
                      <span>
                        <strong>FREE</strong> returns for orders ₹500
                      </span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white/50 rounded-2xl border-l-4 border-emerald-400">
                      <span className="text-2xl">✅</span>
                      <span>We cover original shipping on valid claims</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white/50 rounded-2xl border-l-4 border-gray-400">
                      <span className="text-2xl">📏</span>
                      <span>You pay return shipping if order ₹500</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Legal Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-12 text-center border border-gray-200"
        >
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
            Complies with <strong>Consumer Protection Act 2019</strong>. We
            reserve the right to refuse returns that don't meet our freshness
            standards.
          </p>
          <div className="text-2xl font-bold text-gray-500">
            Last updated: January 2026
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/shop"
              className="group inline-flex items-center gap-4 bg-gradient-to-r from-emerald-500 via-green-600 to-emerald-700 text-white px-12 py-8 rounded-3xl text-2xl font-black shadow-2xl hover:shadow-3xl hover:-translate-y-3 transition-all duration-500"
            >
              <span>🥬</span>
              Continue Shopping Freshness
              <span className="ml-4 w-8 h-8 bg-white/20 rounded-2xl group-hover:rotate-180 transition-transform duration-500">
                →
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
