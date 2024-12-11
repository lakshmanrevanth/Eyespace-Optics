"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const services = [
  {
    title: "Myopia Management Center",
    description: "Specialized care for myopia control and prevention.",
    icon: "👁️",
    link: "/myopia-management",
  },
  {
    title: "Shop In-store",
    description: "Browse our wide selection of eyewear in our physical store.",
    icon: "🛍️",
    link: "/shop",
  },
  {
    title: "Eye Testing & Consultation",
    description:
      "Comprehensive eye exams and personalized eyewear recommendations.",
    icon: "🔬",
    link: "/eye-testing",
  },
  {
    title: "Contact Lenses Fittings",
    description: "Expert fitting services for all types of contact lenses.",
    icon: "📞",
    link: "/contact-lenses",
  },
  {
    title: "Repair and Replacement",
    description:
      "Quick and reliable repair or replacement for your damaged eyewear. Visit us or contact online for assistance.",
    icon: "🔧",
    link: null,
  },
];

export default function EyeCareServices() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    servicesSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-24 px-6 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Comprehensive Eye Care Services
          </h1>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Caring for your vision with world-class solutions and personalized
            care.
          </p>
          <button
            onClick={scrollToServices}
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Explore Services
          </button>
        </motion.div>
        <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center"></div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-white opacity-75" />
        </motion.div>
      </div>

      {/* Services Grid */}
      <div id="services" className="container mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-xl shadow-lg p-8 bg-white border-2 hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                service.link
                  ? "border-blue-200 hover:border-blue-500"
                  : "border-gray-200 hover:border-gray-400"
              }`}
            >
              <div className="flex flex-col items-center mb-6">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 text-center">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 text-center mb-8">
                {service.description}
              </p>
              {service.link ? (
                <a
                  href={service.link}
                  className="block w-full text-center bg-blue-500 text-white px-6 py-3 rounded-full shadow hover:bg-blue-600 hover:shadow-lg transition-all duration-300"
                >
                  Learn More →
                </a>
              ) : (
                <button className="block w-full text-center bg-gray-500 text-white px-6 py-3 rounded-full shadow hover:bg-gray-600 hover:shadow-lg transition-all duration-300">
                  Contact Us
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
