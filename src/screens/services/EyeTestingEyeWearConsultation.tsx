import React from 'react'
import { motion } from 'framer-motion'
import { Eye, Glasses, Clock, Users, ChevronRight } from 'lucide-react'

const EyeTestingConsultationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Eye examination"
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
            Expert Eye Testing & Eyewear Consultation
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover perfect vision with our comprehensive eye care services
          </motion.p>
          <motion.button 
            className="bg-white text-[#9d8189] px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book an Appointment
          </motion.button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#9d8189] mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard 
              icon={Eye}
              title="Comprehensive Eye Testing"
              description="State-of-the-art equipment and expert optometrists to assess your vision health"
            />
            <ServiceCard 
              icon={Glasses}
              title="Personalized Eyewear Consultation"
              description="Find the perfect frames that match your style and vision needs"
            />
          </div>
        </div>
      </section>

      {/* Eye Testing Process */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#9d8189] mb-12">Our Eye Testing Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: 1, title: "Pre-Test Evaluation", description: "We assess your medical history and current vision concerns" },
              { step: 2, title: "Comprehensive Examination", description: "Our experts use advanced technology to thoroughly examine your eyes" },
              { step: 3, title: "Results & Recommendations", description: "We provide a detailed explanation of your eye health and vision correction options" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-[#9d8189] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#9d8189]">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eyewear Consultation */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#9d8189] mb-12">Eyewear Consultation Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Wide Selection", description: "Browse through our extensive collection of designer frames" },
              { title: "Expert Advice", description: "Our stylists help you choose frames that complement your face shape" },
              { title: "Advanced Lens Options", description: "Explore cutting-edge lens technologies for optimal vision" },
              { title: "Virtual Try-On", description: "Use our digital tools to see how frames look on you" },
              { title: "Personalized Fitting", description: "Ensure your new eyewear fits perfectly and comfortably" },
              { title: "Style Guarantee", description: "Love your new look or we'll help you find a better match" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-gray-100 p-6 rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-[#9d8189]">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#9d8189] mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Sarah L.", quote: "The eye test was thorough, and the staff was incredibly helpful in choosing my new glasses." },
              { name: "Michael R.", quote: "I've never felt more confident in my eyewear. The consultation process was exceptional." },
              { name: "Emily T.", quote: "From test to glasses, the whole experience was smooth and professional. Highly recommend!" }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                <p className="font-semibold text-[#9d8189]">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 px-4 bg-[#9d8189]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Eye Test?</h2>
          <p className="text-xl mb-8">Book your comprehensive eye exam and personalized eyewear consultation today.</p>
          <motion.button 
            className="bg-white text-[#9d8189] px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Now
            <ChevronRight className="ml-2 w-5 h-5" />
          </motion.button>
        </div>
      </section>
    </div>
  )
}

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => (
  <motion.div 
    className="bg-gray-100 p-6 rounded-lg flex items-start"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Icon className="w-12 h-12 text-[#9d8189] mr-4 flex-shrink-0" />
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
)

export default EyeTestingConsultationPage