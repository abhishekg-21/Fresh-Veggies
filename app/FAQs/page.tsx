"use client";
import Link from "next/link";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  Truck,
  Package,
  Clock,
  Thermometer,
  Shield,
  MapPin,
  CreditCard,
  ShoppingCart,
  Zap,
  Repeat,
} from "lucide-react";

type FAQItem = {
  id: string;
  category: string;
  question: string;
  answer: string;
  icon: React.ReactNode;
};

export default function FAQPage() {
  const [activeCategories, setActiveCategories] = useState<Set<string>>(
    new Set(),
  );
  const [activeIds, setActiveIds] = useState<Set<string>>(new Set());

  const faqs: FAQItem[] = useMemo(
    () => [
      // Same FAQs as before
      {
        id: "delivery-1",
        category: "delivery",
        question: "How fast do you deliver fresh veggies?",
        answer:
          "🥬 **24 hours guaranteed** from farm to fridge across Pune & Mumbai. Same-day for Pune Metro before 2PM.",
        icon: <Truck className="w-6 h-6" />,
      },
      {
        id: "delivery-2",
        category: "delivery",
        question: "Which areas do you serve?",
        answer:
          "🚚 **Pune Metro (411)**: Same day | 🌆 **Mumbai Metro (400)**: Next day | 🏘️ **Pune MMR (412)**: Next day",
        icon: <MapPin className="w-6 h-6" />,
      },
      {
        id: "delivery-3",
        category: "delivery",
        question: "What if delivery is late?",
        answer:
          "**Never happens!** But if >30 mins late: **₹100 credit** + priority delivery.",
        icon: <Clock className="w-6 h-6" />,
      },
      {
        id: "freshness-1",
        category: "freshness",
        question: "How do you guarantee freshness?",
        answer:
          "❄️ **Cold chain (0-8°C)** + ice gel packs + **same-day harvest** from local farms.",
        icon: <Thermometer className="w-6 h-6" />,
      },
      {
        id: "freshness-2",
        category: "freshness",
        question: "What if veggies aren't fresh?",
        answer:
          "✅ **Free replacement** next day. Spoiled? **Full refund + ₹100 credit**. 100% risk-free!",
        icon: <Shield className="w-6 h-6" />,
      },
      {
        id: "orders-1",
        category: "orders",
        question: "How much is shipping?",
        answer:
          "**FREE** over ₹299 (Pune), ₹499 (Mumbai), ₹599 (Pune MMR). Flat ₹49-79 otherwise.",
        icon: <Package className="w-6 h-6" />,
      },
      {
        id: "orders-2",
        category: "orders",
        question: "What payment methods?",
        answer:
          "💳 UPI, Cards, Wallets, Netbanking. **100% secure** Razorpay. COD soon.",
        icon: <CreditCard className="w-6 h-6" />,
      },
      {
        id: "returns-1",
        category: "returns",
        question: "What's your return policy?",
        answer:
          "🔄 **Quality issues only**. Free pickup + replacement within 24hrs. No returns on consumed produce.",
        icon: <Repeat className="w-6 h-6" />,
      },
    ],
    [],
  );

  const categories = useMemo(
    () => Array.from(new Set(faqs.map((faq) => faq.category))),
    [faqs],
  );

  const filteredFaqs = useMemo(() => {
    if (activeCategories.size === 0) return faqs;
    return faqs.filter((faq) => activeCategories.has(faq.category));
  }, [faqs, activeCategories]);

  const toggleCategory = (category: string) => {
    const newSet = new Set(activeCategories);
    if (activeCategories.has(category)) {
      newSet.delete(category);
    } else {
      newSet.add(category);
    }
    setActiveCategories(newSet);
  };

  const toggleFAQ = (id: string) => {
    const newSet = new Set(activeIds);
    if (activeIds.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setActiveIds(newSet);
  };

  // Same particle system as shipping
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
      {/* Same particles as shipping */}
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

      {/* Same hero style as shipping */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10rem] mx-auto mb-12 drop-shadow-2xl"
        >
          ❓
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-black bg-gradient-to-r from-gray-900 via-emerald-800 to-gray-900 bg-clip-text text-transparent mb-8 leading-tight"
        >
          Frequently Asked
          <span className="block text-5xl md:text-6xl bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
            Questions
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Everything you need to know about fresh veggie delivery.
        </motion.p>
      </section>

      <div className="max-w-5xl mx-auto px-6 pb-24 space-y-20">
        {/* Category Filter - Shipping style */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-emerald-200/50"
        >
          <h3 className="text-4xl font-black text-gray-900 mb-12 text-center">
            Filter by Topic
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => toggleCategory(category)}
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className={`group p-8 rounded-2xl font-bold text-lg transition-all flex flex-col items-center gap-3 ${
                  activeCategories.has(category)
                    ? "bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-2xl"
                    : "text-gray-700 hover:text-emerald-700 bg-white/60 hover:bg-white hover:shadow-xl border hover:border-emerald-300/50"
                }`}
              >
                <div className="text-3xl p-4 rounded-2xl bg-white/30 group-hover:bg-white/50 transition-all w-16 h-16 flex items-center justify-center">
                  {category === "delivery"
                    ? "🚚"
                    : category === "freshness"
                      ? "🥬"
                      : category === "orders"
                        ? "🛒"
                        : "🔄"}
                </div>
                <span className="capitalize">{category}</span>
              </motion.button>
            ))}
          </div>
          {activeCategories.size > 0 && (
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center mt-8 text-emerald-700 font-bold text-2xl"
            >
              Showing {filteredFaqs.length} FAQs
            </motion.p>
          )}
        </motion.section>

        {/* FAQ Accordion - Shipping card style */}
        <section className="space-y-6 max-w-4xl mx-auto">
          <AnimatePresence>
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-emerald-200/50 overflow-hidden group hover:shadow-2xl transition-all hover:border-emerald-400/70"
              >
                <motion.button
                  onClick={() => toggleFAQ(faq.id)}
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.9)" }}
                  className="w-full p-10 text-left flex items-center gap-6 border-b border-emerald-200/30"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl flex items-center justify-center shadow-xl flex-shrink-0 group-hover:scale-105 transition-transform">
                    {faq.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-2xl font-black text-gray-900 group-hover:text-emerald-800 pr-12 leading-tight">
                      {faq.question}
                    </h4>
                  </div>
                  <motion.div
                    animate={{ rotate: activeIds.has(faq.id) ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-10 h-10 text-emerald-600 flex-shrink-0 ml-4"
                  >
                    ▼
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {activeIds.has(faq.id) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, paddingTop: 0 }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        paddingTop: 40,
                        paddingBottom: 40,
                      }}
                      exit={{ opacity: 0, height: 0, paddingTop: 0 }}
                      className="overflow-hidden bg-gradient-to-r from-emerald-50/70 to-green-50/70 px-16 pb-12 pt-0"
                    >
                      <div
                        className="prose prose-lg max-w-none text-gray-800 leading-relaxed text-xl"
                        dangerouslySetInnerHTML={{
                          __html: faq.answer.replace(
                            /\*\*(.*?)\*\*/g,
                            '<strong class="text-emerald-800 font-black">$1</strong>',
                          ),
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </section>

        {/* Same CTA style as shipping */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-center py-24 bg-gradient-to-r from-emerald-600 to-green-700 rounded-t-4xl -mt-20 max-w-4xl mx-auto shadow-2xl border-t-4 border-white/30"
        >
          <div className="text-8xl mb-12 drop-shadow-2xl">❓</div>
          <h3 className="text-5xl font-black text-white mb-12">
            Still have questions?
          </h3>
          <Link
            href="/support"
            className="inline-flex items-center gap-4 bg-white text-emerald-800 px-12 py-6 rounded-3xl text-2xl font-black shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all"
          >
            <HelpCircle className="w-8 h-8" />
            Get Support
            <Zap className="w-6 h-6" />
          </Link>
        </motion.section>
      </div>
    </div>
  );
}
