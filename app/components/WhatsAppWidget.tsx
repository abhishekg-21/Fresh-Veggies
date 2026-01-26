"use client";
import { useState } from "react";
import { FiX } from "react-icons/fi";

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "919987050067"; // 👈 REPLACE WITH YOUR NUMBER

  const defaultMessage = encodeURIComponent(
    "Hi! I'm interested in fresh organic vegetables from your site! 🌱\nWhat are today's specials?"
  );

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[1000] bg-green-500 hover:bg-green-600 active:bg-green-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 active:translate-y-0 w-16 h-16 flex items-center justify-center ring-4 ring-green-500/20 hover:ring-green-500/40 cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <svg
          className="w-8 h-8 drop-shadow-lg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
        </svg>
      </button>

      {/* Chat Bubble */}
      {isOpen && (
        <div className="fixed bottom-28 right-6 z-[1000] bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-green-200/50 w-80 p-6 animate-in slide-in-from-bottom-4 duration-300 max-w-[90vw]">
          <div className="flex items-center gap-4 mb-6 pb-4 border-b border-green-100">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
              WA
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-xl text-gray-900 truncate">
                Fresh Veggies Support
              </h4>
              <p className="text-sm text-green-600 font-semibold">
                Online • 1 min ago
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-xl transition-colors text-gray-500 hover:text-gray-700"
              aria-label="Close chat"
            >
              <FiX size={20} />
            </button>
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed text-sm">
            👋 Hi! Need help with your fresh veggie order?
            <br />
            Were here to help! 🌱
          </p>

          <div className="space-y-3">
            <a
              href={`https://wa.me/${phoneNumber}?text=${defaultMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-4 px-6 rounded-2xl font-bold text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3 text-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* WhatsApp icon */}
              </svg>
              Start WhatsApp Chat
            </a>

            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-gray-500 hover:text-gray-700 py-3 px-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-all font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
