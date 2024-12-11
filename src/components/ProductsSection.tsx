import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  Glasses,
  Eye,
  Star,
  CreditCard,
  Sun,
  Droplet,
  ArrowRight,
  Calendar,
} from "lucide-react"; // Updated imports

const products = [
  {
    icon: Glasses,
    title: "Frames and Sunglasses",
    description:
      "Stylish and durable frames for every face shape and lifestyle.",
  },
  {
    icon: Eye,
    title: "Optical Lens",
    description: "High-quality lenses tailored to your prescription needs.",
  },
  {
    icon: Eye, // Using Eye icon for AL Progressive Lens as a placeholder
    title: "Al Progressive Lens",
    description:
      "Seamless vision correction for near, intermediate, and far distances.",
  },
  {
    icon: Star,
    title: "Special Contact Lens",
    description:
      "Custom lenses for unique needs, including color and comfort options.",
  },
  {
    icon: CreditCard,
    title: "Luxury Brands",
    description:
      "Premium eyewear from top luxury brands that offer style and comfort.",
  },
  {
    icon: Sun, // Using Sun icon for Sunglasses
    title: "Clip Ons",
    description: "Convenient clip-on sunglasses for your prescription eyewear.",
  },
  {
    icon: Droplet, // Using Droplet icon for Swimming Goggles
    title: "Swimming Goggles",
    description:
      "Comfortable and leak-proof swimming goggles for clear underwater vision.",
  },
];

export default function ProductsSection() {
  const navigate = useNavigate(); // Initialize navigate function

  const handleShopNowClick = () => {
    navigate("/shop"); // Navigate to /shop for shopping page
  };

  return (
    <section className="py-16 bg-gray-50" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#7A6F5C] mb-4">
            Our Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore a wide range of optical products designed to suit your every
            need.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-[#7A6F5C] hover:shadow-lg transition-shadow"
            >
              <product.icon className="w-12 h-12 text-[#7A6F5C] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <button className="text-[#7A6F5C] hover:text-[#5C4E3C] font-medium flex items-center">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-[#7A6F5C] rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Schedule an Appointment?
          </h3>
          <p className="text-white mb-6">
            Book your comprehensive eye examination today and take the first
            step towards better vision.
          </p>
          <button
            onClick={handleShopNowClick} // Set onClick handler for navigation
            className="bg-white text-[#7A6F5C] px-8 py-3 rounded-md hover:bg-gray-100 flex items-center justify-center mx-auto"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Schedule Now
          </button>
        </div>
      </div>
    </section>
  );
}
