"use client";

import { motion } from "framer-motion";

interface Service {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ServicesSectionSpecialties() {
  const services: Service[] = [
    {
      title: "Our Offers And Promotions",
      description: "Discover exclusive deals on premium eyewear.",
      image: "/assets/images/main/brands_.jpg",
      link: "/services/offers-and-promotions",
    },
    {
      title: "The Brands That We House",
      description: "Explore our curated collection of designer frames.",
      image: "/assets/images/main/brands__.jpg",
      link: "/products/luxury-brands",
    },
    {
      title: "Our Myopia Management Centre",
      description: "Expert care for myopia control and prevention.",
      image: "/assets/images/main/myopia.jpg",
      link: "/services/myopia-management-service",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Our Specialties
      </h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-t-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={service.link}
                  className="bg-white text-[#7A6F5C] hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="p-6 bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
            <div className="bg-gray-100 p-4">
              <a
                href={service.link}
                className="block w-full text-center px-4 py-2 text-[#7A6F5C] bg-transparent border border-[#7A6F5C] rounded-md hover:bg-[#7A6F5C] hover:text-white transition-colors duration-300"
              >
                Explore Now
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
