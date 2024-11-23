"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface Service {
  title: string
  description: string
  image: string
  link: string
}

export default function ServicesSectionSpecialties() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const services: Service[] = [
    {
      title: "Our Offers And Promotions",
      description: "Discover exclusive deals on premium eyewear.",
      image: "/assets/images/main/offers.webp",  // Add your image source here
      link: "#offers"
    },
    {
      title: "The Brands That We House",
      description: "Explore our curated collection of designer frames.",
      image: "",  // Add your image source here
      link: "#brands"
    },
    {
      title: "Our Myopia Management Centre",
      description: "Expert care for myopia control and prevention.",
      image: "",  // Add your image source here
      link: "#myopia"
    }
  ]

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div 
              className="overflow-hidden transition-all duration-300 hover:shadow-xl"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden group">
                  {/* Replaced next/image with img */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover transition-transform duration-300 group-hover:scale-110 w-full h-full"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Replaced next/link with a regular <a> tag */}
                    <a href={service.link} className="bg-white text-gray-800 hover:bg-gray-100 px-4 py-2 rounded-md">
                      Learn More
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h2>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
              <div className="bg-gray-50 p-6">
                <button
                  className={`w-full transition-colors duration-300 ${
                    hoveredIndex === index ? 'bg-[#9d8189] text-white' : 'bg-transparent text-[#9d8189]'
                  } px-4 py-2 rounded-md`}
                >
                  {/* Replaced next/link with a regular <a> tag */}
                  <a href={service.link}>
                    {hoveredIndex === index ? 'Explore Now' : 'Know More'}
                  </a>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
