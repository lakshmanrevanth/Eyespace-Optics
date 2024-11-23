import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Clock, Calendar, Phone, Mail } from 'lucide-react'

const ShopInStoreLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/shop-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#9d8189] bg-opacity-70"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Visit Our Store
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience personalized eye care and browse our extensive collection in person
          </motion.p>
        </div>
      </section>

      {/* Shop Information Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#9d8189] mb-12">Store Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InfoCard icon={MapPin} title="Location" content="123 Eye Care St, Vision City, VC 12345" />
            <InfoCard icon={Clock} title="Hours" content="Mon-Fri: 9AM-6PM, Sat: 10AM-4PM" />
            <InfoCard icon={Calendar} title="Days Open" content="Monday to Saturday" />
            <InfoCard icon={Phone} title="Phone" content="+1 (555) 123-4567" />
            <InfoCard icon={Mail} title="Email" content="info@eyecarestore.com" />
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#9d8189] mb-12">Find Us</h2>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.74844797932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635266234916!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-md"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Shop Images Showcase */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#9d8189] mb-12">Our Store</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <motion.div
                key={index}
                className="aspect-w-4 aspect-h-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={`/shop-image-${index}.jpg`}
                  alt={`Shop interior ${index}`}
                  className="object-cover rounded-lg shadow-md"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 px-4 bg-[#9d8189] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Visit Us?</h2>
          <p className="text-xl mb-8">Come experience our exceptional service and wide selection of eyewear in person.</p>
          <motion.button
            className="bg-white text-[#9d8189] px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Directions
          </motion.button>
        </div>
      </section>
    </div>
  )
}

interface InfoCardProps {
  icon: React.ElementType
  title: string
  content: string
}

const InfoCard: React.FC<InfoCardProps> = ({ icon: Icon, title, content }) => (
  <motion.div
    className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Icon className="w-8 h-8 text-[#9d8189] mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{content}</p>
  </motion.div>
)

export default ShopInStoreLandingPage
