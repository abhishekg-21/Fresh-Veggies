// components/Footer.tsx
import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
} from "react-icons/fi";

const Footer: React.FC = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Shop", href: "/shop" },
    { name: "Our Farmers", href: "/our_farmer" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const customerService = [
    { name: "Track Order", href: "/track-order" },
    { name: "Returns & Refunds", href: "/returns" },
    { name: "Shipping Info", href: "/shipping" },
    { name: "FAQs", href: "/FAQs" },
    { name: "Support", href: "/Support" },
  ];

  const categories = [
    { name: "Fresh Vegetables", href: "/shop" },
    { name: "Organic Fruits", href: "/shop?category=fruits" },
    { name: "Leafy Greens", href: "/shop?category=greens" },
    { name: "Seasonal Produce", href: "/shop?category=seasonal" },
    { name: "Bulk Orders", href: "/bulk_order" },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#1a241d] to-[#233125] text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info & Newsletter */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/file.svg" alt="Organo" className="w-10 h-10" />
              <span className="font-extrabold text-2xl text-green-300">
                Organo
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted source for fresh, organic vegetables delivered
              straight from local farms to your doorstep. Healthy living starts
              here.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">
                Subscribe to Our Newsletter
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-[#2C332D] border border-gray-600 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-green-400"
                />
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-all">
                  <FiSend />
                </button>
              </div>
            </div>

            {/* Social Media */}
            <h4 className="text-white font-semibold mb-3">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/yourorgano" // 👈 Your FB
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#2C332D] hover:bg-blue-600 p-3 rounded-xl transition-all hover:scale-110 hover:shadow-lg shadow-md"
                aria-label="Facebook"
              >
                <FiFacebook className="text-lg group-hover:-rotate-12 transition-transform" />
              </a>

              <a
                href="https://twitter.com/yourorgano" // 👈 Your Twitter/X
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#2C332D] hover:bg-sky-500 p-3 rounded-xl transition-all hover:scale-110 hover:shadow-lg shadow-md"
                aria-label="Twitter"
              >
                <FiTwitter className="text-lg group-hover:-rotate-12 transition-transform" />
              </a>

              <a
                href="https://www.instagram.com/yourorgano/" // 👈 YOUR INSTAGRAM HERE!
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#2C332D] hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 p-3 rounded-xl transition-all hover:scale-110 hover:shadow-lg shadow-md"
                aria-label="Instagram"
              >
                <FiInstagram className="text-lg group-hover:-rotate-12 transition-transform" />
              </a>

              <a
                href="https://www.linkedin.com/company/yourorgano" // 👈 Your LinkedIn
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#2C332D] hover:bg-blue-700 p-3 rounded-xl transition-all hover:scale-110 hover:shadow-lg shadow-md"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="text-lg group-hover:-rotate-12 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">
              Customer Service
            </h4>
            <ul className="space-y-3">
              {customerService.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">
              Categories
            </h4>
            <ul className="space-y-3">
              {categories.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-700">
          <div className="flex items-start gap-3">
            <FiMapPin className="text-green-400 text-xl mt-1 flex-shrink-0" />
            <div>
              <h5 className="text-white font-semibold mb-1">Address</h5>
              <p className="text-gray-400 text-sm">
                123 Organic Street, Green Valley, Mumbai 400001, India
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FiPhone className="text-green-400 text-xl mt-1 flex-shrink-0" />
            <div>
              <h5 className="text-white font-semibold mb-1">Phone</h5>
              <p className="text-gray-400 text-sm">+91 123 456 7890</p>
              <p className="text-gray-400 text-sm">+91 098 765 4321</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FiMail className="text-green-400 text-xl mt-1 flex-shrink-0" />
            <div>
              <h5 className="text-white font-semibold mb-1">Email</h5>
              <p className="text-gray-400 text-sm">support@organo.com</p>
              <p className="text-gray-400 text-sm">info@organo.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; 2025 Organo. All rights reserved. Built with ❤️ for healthy
              living.
            </p>

            {/* Payment Methods */}
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm mr-2">We Accept:</span>
              <div className="flex gap-2">
                <div className="bg-white px-3 py-1 rounded">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                    alt="Visa"
                    className="h-4"
                  />
                </div>
                <div className="bg-white px-3 py-1 rounded">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                    alt="Mastercard"
                    className="h-4"
                  />
                </div>
                <div className="bg-white px-3 py-1 rounded">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                    alt="PayPal"
                    className="h-4"
                  />
                </div>
                <div className="bg-white px-3 py-1 rounded text-xs font-bold text-gray-800">
                  UPI
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex gap-4 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
