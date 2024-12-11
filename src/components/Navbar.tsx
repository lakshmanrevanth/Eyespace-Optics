import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<
    string | null
  >(null);
  const productsDropdownRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  const navigate = useNavigate();

  let closeDropdownTimeout: number | null = null;

  const handleBookAppointment = () => {
    navigate("/schedule");
  };

  const handleMouseEnter = (dropdown: string) => {
    if (closeDropdownTimeout) clearTimeout(closeDropdownTimeout);
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    closeDropdownTimeout = window.setTimeout(() => {
      setOpenDropdown(null);
    }, 300) as unknown as number;
  };

  const toggleMobileDropdown = (dropdown: string) => {
    setActiveMobileDropdown((prevState) =>
      prevState === dropdown ? null : dropdown
    );
  };

  const handleMenuItemClick = (path: string) => {
    setIsOpen(false);
    setActiveMobileDropdown(null);
    navigate(path);
  };

  return (
    <nav
      style={{ boxShadow: "0 2px 4px 0 grey" }}
      className="fixed w-full bg-[#F5F5F5]/90 backdrop-blur-sm z-50 border-b border-[#B8B2A2]  "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center text-2xl font-bold text-[#7A6F5C] hover:text-[#5C5043] transition-colors"
            >
              <span>Eyespace Optics</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Products */}
            <div
              className="relative"
              ref={productsDropdownRef}
              onMouseEnter={() => handleMouseEnter("products")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-[#7A6F5C] hover:text-[#5C5043] flex items-center focus:outline-none transition-colors">
                Products <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {openDropdown === "products" && (
                <div className="absolute top-full mt-2 w-48 bg-[#F5F5F5] border border-[#B8B2A2] rounded-md shadow-lg z-10">
                  {[
                    ["Frames And Sunglasses", "/products/framesandsunglasses"],
                    ["Optical Lens", "/products/opticallens"],
                    ["AI Progressive Lens", "/products/ai-progressive-lens"],
                    ["Special Contact Lens", "/products/contactlens"],
                    ["Luxury Brands", "/products/luxury-brands"],
                    ["Swimming Goggles", "/products/swimming-goggles"],
                  ].map(([label, path]) => (
                    <button
                      key={label}
                      onClick={() => handleMenuItemClick(path)}
                      className="block w-full text-left px-4 py-2 text-[#7A6F5C] hover:bg-[#5C5043] hover:text-[#FFFFFF] transition-all"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Services */}
            <div
              className="relative"
              ref={servicesDropdownRef}
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-[#7A6F5C] hover:text-[#5C5043] flex items-center focus:outline-none transition-colors">
                Services <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {openDropdown === "services" && (
                <div className="absolute top-full mt-2 w-48 bg-[#F5F5F5] border border-[#B8B2A2] rounded-md shadow-lg z-10">
                  {[
                    [
                      "Myopia Management",
                      "/services/myopia-management-service",
                    ],
                    ["Shop In Store", "/services/shop-in-store"],
                    [
                      "Eye Testing & Consultation",
                      "/services/eye-wearing-&-testing-consultation",
                    ],
                    [
                      "Contact Lens Fitting",
                      "/services/contact-lenses-fittings",
                    ],
                  ].map(([label, path]) => (
                    <button
                      key={label}
                      onClick={() => handleMenuItemClick(path)}
                      className="block w-full text-left px-4 py-2 text-[#7A6F5C] hover:bg-[#5C5043] hover:text-[#FFFFFF] transition-all"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/services/shop-in-store"
              className="text-[#7A6F5C] hover:text-[#5C5043] transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/blog/blog-pages"
              className="text-[#7A6F5C] hover:text-[#5C5043] transition-colors"
            >
              Blogs
            </Link>
          </div>

          {/* Call-to-Action Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleBookAppointment}
              className="bg-[#7A6F5C] text-[#FFFFFF] px-6 py-3 rounded-md hover:bg-[#5C5043] transition-colors"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? (
                <X className="w-6 h-6 text-[#7A6F5C] hover:text-[#5C5043]" />
              ) : (
                <Menu className="w-6 h-6 text-[#7A6F5C] hover:text-[#5C5043]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#F5F5F5]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Products and Services Dropdown */}
            {[
              ["Products", "products"],
              ["Services", "services"],
            ].map(([label, dropdown]) => (
              <div key={label} className="relative">
                <button
                  onClick={() => toggleMobileDropdown(dropdown)}
                  className="flex items-center justify-between w-full px-3 py-2 text-[#A59D84] hover:bg-[#C1BAA1] hover:text-[#ECEBDE] transition-all"
                >
                  {label}
                  <ChevronDown className="w-5 h-5" />
                </button>
                {activeMobileDropdown === dropdown && (
                  <div className="mt-2 w-full bg-[#ECEBDE] border border-[#A59D84] rounded-md shadow-lg z-10">
                    {(dropdown === "products"
                      ? [
                          [
                            "Frames And Sunglasses",
                            "/products/framesandsunglasses",
                          ],
                          ["Optical Lens", "/products/opticallens"],
                          [
                            "AI Progressive Lens",
                            "/products/ai-progressive-lens",
                          ],
                          ["Special Contact Lens", "/products/contactlens"],
                          ["Luxury Brands", "/products/luxury-brands"],
                          ["Swimming Goggles", "/products/swimming-goggles"],
                        ]
                      : [
                          [
                            "Myopia Management",
                            "/services/myopia-management-service",
                          ],
                          ["Shop In Store", "/services/shop-in-store"],
                          [
                            "Eye Testing & Consultation",
                            "/services/eye-wearing-&-testing-consultation",
                          ],
                          [
                            "Contact Lens Fitting",
                            "/services/contact-lenses-fittings",
                          ],
                        ]
                    ).map(([linkLabel, path]) => (
                      <button
                        key={linkLabel}
                        onClick={() => handleMenuItemClick(path)}
                        className="block w-full text-left px-4 py-2 text-[#A59D84] hover:bg-[#C1BAA1] hover:text-[#ECEBDE] transition-all"
                      >
                        {linkLabel}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* Contact Button */}
            <button
              onClick={() => handleMenuItemClick("/services/shop-in-store")}
              className="w-full text-left px-4 py-2 text-[#A59D84] hover:bg-[#C1BAA1] hover:text-[#ECEBDE] transition-all"
            >
              Contact
            </button>
            {/* Blogs Button */}
            <button
              onClick={() => handleMenuItemClick("/blog/blog-page")}
              className="w-full text-left px-4 py-2 text-[#A59D84] hover:bg-[#C1BAA1] hover:text-[#ECEBDE] transition-all"
            >
              Blogs
            </button>
            {/* Book Appointment Button */}
            <button
              onClick={handleBookAppointment}
              className="w-full text-left px-4 py-2 text-[#ECEBDE] bg-[#A59D84] rounded-md hover:bg-[#C1BAA1] transition-all"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
