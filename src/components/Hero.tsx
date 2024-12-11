import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ChevronDown, Clock, MapPin, Phone } from "lucide-react";

export default function LuxuryEyewearHero() {
  const [infoBarOpen, setInfoBarOpen] = useState(false);

  const handleBookAppointment = () => {
    window.location.href = "/schedule";
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0A2647] mt-12">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      >
        <source src="/assets/videos/main/hero_video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A2647]/80 to-[#0A2647]/40" />

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-screen">
        <div className="text-center">
          <motion.span
            className="inline-block px-6 py-2 mb-8 text-sm font-medium text-[#F4D03F] bg-[#144272]/30 backdrop-blur-sm rounded-full border border-[#F4D03F]/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Exclusive Eyewear Collection 2024
          </motion.span>
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-[#F4F4F4] mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Elevate Your Vision with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4D03F] to-[#F7E709]">
              Luxury Eyewear
            </span>
          </motion.h1>
          <motion.p
            className="text-xl text-[#C9E0E8] mb-12 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover our curated collection of designer frames, tailored to your
            unique style and vision needs. Experience the perfect blend of
            fashion and function.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="group bg-[#F4D03F] text-[#0A2647] px-8 py-4 rounded-lg hover:bg-[#FFD700] flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBookAppointment}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book a Consultation
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const InfoItem = ({
  icon: Icon,
  title,
  details,
}: {
  icon: React.ElementType;
  title: string;
  details: string[];
}) => (
  <motion.div
    className="flex flex-col items-center text-center bg-[#2C74B3]/20 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="bg-[#144272] p-3 rounded-full mb-3">
      <Icon className="w-8 h-8 text-[#F4D03F]" />
    </div>
    <h3 className="font-semibold text-[#F4D03F] mb-2">{title}</h3>
    {details.map((detail, index) => (
      <p key={index} className="text-sm text-[#C9E0E8]">
        {detail}
      </p>
    ))}
  </motion.div>
);
