"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Calendar,
  Phone,
  Mail,
  ChevronDown,
  MessageCircle,
} from "lucide-react";

// Importing images from the public folder
import shopInsideImage from "/assets/images/contact/shop_inside_6.jpg";
import myopiaImage from "/assets/images/main/myopia.jpg";
import shopInsideImage5 from "/assets/images/contact/shop_inside_5.jpg";
import shopInsideImage4 from "/assets/images/contact/shop_inside_4.jpg";
import shopInsideImage3 from "/assets/images/contact/shop_inside_3.jpg";
import shopInsideImage2 from "/assets/images/contact/shop_inside_2.jpg";
import shopInsideImage1 from "/assets/images/contact/shop_1.jpg";

const ShopInStoreLandingPage: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const shopInfoData = [
    {
      icon: MapPin,
      title: "Location",
      content:
        "184/C, Hennur Main Rd, next to Reliance Fresh Mall, HBR Layout 4th Block, Hennur Gardens, Bengaluru, Karnataka 560043",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
    },
    {
      icon: Calendar,
      title: "Days Open",
      content: "Monday to Saturday",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 8123001688",
    },
    {
      icon: Mail,
      title: "Email",
      content: "opticseyespace@gmail.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection onScrollToInfo={() => scrollToSection("store-info")} />

      {/* Shop Information Section */}
      {/* <InfoSection sectionId="store-info" data={shopInfoData} /> */}

      {/* Google Maps Section */}
      <GoogleMapsSection />

      {/* Shop Images Showcase */}
      <ImageShowcaseSection />

      {/* Call-to-Action Section */}
      <CallToActionSection />
    </div>
  );
};

/* Components */
const HeroSection: React.FC<{ onScrollToInfo: () => void }> = ({
  onScrollToInfo,
}) => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "support@store.com",
      color: "bg-emerald-500",
    },
    {
      icon: Phone,
      label: "Helpline",
      value: "+91-1234567890",
      color: "bg-blue-500",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+91-9876543210",
      color: "bg-green-500",
    },
  ];

  return (
    <section className="relative min-h-[50vh] bg-gradient-to-b from-[#0A2647] to-[#041C32]">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source src="/assets/videos/contact/contact_3.mp4" type="video/mp4" />
          {/* Fallback image for unsupported browsers */}
        </video>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-white">
          {/* Hero Content */}
          <motion.div
            className="text-center max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Vision Care Reimagined
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Experience personalized eye care with cutting-edge technology and
              fashion-forward eyewear collections curated just for you.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap justify-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <button
                onClick={onScrollToInfo}
                className="group relative px-8 py-4 bg-white text-blue-900 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
              >
                <span className="relative z-10">Explore Collections</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </button>

              <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300">
                Book Consultation
              </button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            onClick={onScrollToInfo}
          >
            <ChevronDown className="w-8 h-8 text-white" />
          </motion.div>
        </div>

        {/* Contact Information */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="flex items-center justify-center gap-2 mb-8">
              <Clock className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-semibold text-white">
                Available Monday to Saturday, 10:30 AM - 8:00 PM
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.label}
                  className="relative group bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div
                    className={`absolute top-0 left-0 w-1 h-full ${method.color} rounded-l-xl`}
                  />
                  <div className="flex flex-col items-center text-center">
                    <method.icon className="w-6 h-6 mb-2 text-gray-300" />
                    <h3 className="text-sm font-medium text-gray-400 mb-1">
                      {method.label}
                    </h3>
                    <p className="text-white font-medium">{method.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// const InfoSection: React.FC<{
//   sectionId: string;
//   data: Array<{ icon: React.ElementType; title: string; content: string }>;
// }> = ({ sectionId, data }) => (
//   <section id={sectionId} className="py-24 px-4 bg-white">
//     <div className="max-w-6xl mx-auto">
//       <h2 className="text-3xl md:text-5xl font-bold text-center text-blue-600 mb-16">
//         Store Information
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {data.map((info, index) => (
//           <InfoCard
//             key={index}
//             icon={info.icon}
//             title={info.title}
//             content={info.content}
//           />
//         ))}
//       </div>
//     </div>
//   </section>
// );

const InfoCard: React.FC<{
  icon: React.ElementType;
  title: string;
  content: string;
}> = ({ icon: Icon, title, content }) => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-center space-x-4 mb-4">
      <Icon className="w-8 h-8 text-blue-600" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-gray-600">{content}</p>
  </div>
);

const GoogleMapsSection: React.FC = () => (
  <section className="py-16 px-4 bg-gray-100">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-blue-600 mb-12">
        Find Us
      </h2>
      <div
        className="relative overflow-hidden rounded-lg shadow-lg"
        style={{ paddingBottom: "56.25%" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15548.237512891923!2d77.61719889560167!3d13.031890747124429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17763faa837f%3A0xad5315f3d739992d!2sEyespace%20optics!5e0!3m2!1sen!2sin!4v1733927011052!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{
            border: 0,
            position: "absolute",
            top: 0,
            left: 0,
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
);

const ImageShowcaseSection: React.FC = () => (
  <section className="py-24 px-4 bg-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-blue-600 mb-16">
        Our Store
      </h2>

      {/* Horizontal Scroll Container */}
      <div className="overflow-x-auto overflow-y-hidden flex space-x-6 pb-4 scrollbar-none">
        {/* Image Items */}
        <div className="relative group flex-shrink-0 w-80 aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg">
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full transition-transform duration-300 ease-in-out"
          >
            <img
              src={shopInsideImage5}
              alt="Shop view"
              className="object-cover w-full h-full"
            />
          </motion.div>
          <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-r from-transparent to-white opacity-50 group-hover:opacity-0 transition-opacity duration-300" />
        </div>

        <div className="relative group flex-shrink-0 w-80 aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg">
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full transition-transform duration-300 ease-in-out"
          >
            <img
              src={shopInsideImage4}
              alt="Shop view"
              className="object-cover w-full h-full"
            />
          </motion.div>
          <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-r from-transparent to-white opacity-50 group-hover:opacity-0 transition-opacity duration-300" />
        </div>

        <div className="relative group flex-shrink-0 w-80 aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg">
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full transition-transform duration-300 ease-in-out"
          >
            <img
              src={shopInsideImage3}
              alt="Shop view"
              className="object-cover w-full h-full"
            />
          </motion.div>
          <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-r from-transparent to-white opacity-50 group-hover:opacity-0 transition-opacity duration-300" />
        </div>

        <div className="relative group flex-shrink-0 w-80 aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg">
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full transition-transform duration-300 ease-in-out"
          >
            <img
              src={shopInsideImage2}
              alt="Shop view"
              className="object-cover w-full h-full"
            />
          </motion.div>
          <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-r from-transparent to-white opacity-50 group-hover:opacity-0 transition-opacity duration-300" />
        </div>

        <div className="relative group flex-shrink-0 w-80 aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg">
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full transition-transform duration-300 ease-in-out"
          >
            <img
              src={shopInsideImage}
              alt="Shop view"
              className="object-cover w-full h-full"
            />
          </motion.div>
          <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-r from-transparent to-white opacity-50 group-hover:opacity-0 transition-opacity duration-300" />
        </div>

        <div className="relative group flex-shrink-0 w-110 h-135 aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg">
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full transition-transform duration-300 ease-in-out"
          >
            <img
              src={shopInsideImage1}
              alt="Shop view"
              className="object-cover w-full h-full"
            />
          </motion.div>
          <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-r from-transparent to-white opacity-50 group-hover:opacity-0 transition-opacity duration-300" />
        </div>
      </div>
    </div>
  </section>
);

const CallToActionSection: React.FC = () => (
  <section className="py-24 px-4 bg-[#7A6F5C] text-white">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-8">
        Ready to Visit Us?
      </h2>
      <p className="text-lg md:text-xl mb-12">
        Don't wait! Come experience personalized eye care and browse our
        collection in person. We're excited to meet you!
      </p>
      <a
        href="https://maps.google.com?q=184%2FC%2C+Hennur+Main+Rd%2C+next+to+Reliance+Fresh+Mall%2C+HBR+Layout+4th+Block%2C+Hennur+Gardens%2C+Bengaluru%2C+Karnataka+560043"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-blue-600 text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-100"
      >
        Get Directions
      </a>
    </div>
  </section>
);

export default ShopInStoreLandingPage;
