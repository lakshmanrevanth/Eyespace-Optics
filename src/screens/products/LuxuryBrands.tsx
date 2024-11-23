import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

interface Brand {
  name: string;
  logo: string;
  category: string;
}

const brands: Brand[] = [
  { name: 'Ray-Ban', logo: '/placeholder.svg?height=80&width=160', category: 'Sunglasses' },
  { name: 'Oakley', logo: '/placeholder.svg?height=80&width=160', category: 'Sunglasses' },
  { name: 'Gucci', logo: '/placeholder.svg?height=80&width=160', category: 'Luxury' },
  { name: 'Prada', logo: '/placeholder.svg?height=80&width=160', category: 'Luxury' },
  { name: 'Acuvue', logo: '/placeholder.svg?height=80&width=160', category: 'Contact Lenses' },
  { name: 'Bausch + Lomb', logo: '/placeholder.svg?height=80&width=160', category: 'Contact Lenses' },
  { name: 'Zeiss', logo: '/placeholder.svg?height=80&width=160', category: 'Lenses' },
  { name: 'Essilor', logo: '/placeholder.svg?height=80&width=160', category: 'Lenses' },
  { name: 'Transitions', logo: '/placeholder.svg?height=80&width=160', category: 'Lenses' },
  { name: 'Warby Parker', logo: '/placeholder.svg?height=80&width=160', category: 'Eyeglasses' },
  { name: 'Persol', logo: '/placeholder.svg?height=80&width=160', category: 'Sunglasses' },
  { name: 'Tom Ford', logo: '/placeholder.svg?height=80&width=160', category: 'Luxury' },
];

export default function BrandShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => ['All', ...new Set(brands.map((brand) => brand.category))], []);

  const filteredBrands = useMemo(() => {
    return brands.filter(
      (brand) =>
        (selectedCategory === 'All' || brand.category === selectedCategory) &&
        brand.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#9d8189] py-16 px-4 sm:px-6 lg:px-8 text-white relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          <div>
            <h1 className="text-5xl font-bold mb-4">Trusted Eyewear Brands</h1>
            <p className="text-lg mb-6">
              Explore the most reliable and fashionable eyewear brands. We ensure quality and style for every occasion.
            </p>
            <button className="bg-white text-[#9d8189] px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors">
              Shop Now
            </button>
          </div>
          <div className="hidden lg:block">
            <img
              src="/placeholder-hero.svg"
              alt="Eyewear showcase"
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-white via-[#9d8189] to-white"></div>
      </div>

      {/* Main Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Search and Filter */}
          <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Search brands"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9d8189]"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 w-full sm:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-[#9d8189] text-white'
                      : 'bg-white text-[#9d8189] hover:bg-[#9d8189] hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Brand Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {filteredBrands.map((brand) => (
              <motion.div
                key={brand.name}
                className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={brand.logo} alt={`${brand.name} logo`} className="max-w-full h-auto" />
              </motion.div>
            ))}
          </div>

          {filteredBrands.length === 0 && (
            <p className="text-center text-gray-500 mt-8">No brands found. Try adjusting your search or filter.</p>
          )}

          {/* Blog Section */}
          <div className="mt-16 bg-[#f5f2f3] p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-[#9d8189] text-center mb-8">Latest From Our Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((blog, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
                  <h3 className="text-xl font-semibold text-[#9d8189] mb-2">Blog Title {blog}</h3>
                  <p className="text-gray-600 mb-4">
                    Discover insights and tips about eyewear, brands, and more.
                  </p>
                  <button className="text-[#9d8189] font-medium hover:underline">Read More</button>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <p className="text-xl text-gray-700 mb-4">Can't find what you're looking for?</p>
            <button className="bg-[#9d8189] text-white px-6 py-3 rounded-md hover:bg-[#8a717a] transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
