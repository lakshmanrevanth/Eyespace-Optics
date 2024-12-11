import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import BlogSection from "../../components/Blog";
import { useNavigate } from "react-router-dom";

interface Brand {
  name: string;
  logo: string;
  category: string;
}

const brands: Brand[] = [
  {
    name: "Bolle",
    logo: "/assets/images/products/brands/bolle.png",
    category: "Sunglasses",
  },
  {
    name: "boss",
    logo: "/assets/images/products/brands/boss.png",
    category: "Sunglasses",
  },
  {
    name: "buberry",
    logo: "/assets/images/products/brands/buberry.png",
    category: "Luxury",
  },
  {
    name: "bvlgari",
    logo: "/assets/images/products/brands/bvlgari.png",
    category: "Luxury",
  },
  {
    name: "calvinklein",
    logo: "/assets/images/products/brands/calvinklein.png",
    category: "Contact Lenses",
  },
  {
    name: "carrera",
    logo: "/assets/images/products/brands/carrera.png",
    category: "Contact Lenses",
  },
  {
    name: "Zeiss",
    logo: "/assets/images/products/zeiss.png",
    category: "Lenses",
  },
  {
    name: "Essilor",
    logo: "/assets/images/products/varilux.png",
    category: "Lenses",
  },
  {
    name: "charriol",
    logo: "/assets/images/products/brands/charriol.png",
    category: "Lenses",
  },
  {
    name: "coach",
    logo: "/assets/images/products/brands/coach.png",
    category: "Eyeglasses",
  },
  {
    name: "cocoleni",
    logo: "/assets/images/products/brands/cocoleni.png",
    category: "Sunglasses",
  },
  {
    name: "cutlerandgross",
    logo: "/assets/images/products/brands/cutlerandgross.png",
    category: "Luxury",
  },
];

export default function BrandShowcase() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const categories = useMemo(
    () => ["All", ...new Set(brands.map((brand) => brand.category))],
    []
  );

  const filteredBrands = useMemo(() => {
    return brands.filter(
      (brand) =>
        (selectedCategory === "All" || brand.category === selectedCategory) &&
        brand.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#7A6F5C] text-white py-20 px-4 sm:px-6 lg:px-8 text-white relative mt-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-8">
          {/* Left Content */}
          <div className="flex-1 text-center sm:text-left mb-8 sm:mb-0">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Discover Trusted{" "}
              <span className="text-[#f7f3ef]">Eyewear Brands</span>
            </h1>
            <p className="text-lg sm:text-xl mb-8 leading-relaxed">
              Explore the most reliable and fashionable eyewear brands. We bring
              you quality, style, and durability for every occasion, ensuring
              your vision stays sharp and your look stays stunning.
            </p>
            <button className="bg-white text-[#7A6F5C] px-8 py-4 rounded-lg font-medium shadow-md hover:bg-gray-200 hover:scale-105 transition-transform duration-200">
              Shop Now
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative">
            <div className="flex-1 relative">
              <img
                src="/assets/images/products/brands_showcase.png"
                alt="Eyewear showcase"
                className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 sm:w-3/4 md:w-2/3 lg:w-full"
              />
              {/* Decorative Circle */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#f7f3ef] rounded-full blur-lg opacity-20"></div>
            </div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent"></div>
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
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 w-full sm:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? " bg-[#7A6F5C] text-white"
                      : "bg-white text-[#7A6F5C] hover:bg-[#9d8189] hover:text-white"
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
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="max-w-full h-auto"
                />
              </motion.div>
            ))}
          </div>

          {filteredBrands.length === 0 && (
            <p className="text-center text-gray-500 mt-8">
              No brands found. Try adjusting your search or filter.
            </p>
          )}

          {/* Blog Section */}
          <BlogSection />

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <p className="text-xl text-gray-700 mb-4">
              Can't find what you're looking for?
            </p>
            <button
              onClick={() => navigate("/services/shop-in-store")}
              className=" bg-[#7A6F5C] text-white px-6 py-3 rounded-md hover:bg-[#8a717a] transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
