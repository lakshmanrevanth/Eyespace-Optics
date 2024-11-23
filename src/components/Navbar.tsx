import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  ShoppingBag,
  Menu,
  X,
  Phone,
  ChevronDown,
  Plus,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // Track open dropdown for desktop
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<
    string | null
  >(null); // Track open dropdown for mobile
  const productsDropdownRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  const navigate = useNavigate();

  let closeDropdownTimeout: number | null = null;

  const handleBookAppointment = () => {
    navigate("/schedule");
  };

  const handleMouseEnter = (dropdown: string) => {
    if (closeDropdownTimeout) clearTimeout(closeDropdownTimeout); // Clear any existing timeout
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    closeDropdownTimeout = setTimeout(() => {
      setOpenDropdown(null); // Close dropdown after delay
    }, 300); // Adjust delay as needed
  };

  const toggleMobileDropdown = (dropdown: string) => {
    // If the clicked dropdown is already open, close it; otherwise, open it
    setActiveMobileDropdown((prevState) =>
      prevState === dropdown ? null : dropdown
    );
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold text-gray-900 hover:text-[#9d8189] transition-colors"
            >
              LOGO
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {/* Products with dropdown */}
            <div
              className="relative"
              ref={productsDropdownRef}
              onMouseEnter={() => handleMouseEnter("products")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-gray-700 hover:text-[#9d8189] flex items-center focus:outline-none transition-colors">
                Products <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {openDropdown === "products" && (
                <div className="absolute top-full mt-2 w-48 bg-white border border-[#9d8189] rounded-md shadow-lg z-10">
                  <Link
                    to="/products/framesandsunglasses"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#9d8189] hover:text-white transition-all"
                  >
                    Frames And Sunglasses
                  </Link>
                  <Link
                    to="/products/opticallens"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#9d8189] hover:text-white transition-all"
                  >
                    Optical Lens
                  </Link>
                  <Link
                    to="/products/ai-progressive-lens"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#9d8189] hover:text-white transition-all"
                  >
                    Ai Progressive Lens
                  </Link>
                  <Link
                    to="/products/contactlens"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#9d8189] hover:text-white transition-all"
                  >
                    Special Contact Lens
                  </Link>
                  <Link
                    to="/products/luxury-brands"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#9d8189] hover:text-white transition-all"
                  >
                    Luxury Brands
                  </Link>
                  <Link
                    to="/products/clip-ons"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#9d8189] hover:text-white transition-all"
                  >
                    Clip Ons
                  </Link>
                  <Link
                    to="/products/swimming-goggles"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#9d8189] hover:text-white transition-all"
                  >
                    Swimming Goggles
                  </Link>
                </div>
              )}
            </div>

            {/* Services with dropdown */}
            <div
              className="relative"
              ref={servicesDropdownRef}
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/services/services"
                className="text-gray-700 hover:text-[#9d8189] flex items-center focus:outline-none transition-colors"
              >
                Services <ChevronDown className="w-4 h-4 ml-1" />
              </Link>
              {openDropdown === "services" && (
                <div className="absolute top-full mt-2 w-48 bg-white border border-[#9d8189] rounded-md shadow-lg z-10">
                  <Link
                    to="/services/myopia-management-service"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#9d8189] hover:text-white transition-all"
                  >
                    Myopia Management Service
                  </Link>
                  <Link
                    to="/services/shop-in-store"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#9d8189] hover:text-white transition-all"
                  >
                    Shop In Store
                  </Link>
                  <Link
                    to="/services/eye-wearing-&-testing-consultation"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#9d8189] hover:text-white transition-all"
                  >
                    Eye Testing & EyeWear Consultation
                  </Link>
                  <Link
                    to="/services/contact-lenses-fittings"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#9d8189] hover:text-white transition-all"
                  >
                    Contact Lenses Fittings
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/services/shop-in-store"
              className="text-gray-700 hover:text-[#9d8189] transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/blog/blog-page"
              className="text-gray-700 hover:text-[#9d8189] transition-colors"
            >
              Blogs
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleBookAppointment}
              className="bg-[#9d8189] text-white px-4 py-2 rounded-md hover:bg-[#9d8189]/80 transition-colors"
            >
              Book Appointment
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700 hover:text-[#9d8189]" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 hover:text-[#9d8189]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="relative">
              <button
                onClick={() => toggleMobileDropdown("products")}
                className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:bg-[#9d8189] hover:text-white transition-all"
              >
                Products
                <Plus className="w-5 h-5" />
              </button>
              {activeMobileDropdown === "products" && (
                <div className="mt-2 w-full bg-white border border-[#9d8189] rounded-md shadow-lg z-10">
                  <Link
                    to="/products/framesandsunglasses"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#9d8189] hover:text-white transition-all"
                  >
                    Frames And Sunglasses
                  </Link>
                  <Link
                    to="/products/opticallens"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#9d8189] hover:text-white transition-all"
                  >
                    Optical Lens
                  </Link>
                  <Link
                    to="/products/ai-progressive-lens"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#9d8189] hover:text-white transition-all"
                  >
                    Ai Progressive Lens
                  </Link>
                  <Link
                    to="/products/contactlens"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#9d8189] hover:text-white transition-all"
                  >
                    Special Contact Lens
                  </Link>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleMobileDropdown("services")}
                className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:bg-[#9d8189] hover:text-white transition-all"
              >
                Services
                <Plus className="w-5 h-5" />
              </button>
              {activeMobileDropdown === "services" && (
                <div className="mt-2 w-full bg-white border border-[#9d8189] rounded-md shadow-lg z-10">
                  <Link
                    to="/services/myopia-management-service"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#9d8189] hover:text-white transition-all"
                  >
                    Myopia Management Service
                  </Link>
                  <Link
                    to="/services/shop-in-store"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#9d8189] hover:text-white transition-all"
                  >
                    Shop In Store
                  </Link>
                  <Link
                    to="/services/service3"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#9d8189] hover:text-white transition-all"
                  >
                    Service 3
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
