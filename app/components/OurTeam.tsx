// components/OurTeam.tsx
import React from "react";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import Image from "next/image";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  img: string;
  social: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Aman Singh",
    role: "Lead Farmer",
    bio: "15+ years of organic farming experience",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Bhavna Gupta",
    role: "Quality Head",
    bio: "Ensuring premium quality in every product",
    img: "https://randomuser.me/api/portraits/women/21.jpg",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "Raj Patel",
    role: "Delivery Manager",
    bio: "Making sure your orders arrive fresh",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    social: {
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "Customer Success",
    bio: "Your satisfaction is our priority",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
];

const OurTeam: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-green-300 rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">
            Meet The Team
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            Our Experience Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Dedicated professionals committed to bringing you the freshest
            organic produce
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-64 bg-gray-100">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Social Icons on Hover */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {member.social.facebook && (
                    <a
                      href={member.social.facebook}
                      className="bg-white text-green-600 p-2 rounded-full hover:bg-green-600 hover:text-white transition"
                    >
                      <FiFacebook className="text-lg" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="bg-white text-green-600 p-2 rounded-full hover:bg-green-600 hover:text-white transition"
                    >
                      <FiTwitter className="text-lg" />
                    </a>
                  )}
                  {member.social.instagram && (
                    <a
                      href={member.social.instagram}
                      className="bg-white text-green-600 p-2 rounded-full hover:bg-green-600 hover:text-white transition"
                    >
                      <FiInstagram className="text-lg" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="bg-white text-green-600 p-2 rounded-full hover:bg-green-600 hover:text-white transition"
                    >
                      <FiLinkedin className="text-lg" />
                    </a>
                  )}
                </div>
              </div>

              {/* Info Section */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-green-600 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Want to join our team?</p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all">
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
