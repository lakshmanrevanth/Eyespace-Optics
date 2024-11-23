import React from "react";

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
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Comprehensive Eye Care Services
        </h1>
        <p className="text-lg mb-8">
          Caring for your vision with world-class solutions and personalized
          care.
        </p>
        <div className="absolute inset-0 opacity-20 bg-[url('https://via.placeholder.com/1200x600')] bg-cover bg-center"></div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-lg p-6 bg-white border border-gray-200 hover:shadow-xl transition-transform transform hover:-translate-y-2 ${
                service.link ? "hover:border-blue-500" : "hover:border-gray-400"
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{service.icon}</div>
                <h2 className="text-xl font-semibold">{service.title}</h2>
              </div>
              <p className="text-gray-600 mb-6">{service.description}</p>
              {service.link ? (
                <a
                  href={service.link}
                  className="inline-block text-center bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
                >
                  Learn More
                </a>
              ) : (
                <button className="inline-block text-center bg-gray-500 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-600">
                  Contact Us
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
