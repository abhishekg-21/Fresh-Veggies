"use client";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FiMail, FiPhone, FiMapPin, FiSend, FiClock } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-700 via-green-800 to-green-600 text-white py-20 overflow-hidden shadow-lg">
        {/* Decorative accent circle */}
        <div className="absolute top-8 left-8 w-48 h-48 bg-yellow-300 opacity-20 rounded-full blur-3xl filter pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 space-y-6">
          <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-lg">
            Contact<span className="text-yellow-300"> Us</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-xl mx-auto font-semibold text-green-100">
            We love to hear from you. Get in touch with us!
          </p>
        </div>

        {/* Decorative bottom SVG wave for smooth content transition */}
        <svg
          className="absolute bottom-0 left-0 w-full text-white"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,64L80,53.3C160,43,320,21,480,37.3C640,53,800,107,960,128C1120,149,1280,139,1360,133.3L1440,128V160H0Z"
          />
        </svg>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl text-green-600 font-bold mb-2">
                Send us a Message
              </h2>
              <p className="text-gray-600 mb-6">
                Have a question or feedback? Fill out the form below and
                we&apos;ll get back to you as soon as possible.
              </p>

              {submitted && (
                <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                  Thank you for contacting us! We&apos;ll get back to you within
                  24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
                      placeholder="+91 123 456 7890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="order">Order Support</option>
                      <option value="product">Product Question</option>
                      <option value="feedback">Feedback</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <FiSend /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Info Cards */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="font-bold text-green-600 text-xl mb-6">
                Get in Touch
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 text-green-600 p-3 rounded-lg flex-shrink-0">
                    <FiMapPin className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Address
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      123 Organic Street
                      <br />
                      Green Valley, Mumbai
                      <br />
                      Maharashtra 400001, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 text-green-600 p-3 rounded-lg flex-shrink-0">
                    <FiPhone className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600 text-sm">
                      <a
                        href="tel:+911234567890"
                        className="hover:text-green-600"
                      >
                        +91 123 456 7890
                      </a>
                    </p>
                    <p className="text-gray-600 text-sm">
                      <a
                        href="tel:+910987654321"
                        className="hover:text-green-600"
                      >
                        +91 098 765 4321
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 text-green-600 p-3 rounded-lg flex-shrink-0">
                    <FiMail className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600 text-sm">
                      <a
                        href="mailto:support@organo.com"
                        className="hover:text-green-600"
                      >
                        support@organo.com
                      </a>
                    </p>
                    <p className="text-gray-600 text-sm">
                      <a
                        href="mailto:info@organo.com"
                        className="hover:text-green-600"
                      >
                        info@organo.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 text-green-600 p-3 rounded-lg flex-shrink-0">
                    <FiClock className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Business Hours
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Mon - Fri: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600 text-sm">
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                    <p className="text-gray-600 text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="font-bold text-green-600 text-xl mb-4">
                Follow Us
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Stay connected on social media for updates, tips, and more!
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="bg-green-100 text-green-600 hover:bg-green-600 hover:text-white p-3 rounded-lg transition"
                >
                  <FaFacebook className="text-xl" />
                </a>
                <a
                  href="#"
                  className="bg-green-100 text-green-600 hover:bg-green-600 hover:text-white p-3 rounded-lg transition"
                >
                  <FaTwitter className="text-xl" />
                </a>
                <a
                  href="#"
                  className="bg-green-100 text-green-600 hover:bg-green-600 hover:text-white p-3 rounded-lg transition"
                >
                  <FaInstagram className="text-xl" />
                </a>
                <a
                  href="#"
                  className="bg-green-100 text-green-600 hover:bg-green-600 hover:text-white p-3 rounded-lg transition"
                >
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
            </div>

            {/* Quick Support */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl shadow-xl p-6">
              <h3 className="font-bold text-xl mb-2">Need Quick Support?</h3>
              <p className="text-green-100 text-sm mb-4">
                Chat with our support team for instant assistance
              </p>
              <button className="w-full bg-white text-green-600 hover:bg-green-50 font-semibold px-6 py-3 rounded-lg transition">
                Start Live Chat
              </button>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Find Us Here</h2>
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center shadow-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709659!3d19.082177513865423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1698765432100!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Find quick answers to your most common queries
            </p>
          </div>

          <div className="space-y-2">
            {[
              {
                q: "What are your delivery hours?",
                a: "We deliver between 8 AM and 8 PM, every day of the week. Same-day delivery is available for orders placed before 12 PM.",
              },
              {
                q: "How can I track my order?",
                a: "After dispatch, you’ll receive an SMS and email with a tracking link. You can also track your order anytime through your account dashboard.",
              },
              {
                q: "What is your return policy?",
                a: "We provide a full satisfaction guarantee. If you’re unhappy with the quality, contact us within 24 hours for a complete refund or replacement.",
              },
              {
                q: "Do you offer bulk orders for restaurants?",
                a: "Yes. We provide special pricing and offers for bulk and recurring restaurant orders. Reach out to our business team at business@organo.com for details.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 cursor-pointer"
              >
                <summary className="flex items-center justify-between font-semibold text-lg text-gray-900">
                  <span className="group-hover:text-green-600 transition-colors">
                    {faq.q}
                  </span>
                  <svg
                    className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="mt-2 text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
