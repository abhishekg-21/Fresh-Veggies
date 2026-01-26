"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Package,
  Truck,
  Users,
  ShoppingCart,
  FileText,
  Phone,
  Zap,
  Calendar,
  MapPin,
  Shield,
} from "lucide-react";

export default function BulkOrderPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    quantity: "",
    deliveryDate: "",
  });

  // SAME particles system
  const particles = useMemo(() =>
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: 10 + i * 12,
      y: 20 + i * 15,
      emoji: ["🥬", "🥕", "🍅", "🥒"][i % 4],
    })),
    []
  );

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: "📦" },
    { id: "pricing", label: "Pricing", icon: "💰" },
    { id: "how-it-works", label: "Process", icon: "🔄" },
    { id: "request-quote", label: "Get Quote", icon: "📝" },
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
      <section className="max-w-6xl mx-auto px-6 py-24 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10rem] mx-auto mb-12 drop-shadow-2xl"
        >
          📦
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-black bg-gradient-to-r from-gray-900 via-emerald-800 to-gray-900 bg-clip-text text-transparent mb-8 leading-tight"
        >
          Bulk Orders
          <span className="block text-5xl md:text-6xl bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
            Wholesale Fresh
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Restaurants • Hotels • Caterers • Offices. Up to 70% OFF retail +
          same-day delivery.
        </motion.p>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-4 bg-white/90 backdrop-blur-xl px-8 py-6 rounded-3xl shadow-xl border border-emerald-200/50 font-bold text-xl text-emerald-800"
        >
          <Zap className="w-8 h-8 text-emerald-600" />
          <span>Min Order: ₹5,000 | Save up to 70%</span>
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
        {activeTab === "overview" && <OverviewSection />}
        {activeTab === "pricing" && <PricingSection />}
        {activeTab === "how-it-works" && <ProcessSection />}
        {activeTab === "request-quote" && (
          <QuoteFormSection
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
        <div className="text-8xl mb-12 drop-shadow-2xl">🥬</div>
        <h3 className="text-5xl font-black text-white mb-12">
          Ready for Bulk?
        </h3>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
          <Link
            href="#request-quote"
            className="inline-flex items-center gap-4 bg-white text-emerald-800 px-12 py-6 rounded-3xl text-2xl font-black shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all flex-1 justify-center"
            onClick={() => setActiveTab("request-quote")}
          >
            <ShoppingCart className="w-8 h-8" />
            Get Quote Now
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
function OverviewSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-5xl font-black text-center text-gray-900 mb-20">
        Perfect for Businesses
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: Users,
            title: "Restaurants",
            desc: "Daily fresh supply for kitchens",
            badge: "50+ Kitchens",
          },
          {
            icon: Package,
            title: "Hotels",
            desc: "Bulk breakfast & banquets",
            badge: "100+ Rooms",
          },
          {
            icon: Truck,
            title: "Caterers",
            desc: "Event & wedding specials",
            badge: "500+ Events",
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

function PricingSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <motion.div
        className="text-center mb-20"
        initial={{ y: 30 }}
        whileInView={{ y: 0 }}
      >
        <h2 className="text-5xl font-black text-gray-900 mb-6">
          Wholesale Pricing
        </h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Save 50-70% vs retail
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {[
          { kg: "10kg+", retail: "₹80/kg", bulk: "₹45/kg", save: "44% OFF" },
          { kg: "50kg+", retail: "₹80/kg", bulk: "₹35/kg", save: "56% OFF" },
          { kg: "100kg+", retail: "₹80/kg", bulk: "₹24/kg", save: "70% OFF" },
        ].map((tier, i) => (
          <motion.div
            key={tier.kg}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white/70 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-emerald-200/50 hover:shadow-2xl hover:border-emerald-400 hover:-translate-y-2 transition-all text-center"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-8 text-3xl font-bold text-white shadow-2xl">
              {tier.kg}
            </div>
            <div className="space-y-4 mb-8">
              <div className="text-3xl font-black text-gray-900">
                {tier.bulk}
              </div>
              <div className="text-2xl text-gray-500 line-through">
                {tier.retail}
              </div>
              <div className="text-2xl font-bold text-emerald-700">
                {tier.save}
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-5 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all"
            >
              Order Now
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-5xl font-black text-center text-gray-900 mb-20">
        3 Simple Steps
      </h2>
      <div className="grid md:grid-cols-3 gap-12 items-center">
        {[
          {
            step: "1",
            title: "Request Quote",
            icon: FileText,
            desc: "Tell us your needs & get custom pricing in 2 mins",
          },
          {
            step: "2",
            title: "Confirm Order",
            icon: ShoppingCart,
            desc: "Review items, quantities & delivery schedule",
          },
          {
            step: "3",
            title: "Daily Delivery",
            icon: Truck,
            desc: "Same-day farm-fresh delivery to your door",
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

interface QuoteFormProps {
  formData: {
    name: string;
    business: string;
    phone: string;
    quantity: string;
    deliveryDate: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

function QuoteFormSection({ formData, onInputChange }: QuoteFormProps) {
  return (
    <motion.section
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      className="max-w-3xl mx-auto px-6 mb-24"
    >
      <h3 className="text-4xl font-black text-gray-900 mb-12 text-center flex items-center justify-center gap-4">
        <FileText className="w-10 h-10 text-emerald-600" />
        Request Quote
      </h3>
      <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-emerald-200/50 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <input
            name="name"
            value={formData.name}
            onChange={onInputChange}
            placeholder="Your Name *"
            className="px-6 py-5 text-xl font-semibold bg-white/80 backdrop-blur-xl rounded-2xl border-2 border-emerald-200/50 focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-100 shadow-lg transition-all w-full"
            required
          />
          <input
            name="business"
            value={formData.business}
            onChange={onInputChange}
            placeholder="Business Name *"
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
          name="quantity"
          value={formData.quantity}
          onChange={onInputChange}
          placeholder="Expected Weekly Quantity (kg)"
          className="w-full px-6 py-5 text-xl font-semibold bg-white/80 backdrop-blur-xl rounded-2xl border-2 border-emerald-200/50 focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-100 shadow-lg transition-all"
        />
        <input
          name="deliveryDate"
          type="date"
          value={formData.deliveryDate}
          onChange={onInputChange}
          placeholder="Preferred Start Date"
          className="w-full px-6 py-5 text-xl font-semibold bg-white/80 backdrop-blur-xl rounded-2xl border-2 border-emerald-200/50 focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-100 shadow-lg transition-all"
        />

        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-xl py-5 px-12 rounded-2xl shadow-xl hover:shadow-2xl border border-emerald-400/50 transition-all whitespace-nowrap"
        >
          Get Custom Quote
          <Zap className="w-6 h-6 inline ml-3" />
        </motion.button>

        <div className="text-center text-sm text-emerald-700 mt-6 p-4 bg-emerald-100/50 rounded-2xl">
          📞 We&apos;ll call you within 15 mins with your custom pricing!
        </div>
      </div>
    </motion.section>
  );
}
