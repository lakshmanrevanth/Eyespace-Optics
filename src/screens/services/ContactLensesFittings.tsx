import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Eye,
  CheckCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const ContactLensFittingsPage: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#7A6F5C] bg-opacity-70"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Expert Contact Lens Fittings
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience comfort and clarity with our personalized contact lens
            solutions
          </motion.p>
          <motion.button
            className="bg-white text-[#7A6F5C] px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/schedule")}
            whileTap={{ scale: 0.95 }}
          >
            Book a Fitting
          </motion.button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#7A6F5C] mb-6">
            Why Choose Professional Contact Lens Fittings?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Our expert optometrists use advanced technology to ensure your
            contact lenses provide optimal vision, comfort, and eye health. We
            take the time to understand your lifestyle and visual needs to
            recommend the best contact lens solution for you.
          </p>
        </div>
      </section>

      {/* Fitting Process */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#7A6F5C] mb-12">
            Our Fitting Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Eye Examination",
                description: "Comprehensive eye health and vision assessment",
              },
              {
                step: 2,
                title: "Lens Selection",
                description:
                  "Choose from a variety of lens types based on your needs",
              },
              {
                step: 3,
                title: "Fitting & Training",
                description:
                  "Expert fitting and instructions for proper use and care",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-[#7A6F5C] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#7A6F5C]">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Contact Lenses */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#7A6F5C] mb-12">
            Types of Contact Lenses We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Daily Disposables",
                description:
                  "Fresh lenses every day for ultimate convenience and hygiene",
              },
              {
                title: "Monthly Lenses",
                description:
                  "Durable lenses for extended wear with proper care",
              },
              {
                title: "Toric Lenses",
                description: "Specially designed for astigmatism correction",
              },
              {
                title: "Multifocal Lenses",
                description: "Corrects both near and far vision for presbyopia",
              },
              {
                title: "Colored Lenses",
                description:
                  "Enhance or change your eye color while correcting vision",
              },
              {
                title: "Rigid Gas Permeable",
                description: "Durable lenses for crisp, clear vision",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-6 rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-[#7A6F5C]">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#7A6F5C] mb-12">
            Benefits of Professional Fittings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Optimal vision correction",
              "Enhanced comfort and reduced irritation",
              "Proper fit to prevent eye health issues",
              "Expert advice on lens care and maintenance",
              "Access to the latest contact lens technology",
              "Ongoing support and follow-up care",
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CheckCircle className="w-6 h-6 text-[#7A6F5C] mr-3 flex-shrink-0" />
                <p className="text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#7A6F5C] mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Emma S.",
                quote:
                  "The fitting process was thorough and the team found the perfect lenses for my active lifestyle.",
              },
              {
                name: "James L.",
                quote:
                  "I never thought I could wear contacts due to my astigmatism, but the toric lenses they fitted me with are amazing!",
              },
              {
                name: "Sophia R.",
                quote:
                  "The care and attention during my fitting was exceptional. I've never had more comfortable contacts.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <p className="font-semibold text-[#7A6F5C]">
                  {testimonial.name}
                </p>
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
          <div>
            {[
              {
                question: "How do I know which lenses are right for me?",
                answer:
                  "Our optometrists will conduct a thorough eye exam to determine your best options.",
              },
              {
                question: "How long do contact lenses last?",
                answer:
                  "It depends on the type of lenses. Daily lenses are disposed of after each use, while others can last up to a month or longer.",
              },
              {
                question: "Can I wear contact lenses if I have astigmatism?",
                answer:
                  "Yes, we offer toric lenses that correct astigmatism for clear, sharp vision.",
              },
              {
                question: "Are contact lenses safe to wear?",
                answer:
                  "Yes, as long as you follow care instructions and get regular checkups.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-xl font-semibold text-[#7A6F5C]">
                    {item.question}
                  </h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-6 h-6 text-[#7A6F5C]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#7A6F5C]" />
                  )}
                </div>
                {openFAQ === index && (
                  <p className="mt-4 text-gray-600">{item.answer}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-[#7A6F5C] text-white text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ready to Get Fitted?
        </motion.h2>
        <motion.button
          className="bg-white text-[#7A6F5C] px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/schedule")}
          whileTap={{ scale: 0.95 }}
        >
          Book Your Appointment
        </motion.button>
      </section>
    </div>
  );
};

export default ContactLensFittingsPage;
