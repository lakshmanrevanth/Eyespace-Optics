import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Eye, Brain, Zap, Shield } from "lucide-react";

const AIProgressiveLensLandingPage: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [openPopup, setOpenPopup] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const togglePopup = () => {
    setOpenPopup(!openPopup);
  };

  const features = [
    {
      icon: Eye,
      title: "Enhanced Vision",
      description:
        "Wide natural vision with Maxi View Technology and optimized visual fields.",
    },
    {
      icon: Brain,
      title: "AI-Powered",
      description:
        "Ocular Dynamics analysis and AI algorithms create a fully personalized lens.",
    },
    {
      icon: Zap,
      title: "Quick Adaptation",
      description:
        "Faster adjustment compared to traditional lenses using Metamorph Technology.",
    },
    {
      icon: Shield,
      title: "UV Protection",
      description:
        "Built-in protection against harmful UV rays for complete eye safety.",
    },
  ];

  const brands = [
    {
      name: "Vision Rx Lab",
      logo: "/assets/images/products/vision_rx_logo.png",
    },
    { name: "OptiTech", logo: "/assets/images/products/optitech_logo.png" },
    { name: "VisionAI", logo: "/assets/images/products/varilux.png" },
    { name: "SmartSight", logo: "/assets/images/products/zeiss.png" },
  ];

  const faqs = [
    {
      question: "What are Nova AI lenses?",
      answer:
        "Nova AI lenses are highly customized progressive lenses powered by cutting-edge AI and ocular dynamics analysis to create a unique visual experience.",
    },
    {
      question: "How do Nova AI lenses differ from traditional lenses?",
      answer:
        "Nova AI lenses adapt to your specific eye movements, wear position, and lifestyle, providing superior clarity and faster adaptation compared to traditional lenses.",
    },
    {
      question: "How do AI lenses analyze ocular dynamics?",
      answer:
        "Nova AI lenses incorporate advanced algorithms to analyze your eye-head movements to tailor the lenses to your unique vision needs.",
    },
    {
      question: "Are Nova AI lenses suitable for everyone?",
      answer:
        "Nova AI lenses are ideal for people with complex prescriptions and those seeking a more precise and personalized visual solution. Consult with an eye care professional for suitability.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Person wearing Nova AI progressive lenses"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#7A6F5C] bg-opacity-70"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Revolutionizing Your Vision with Nova AI Lenses
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience unparalleled clarity, comfort, and customization with
            Nova AI’s cutting-edge technology.
          </motion.p>
          <motion.button
            className="bg-white text-[#7A6F5C] px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={togglePopup}
          >
            Discover Nova AI
          </motion.button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#7A6F5C] mb-12">
            Why Choose Nova AI Lenses?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-6 rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <feature.icon className="w-12 h-12 text-[#7A6F5C] mx-auto mb-4" />
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#7A6F5C] mb-12">
            How Nova AI Lenses Work
          </h2>
          <div className="space-y-8">
            {[
              {
                step: 1,
                title: "Ocular Dynamics Analysis",
                description:
                  "Analyzing your eye-head movements to tailor your lenses.",
              },
              {
                step: 2,
                title: "AI Personalization",
                description:
                  "Advanced AI algorithms create a personalized lens design.",
              },
              {
                step: 3,
                title: "Customized Lenses",
                description:
                  "Bespoke lenses built for your unique visual needs.",
              },
              {
                step: 4,
                title: "Precision Manufacturing",
                description:
                  "Crafting lenses with the utmost precision using the latest technology.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-[#7A6F5C] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6">
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

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#7A6F5C] mb-12">
            Frequently Asked Questions
          </h2>
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
                  <span className="font-semibold text-[#7A6F5C]">
                    {faq.question}
                  </span>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="p-4 bg-gray-50 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#7A6F5C] mb-12">
            Trusted by Leading Brands
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img src={brand.logo} alt={brand.name} className="max-h-24" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      {openPopup && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 p-10 max-h-[80vh] overflow-y-auto relative">
            {/* Close Button inside the modal */}
            <button
              className="absolute top-4 right-4 text-gray-600"
              onClick={togglePopup}
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold text-[#7A6F5C] mb-4">
              Nova AI Lenses: Revolutionizing Optical Technology
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Vision Rx Lab has successfully tapped the power of current
              Artificial Intelligence to create Nova Ai lenses – the new
              generation progressive lenses, which come with a high level of
              precision and exceptional customization, achieved through its
              cutting-edge technologies.
            </p>
            <h3 className="text-xl font-semibold text-[#7A6F5C] mt-4">
              Ocular Dynamics
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              ‘Ocular Dynamics’ is the term used to describe the visual method
              employed to observe the environment. The link between the eye-head
              motions is how ‘ocular dynamics’ is assessed in order to
              comprehend the distinctive manner that each person sees. ‘Ocular
              Dynamics’ is employed from a young age, yet it changes over time
              as our oculomotor system develops and in reaction to environmental
              stimuli. To guarantee a precise and trustworthy diagnosis, Nova Ai
              incorporates the analysis and interpretation of ocular dynamics.
            </p>
            <h3 className="text-xl font-semibold text-[#7A6F5C] mt-4">
              Metamorph Technology
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              The supporting ecosystem conducts a thorough study to gather data
              on prescription, wear position, and selected frame. The
              development of progressive lenses depends on the interpretation of
              data. The wearer receives unfettered natural vision that is
              customized to their style of looking, with a visual solution
              provided with complete data and the utmost meticulousness possible
              with ‘Metamorph technology’ for a truly individualized visual
              experience.
            </p>
            <h3 className="text-xl font-semibold text-[#7A6F5C] mt-4">
              Features of Nova AI Lenses
            </h3>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
              <li>Binocular Balancing System for minimal blurriness</li>
              <li>Maxi View Technology for wider natural vision</li>
              <li>Bespoke Visual Fields achieved through Ocular Dynamics</li>
              <li>Digital Profile technology for comfortable device use</li>
              <li>
                Digi-Contour technology for rich contrast and wider vision
              </li>
              <li>Slim-tech for excellent aesthetics and lightness</li>
              <li>
                Multi Aspheric Technology and Aberration Filter System 2.0
              </li>
            </ul>
            <h3 className="text-xl font-semibold text-[#7A6F5C] mt-4">
              A Breakthrough in Progressive Lens Technology
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Nova Ai is the technological gift that the consumer has been
              waiting for, offering highly customized lenses with the best
              possible visual quality using the most recent technological
              developments and precise instruments like VR device. It’s a
              breakthrough in progressive lens technology which people can count
              on.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIProgressiveLensLandingPage;
