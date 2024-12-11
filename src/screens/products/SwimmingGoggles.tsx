import React from "react";
import { motion } from "framer-motion";
import { Droplets, Shield, Zap } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { ChevronDown } from "lucide-react";
const faqData = [
  {
    question: "Are the goggles suitable for kids?",
    answer:
      "Yes, we offer a range of goggles specifically designed for kids with adjustable straps and smaller sizes.",
  },
  {
    question: "How do I prevent fogging?",
    answer:
      "Our goggles come with anti-fog coating. Avoid touching the inside of the lenses and rinse them with fresh water after each use.",
  },
  {
    question: "Do these goggles protect against UV rays?",
    answer:
      "Yes, our goggles are equipped with UV protection to shield your eyes from harmful sun rays.",
  },
];
const testimonials = [
  {
    name: "John Doe",
    feedback:
      "These goggles are amazing! The anti-fog coating works perfectly, and they are super comfortable.",
  },
  {
    name: "Jane Smith",
    feedback:
      "I love the hydrodynamic design; it makes swimming so much smoother. Highly recommend!",
  },
];

const SwimmingGogglesShowcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f5f2f3]">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden bg-[#1a3a5a]">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Swimming pool background"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a3a5a]/70 to-[#1a3a5a]/30"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Dive into Crystal Clear Vision
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl mb-8">
              Experience unparalleled clarity with our cutting-edge swimming
              goggles
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white max-w-xs">
              <h3 className="text-xl font-semibold mb-2">
                Anti-Fog Technology
              </h3>
              <p>
                Say goodbye to foggy lenses and enjoy clear vision throughout
                your swim.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white max-w-xs">
              <h3 className="text-xl font-semibold mb-2">UV Protection</h3>
              <p>
                Shield your eyes from harmful UV rays during outdoor swimming
                sessions.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white max-w-xs">
              <h3 className="text-xl font-semibold mb-2">Ergonomic Design</h3>
              <p>
                Enjoy a comfortable fit with our specially designed goggles for
                all face shapes.
              </p>
            </div>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 px-8 py-3 bg-[#f0f0f0] text-[#1a3a5a] rounded-full text-lg font-semibold hover:bg-white transition-colors duration-300"
          >
            Scroll down
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="text-white w-8 h-8" />
          </motion.div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#7A6F5C]">
            Our Premium Goggles
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              <img
                src="/assets/images/products/swimming_goggles.jpg"
                alt="Premium Swimming Goggles"
                className="w-full h-auto rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
                <motion.button
                  className="bg-white text-[#7A6F5C] px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#9d8189] hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Gallery
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold mb-4 text-[#7A6F5C]">
                High-Performance Goggles
              </h3>
              <p className="text-gray-700 text-xl mb-6 leading-relaxed">
                Engineered for both comfort and performance, our goggles offer:
              </p>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start">
                  <ArrowRight className="mr-2 mt-1 text-[#7A6F5C]" />
                  Perfect fit with adjustable straps for all head sizes
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 mt-1 text-[#7A6F5C]" />
                  Anti-fog coating for crystal-clear vision underwater
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 mt-1 text-[#7A6F5C]" />
                  UV protection to shield your eyes during outdoor swims
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 mt-1 text-[#7A6F5C]" />
                  Hypoallergenic silicone for extended comfort
                </li>
              </ul>
              <div className="pt-6">
                <motion.button
                  className="bg-[#7A6F5C] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#a67d89] transition-colors duration-300 inline-flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Details
                  <ArrowRight className="ml-2" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#7A6F5C]">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Droplets className="w-12 h-12 text-[#7A6F5C]" />}
              title="Anti-Fog Technology"
              description="Our goggles feature advanced anti-fog coating, ensuring clear vision throughout your swim."
            />
            <FeatureCard
              icon={<Shield className="w-12 h-12 text-[#7A6F5C]" />}
              title="UV Protection"
              description="Protect your eyes from harmful UV rays with our specially designed lenses."
            />
            <FeatureCard
              icon={<Zap className="w-12 h-12 text-[#7A6F5C]" />}
              title="Hydrodynamic Design"
              description="Engineered for minimal water resistance, helping you swim faster and more efficiently."
            />
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-[#7A6F5C]">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
                <h4 className="mt-4 font-bold text-[#7A6F5C]">
                  - {testimonial.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Chart Section */}
      <section className="py-16 px-4 bg-[#f5f2f3]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#7A6F5C]">
            Compare with Other Brands
          </h2>
          <table className="w-full bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="text-[#7A6F5C]">
                <th className="py-4 px-6 text-left">Feature</th>
                <th className="py-4 px-6">Our Goggles</th>
                <th className="py-4 px-6">Competitor</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4 px-6">Anti-Fog Coating</td>
                <td className="py-4 px-6 text-center">✅</td>
                <td className="py-4 px-6 text-center">❌</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6">UV Protection</td>
                <td className="py-4 px-6 text-center">✅</td>
                <td className="py-4 px-6 text-center">✅</td>
              </tr>
              <tr>
                <td className="py-4 px-6">Hydrodynamic Design</td>
                <td className="py-4 px-6 text-center">✅</td>
                <td className="py-4 px-6 text-center">❌</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#7A6F5C]">
            Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <img
              src="/assets/images/products/goggle__1.jpg"
              alt="Goggle Style 1"
              className="w-full h-40 object-cover rounded-lg shadow-md"
            />
            <img
              src="/assets/images/products/goggle__2.jpg"
              alt="Goggle Style 2"
              className="w-full h-40 object-cover rounded-lg shadow-md"
            />
            <img
              src="/assets/images/products/goggle___3.jpg"
              alt="Goggle Style 3"
              className="w-full h-40 object-cover rounded-lg shadow-md"
            />
            <img
              src="/assets/images/products/goggle_4.avif"
              alt="Goggle Style 4"
              className="w-full h-40 object-cover rounded-lg shadow-md"
            />
            <img
              src="/assets/images/products/goggle__5.jpg"
              alt="Goggle Style 5"
              className="w-full h-40 object-cover rounded-lg shadow-md"
            />
            <img
              src="/assets/images/products/goggle_6.webp"
              alt="Goggle Style 6"
              className="w-full h-40 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 px-4 bg-[#f5f2f3]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#7A6F5C]">
            Insights & Tips
          </h2>
          <div className="space-y-8">
            <BlogCard
              title="Top 5 Tips for Choosing the Right Goggles"
              description="Learn what features to look for in swimming goggles to enhance your performance."
              link="#"
            />
            <BlogCard
              title="How to Prevent Goggles from Fogging"
              description="Practical tips to keep your goggles clear during swims."
              link="#"
            />
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#7A6F5C]">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-semibold text-[#7A6F5C]">
                  {faq.question}
                </h3>
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-[#7A6F5C]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready to Enhance Your Swim?
          </h2>
          <p className="text-xl text-white mb-8">
            Discover our range of premium swimming goggles and take your
            swimming experience to the next level.
          </p>
          <a href="/services/shop-in-store">
            <motion.button
              className="bg-white text-[#7A6F5C] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#f5f2f3] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </a>
        </div>
      </section>
    </div>
  );
};

// Feature Card Component
const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <motion.div
    className="bg-[#f5f2f3] p-6 rounded-lg shadow-md"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-[#7A6F5C] text-center">
      {title}
    </h3>
    <p className="text-gray-600 text-center">{description}</p>
  </motion.div>
);

// Blog Card Component
const BlogCard: React.FC<{
  title: string;
  description: string;
  link: string;
}> = ({ title, description, link }) => (
  <a
    href={link}
    className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
  >
    <h3 className="text-2xl font-bold mb-2 text-[#7A6F5C]">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </a>
);

export default SwimmingGogglesShowcase;
