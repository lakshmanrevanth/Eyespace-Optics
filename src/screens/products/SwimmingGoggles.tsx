import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Shield, Zap } from 'lucide-react';
const faqData = [
  {
    question: 'Are the goggles suitable for kids?',
    answer: 'Yes, we offer a range of goggles specifically designed for kids with adjustable straps and smaller sizes.',
  },
  {
    question: 'How do I prevent fogging?',
    answer: 'Our goggles come with anti-fog coating. Avoid touching the inside of the lenses and rinse them with fresh water after each use.',
  },
  {
    question: 'Do these goggles protect against UV rays?',
    answer: 'Yes, our goggles are equipped with UV protection to shield your eyes from harmful sun rays.',
  },
];
const testimonials = [
  {
    name: 'John Doe',
    feedback: 'These goggles are amazing! The anti-fog coating works perfectly, and they are super comfortable.',
  },
  {
    name: 'Jane Smith',
    feedback: 'I love the hydrodynamic design; it makes swimming so much smoother. Highly recommend!',
  },
];


const SwimmingGogglesShowcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f5f2f3]">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src="/placeholder.svg?height=800&width=1200"
          alt="Swimming pool"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#9d8189]/70 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Dive into Clarity</h1>
            <p className="text-xl md:text-2xl">Experience the best in swimming goggle technology</p>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#9d8189]">Our Goggles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              src="/goggles-product.jpg"
              alt="Premium Swimming Goggles"
              className="w-full rounded-lg shadow-md"
            />
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#9d8189]">High-Performance Goggles</h3>
              <p className="text-gray-700 text-lg mb-4">
                Designed for both comfort and performance, these goggles provide a perfect fit and crystal-clear vision underwater.
              </p>
              <motion.button
                className="bg-[#9d8189] text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-[#a67d89] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Details
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#9d8189]">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Droplets className="w-12 h-12 text-[#9d8189]" />}
              title="Anti-Fog Technology"
              description="Our goggles feature advanced anti-fog coating, ensuring clear vision throughout your swim."
            />
            <FeatureCard
              icon={<Shield className="w-12 h-12 text-[#9d8189]" />}
              title="UV Protection"
              description="Protect your eyes from harmful UV rays with our specially designed lenses."
            />
            <FeatureCard
              icon={<Zap className="w-12 h-12 text-[#9d8189]" />}
              title="Hydrodynamic Design"
              description="Engineered for minimal water resistance, helping you swim faster and more efficiently."
            />
          </div>
        </div>
      </section>
{/* Testimonials Section */}
<section className="py-16 px-4 bg-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-8 text-[#9d8189]">What Our Customers Say</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          className="bg-gray-50 p-6 rounded-lg shadow-md"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
          <h4 className="mt-4 font-bold text-[#9d8189]">- {testimonial.name}</h4>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Comparison Chart Section */}
      <section className="py-16 px-4 bg-[#f5f2f3]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#9d8189]">Compare with Other Brands</h2>
          <table className="w-full bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="bg-[#9d8189] text-white">
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
          <h2 className="text-3xl font-bold text-center mb-12 text-[#9d8189]">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <img src="/goggle1.jpg" alt="Goggle Style 1" className="w-full h-40 object-cover rounded-lg shadow-md" />
            <img src="/goggle2.jpg" alt="Goggle Style 2" className="w-full h-40 object-cover rounded-lg shadow-md" />
            <img src="/goggle3.jpg" alt="Goggle Style 3" className="w-full h-40 object-cover rounded-lg shadow-md" />
            <img src="/goggle4.jpg" alt="Goggle Style 4" className="w-full h-40 object-cover rounded-lg shadow-md" />
            <img src="/goggle5.jpg" alt="Goggle Style 5" className="w-full h-40 object-cover rounded-lg shadow-md" />
            <img src="/goggle6.jpg" alt="Goggle Style 6" className="w-full h-40 object-cover rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 px-4 bg-[#f5f2f3]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#9d8189]">Insights & Tips</h2>
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
    <h2 className="text-3xl font-bold text-center mb-8 text-[#9d8189]">Frequently Asked Questions</h2>
    <div className="space-y-6">
      {faqData.map((faq, index) => (
        <motion.div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-[#9d8189]">{faq.question}</h3>
          <p className="text-gray-600 mt-2">{faq.answer}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-[#9d8189]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Enhance Your Swim?</h2>
          <p className="text-xl text-white mb-8">
            Discover our range of premium swimming goggles and take your swimming experience to the next level.
          </p>
          <motion.button
            className="bg-white text-[#9d8189] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#f5f2f3] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Collection
          </motion.button>
        </div>
      </section>
    </div>
  );
};

// Feature Card Component
const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <motion.div
    className="bg-[#f5f2f3] p-6 rounded-lg shadow-md"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-[#9d8189] text-center">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </motion.div>
);

// Blog Card Component
const BlogCard: React.FC<{ title: string; description: string; link: string }> = ({ title, description, link }) => (
  <a href={link} className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
    <h3 className="text-2xl font-bold mb-2 text-[#9d8189]">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </a>
);

export default SwimmingGogglesShowcase;
