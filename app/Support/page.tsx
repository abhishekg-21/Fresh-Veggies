"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  HelpCircle,
  Phone,
  Mail,
  MessageCircle,
  Zap,
  Shield,
  Clock,
  MapPin,
  Package,
  Truck,
  ShoppingCart,
} from "lucide-react";

type SupportOption = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  action: string;
  color: string;
  link?: string;
};

export default function SupportPage() {
  const [activeTab, setActiveTab] = useState("quick-help");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    issue: "",
    orderId: "",
  });

  // SAME particles as shipping/FAQ
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

  const supportOptions: SupportOption[] = useMemo(
    () => [
      {
        id: "track-order",
        title: "Track Order",
        description: "Live GPS tracking for your fresh veggies",
        icon: <Truck className="w-10 h-10" />,
        action: "Track Now",
        color: "from-emerald-500 to-green-600",
        link: "/track",
      },
      {
        id: "delivery-issue",
        title: "Delivery Issue",
        description: "Late? Missing? Wrong address?",
        icon: <Clock className="w-10 h-10" />,
        action: "Report Issue",
        color: "from-orange-500 to-orange-600",
      },
      {
        id: "quality-issue",
        title: "Quality Issue",
        description: "Not fresh? Get replacement",
        icon: <Shield className="w-10 h-10" />,
        action: "File Complaint",
        color: "from-amber-500 to-orange-500",
      },
      {
        id: "refund",
        title: "Refund Request",
        description: "Processed within 24 hours",
        icon: <ShoppingCart className="w-10 h-10" />,
        action: "Request Refund",
        color: "from-blue-500 to-indigo-500",
      },
    ],
    [],
  );

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const tabs = [
    { id: "quick-help", label: "Quick Help", icon: "🚀" },
    { id: "contact-form", label: "Contact", icon: "📝" },
    { id: "phone", label: "Phone", icon: "📞" },
    { id: "chat", label: "Chat", icon: "💬" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 relative overflow-hidden">
      {/* SAME particles system */}
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
          🆘
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-black bg-gradient-to-r from-gray-900 via-emerald-800 to-gray-900 bg-clip-text text-transparent mb-8 leading-tight"
        >
          Help Center
          <span className="block text-5xl md:text-6xl bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
            Support
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          24/7 support for fresh veggie delivery issues.
        </motion.p>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-4 bg-white/90 backdrop-blur-xl px-8 py-6 rounded-3xl shadow-xl border border-emerald-200/50 font-bold text-xl text-emerald-800"
        >
          <Zap className="w-8 h-8 text-emerald-600" />
          <span>Response Time: &lt; 15 mins</span>
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

      {/* Tab Content - SAME shipping sections style */}
      <AnimatePresence mode="wait">
        {activeTab === "quick-help" && (
          <QuickHelpSection options={supportOptions} />
        )}
        {activeTab === "contact-form" && (
          <ContactFormSection
            formData={formData}
            onInputChange={handleInputChange}
          />
        )}
        {activeTab === "phone" && <PhoneSupportSection />}
        {activeTab === "chat" && <LiveChatSection />}
      </AnimatePresence>

      {/* SAME CTA style */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="text-center py-24 bg-gradient-to-r from-emerald-600 to-green-700 rounded-t-4xl -mt-20 max-w-4xl mx-auto shadow-2xl border-t-4 border-white/30"
      >
        <div className="text-8xl mb-12 drop-shadow-2xl">🥬</div>
        <h3 className="text-5xl font-black text-white mb-12">
          Need more help?
        </h3>
        <Link
          href="/faq"
          className="inline-flex items-center gap-4 bg-white text-emerald-800 px-12 py-6 rounded-3xl text-2xl font-black shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all"
        >
          <HelpCircle className="w-8 h-8" />
          Visit FAQ
          <Zap className="w-6 h-6" />
        </Link>
      </motion.section>
    </div>
  );
}

// SAME shipping card style
function QuickHelpSection({ options }: { options: SupportOption[] }) {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-5xl font-black text-center text-gray-900 mb-20">
        Quick Actions
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {options.map((option, i) => (
          <motion.div
            key={option.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -12 }}
            className="group p-10 bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-emerald-200/50 hover:shadow-2xl hover:border-emerald-400/70 transition-all"
          >
            <div
              className={`w-20 h-20 ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-8 text-white shadow-xl group-hover:scale-110 transition-all`}
            >
              {option.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-emerald-700">
              {option.title}
            </h3>
            <p className="text-gray-700 mb-8 text-center">
              {option.description}
            </p>
            {option.link ? (
              <Link
                href={option.link}
                className="inline-block bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-2xl font-bold mx-auto block group-hover:bg-emerald-600 transition-all"
              >
                {option.action}
              </Link>
            ) : (
              <motion.button className="inline-block bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-2xl font-bold mx-auto block group-hover:bg-emerald-600 transition-all">
                {option.action}
              </motion.button>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Simplified form matching shipping PIN style
interface ContactFormSectionProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    issue: string;
    orderId: string;
  };
  onInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
}

function ContactFormSection({
  formData,
  onInputChange,
}: ContactFormSectionProps) {
  return (
    <motion.section
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      className="max-w-3xl mx-auto px-6 mb-24"
    >
      <h3 className="text-4xl font-black text-gray-900 mb-12 text-center flex items-center justify-center gap-4">
        <Mail className="w-10 h-10 text-emerald-600" />
        Contact Form
      </h3>
      <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-emerald-200/50 space-y-6">
        <div className="grid md:grid-cols-2 gap-6 text-gray-800">
          <input
            name="name"
            value={formData.name}
            onChange={onInputChange}
            placeholder="Full Name"
            className="px-6 py-5 text-xl bg-white/80 text-gray-800 backdrop-blur-xl rounded-2xl border-2 border-emerald-200/50 focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-100 shadow-lg transition-all w-full"
          />
          <input
            name="email"
            value={formData.email}
            onChange={onInputChange}
            placeholder="Email/Phone"
            className="px-6 py-5 text-xl bg-white/80 backdrop-blur-xl rounded-2xl border-2 border-emerald-200/50 focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-100 shadow-lg transition-all w-full"
          />
        </div>
        <input
          name="orderId"
          value={formData.orderId}
          onChange={onInputChange}
          placeholder="Order ID (optional)"
          className="w-full px-6 py-5 text-gray-700 text-xl bg-white/80 backdrop-blur-xl rounded-2xl border-2 border-emerald-200/50 focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-100 shadow-lg transition-all"
        />
        <select
          name="issue"
          value={formData.issue}
          onChange={onInputChange}
          className="w-full px-6 py-5 text-gray-700 text-xl bg-white/80 backdrop-blur-xl rounded-2xl border-2 border-emerald-200/50 focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-100 shadow-lg transition-all"
        >
          <option value="">Select Issue</option>
          <option value="delivery">Delivery Issue</option>
          <option value="quality">Quality Issue</option>
          <option value="payment">Payment Issue</option>
          <option value="other">Other</option>
        </select>
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-xl py-5 px-12 rounded-2xl shadow-xl hover:shadow-2xl border border-emerald-400/50 transition-all whitespace-nowrap"
        >
          Submit Request
        </motion.button>
      </div>
    </motion.section>
  );
}

function PhoneSupportSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-black text-gray-900 mb-6">
          Phone Support
        </h2>
        <div className="text-6xl font-black text-emerald-800 mb-8 bg-gradient-to-r from-emerald-100 to-green-100 px-12 py-8 rounded-3xl shadow-2xl inline-block">
          +91 98765 43210
        </div>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          10AM - 10PM | 7 Days
        </p>
      </div>
    </section>
  );
}

function LiveChatSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24 text-center">
      <div className="text-[8rem] mb-12 animate-pulse">💬</div>
      <h2 className="text-5xl font-black text-gray-900 mb-8">
        Live Chat Coming Soon
      </h2>
      <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-12">
        Use phone or contact form for instant help!
      </p>
    </section>
  );
}
