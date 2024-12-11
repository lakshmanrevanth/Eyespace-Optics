"use client";

import React from "react";
import { Facebook, Instagram, Twitter, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0A2647] to-[#144272] text-[#B0C4DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-[#FFD700] text-xl font-bold">
              EyeSpace Optics
            </h3>
            <p className="text-sm leading-relaxed">
              Premium eyewear and professional eye care services for the modern
              lifestyle.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-[#FFD700] transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="hover:text-[#FFD700] transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="hover:text-[#FFD700] transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[#FFD700] font-semibold mb-4 text-lg">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Products", "Services", "About Us", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-[#FFD700] transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[#FFD700]" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#FFD700] font-semibold mb-4 text-lg">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                "Eye Examination",
                "Contact Lens Fitting",
                "Frame Styling",
                "Repairs & Adjustments",
              ].map((service) => (
                <li key={service} className="flex items-center">
                  <span className="w-2 h-2 bg-[#2C74B3] rounded-full mr-2"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center">
            <img
              src="/assets/images/main/logo-.ico"
              alt="logo"
              className="w-16 h-16 mb-2"
            />
            <p className="text-sm text-center text-[#FFD700]">
              Your vision, our passion
            </p>
          </div>
        </div>

        <div className="border-t border-[#205295] mt-8 pt-8 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} EyeSpace Optics. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
