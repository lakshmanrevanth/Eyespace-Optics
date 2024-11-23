import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Phone, MapPin, ChevronDown } from 'lucide-react';

export default function Hero() {
  const [infoBarOpen, setInfoBarOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/eyewear-video-background.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-[#9d8189]/90 to-[#9d8189]/60" />

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-screen">
        <div className="text-center">
          <motion.span 
            className="inline-block px-6 py-2 mb-8 text-sm font-medium text-white bg-[#9d8189]/30 backdrop-blur-sm rounded-full border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Premium Eyewear Collection 2024
          </motion.span>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            See the World in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b7a898] to-[#e2d8d0]">
              Perfect Clarity
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 mb-12 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience premium eyewear and exceptional eye care services tailored to your unique vision needs. 
            Discover our curated collection of designer frames.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button 
              className="group bg-[#b7a898] text-white px-8 py-4 rounded-lg hover:bg-[#e2d8d0] hover:text-[#9d8189] flex items-center justify-center transition-all shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book an Appointment
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </motion.button>
            <motion.button 
              className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg hover:bg-white/20 flex items-center justify-center transition-all shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Collection
            </motion.button>
          </motion.div>
        </div>

        {/* Floating Eyewear Images */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full overflow-hidden pointer-events-none">
          <motion.img
            src="/eyewear-1.png"
            alt="Luxury Eyewear"
            className="absolute -left-20 top-0 w-64 h-auto opacity-50"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 0.5, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          />
          <motion.img
            src="/eyewear-2.png"
            alt="Designer Frames"
            className="absolute -right-20 bottom-0 w-64 h-auto opacity-50"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 0.5, x: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          />
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-32 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </motion.div>

        {/* Info Bar */}
        <motion.div 
          className={`fixed bottom-0 left-0 right-0 bg-[#9d8189] rounded-t-3xl shadow-2xl transition-all duration-300 ease-in-out ${infoBarOpen ? 'h-auto' : 'h-16'} z-50`}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div 
            className="flex justify-between items-center px-8 py-4 cursor-pointer"
            onClick={() => setInfoBarOpen(!infoBarOpen)}
          >
            <h3 className="font-semibold text-white text-lg">Quick Information</h3>
            <motion.div
              animate={{ rotate: infoBarOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-6 h-6 text-white" />
            </motion.div>
          </div>
          {infoBarOpen && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
              <InfoItem icon={Clock} title="Business Hours" details={["Mon-Sat: 9AM-7PM", "Sunday: Closed"]} />
              <InfoItem icon={Phone} title="Contact Us" details={["+91 9876543210", "info@logo.com"]} />
              <InfoItem icon={MapPin} title="Location" details={["Bangalore, Karnataka", "India"]} />
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

const InfoItem = ({ icon: Icon, title, details }: { icon: React.ElementType, title: string, details: string[] }) => (
  <motion.div 
    className="flex items-center bg-[#b7a898]/20 rounded-lg p-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="bg-[#e2d8d0] p-3 rounded-full">
      <Icon className="w-6 h-6 text-[#9d8189]" />
    </div>
    <div className="ml-4">
      <h3 className="font-semibold text-white">{title}</h3>
      {details.map((detail, index) => (
        <p key={index} className="text-sm text-white/80">{detail}</p>
      ))}
    </div>
  </motion.div>
);
