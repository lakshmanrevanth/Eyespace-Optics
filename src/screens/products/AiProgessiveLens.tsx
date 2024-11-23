import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp, Eye, Brain, Zap, Shield } from 'lucide-react'

const AIProgressiveLensLandingPage: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const features = [
    { icon: Eye, title: "Enhanced Vision", description: "Seamless transition between near and far vision" },
    { icon: Brain, title: "AI-Powered", description: "Adapts to your unique visual needs" },
    { icon: Zap, title: "Quick Adaptation", description: "Faster adjustment period compared to traditional lenses" },
    { icon: Shield, title: "UV Protection", description: "Built-in protection against harmful UV rays" },
  ]

  const brands = [
    { name: "OptiTech", logo: "/placeholder.svg?height=100&width=200" },
    { name: "VisionAI", logo: "/placeholder.svg?height=100&width=200" },
    { name: "SmartSight", logo: "/placeholder.svg?height=100&width=200" },
    { name: "FutureLens", logo: "/placeholder.svg?height=100&width=200" },
  ]

  const faqs = [
    { question: "What are AI progressive lenses?", answer: "AI progressive lenses use artificial intelligence to create a personalized lens design based on your unique visual needs and lifestyle." },
    { question: "How do AI progressive lenses differ from traditional ones?", answer: "AI lenses offer more precise customization, faster adaptation, and can adjust to various viewing distances more seamlessly than traditional progressive lenses." },
    { question: "Are AI progressive lenses suitable for everyone?", answer: "While AI lenses can benefit many people, they're especially useful for those with complex prescriptions or specific visual needs. Consult with your eye care professional to determine if they're right for you." },
    { question: "How long does it take to adapt to AI progressive lenses?", answer: "Most people adapt to AI progressive lenses more quickly than traditional ones, often within a few days to a week. However, individual experiences may vary." },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Person wearing AI progressive lenses"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#9d8189] bg-opacity-70"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            The Future of Vision is Here
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience unparalleled clarity with AI-powered progressive lenses
          </motion.p>
          <motion.button 
            className="bg-white text-[#9d8189] px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discover More
          </motion.button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#9d8189] mb-12">Why Choose AI Progressive Lenses?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#9d8189] mb-12">How AI Progressive Lenses Work</h2>
          <div className="space-y-8">
            {[
              { step: 1, title: "Eye Examination", description: "Comprehensive eye exam to gather your vision data" },
              { step: 2, title: "AI Analysis", description: "Advanced AI algorithms process your unique visual needs" },
              { step: 3, title: "Custom Design", description: "Personalized lens design created for optimal vision" },
              { step: 4, title: "Precision Manufacturing", description: "High-tech production of your custom lenses" }
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

      {/* Brands Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#9d8189] mb-12">Trusted Brands Offering AI Progressive Lenses</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {brands.map((brand, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-100 p-6 rounded-lg flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img src={brand.logo} alt={`${brand.name} logo`} className="max-w-full h-auto" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#9d8189] mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  className="flex justify-between items-center w-full p-4 text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-[#9d8189]">{faq.question}</span>
                  {openFAQ === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                {openFAQ === index && (
                  <div className="p-4 bg-gray-50">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 px-4 bg-[#9d8189]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Future of Vision?</h2>
          <p className="text-xl mb-8">Book an appointment today and discover if AI progressive lenses are right for you.</p>
          <motion.button 
            className="bg-white text-[#9d8189] px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Appointment
          </motion.button>
        </div>
      </section>
    </div>
  )
}

export default AIProgressiveLensLandingPage