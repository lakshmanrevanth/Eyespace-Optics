import React from 'react'
import { motion } from 'framer-motion'
import { Sun, Shield, Zap, ChevronRight } from 'lucide-react'

const ClipOnsLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Person wearing clip-on sunglasses"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#9d8189] bg-opacity-70"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transform Your Glasses Instantly
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover the convenience of our premium clip-on sunglasses
          </motion.p>
          <motion.button 
            className="bg-white text-[#9d8189] px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shop Now
          </motion.button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#9d8189] mb-12">Why Choose Our Clip-Ons?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Sun, title: "UV Protection", description: "100% UV protection to keep your eyes safe" },
              { icon: Shield, title: "Scratch Resistant", description: "Durable lenses that withstand daily wear" },
              { icon: Zap, title: "Quick & Easy", description: "Attach and remove in seconds" }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-100 p-6 rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <feature.icon className="w-12 h-12 text-[#9d8189] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#9d8189] mb-12">How It Works</h2>
          <div className="space-y-8">
            {[
              { step: 1, title: "Choose Your Style", description: "Select from our wide range of clip-on designs" },
              { step: 2, title: "Clip Them On", description: "Easily attach the clip-ons to your existing glasses" },
              { step: 3, title: "Enjoy the View", description: "Experience instant sun protection and style" }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-[#9d8189] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#9d8189] mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Alex M.", quote: "These clip-ons are a game-changer! So convenient and stylish." },
              { name: "Sarah L.", quote: "I love how quickly I can switch between indoor and outdoor wear." },
              { name: "Chris P.", quote: "The quality is outstanding. Best clip-ons I've ever used!" }
            ].map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-100 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-[#9d8189]">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 px-4 bg-[#9d8189]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Eyewear?</h2>
          <p className="text-xl mb-8">Experience the convenience and style of our clip-on sunglasses today!</p>
          <motion.button 
            className="bg-white text-[#9d8189] px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shop Now
            <ChevronRight className="ml-2 w-5 h-5" />
          </motion.button>
        </div>
      </section>
    </div>
  )
}
export default ClipOnsLandingPage;