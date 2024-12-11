import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Eye, Glasses, Contact2, Wrench, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Eye,
    title: "Comprehensive Eye Testing",
    description: "State-of-the-art equipment for thorough vision examination",
  },
  {
    icon: Glasses,
    title: "Professional Consultation",
    description: "Expert advice on frame selection and lens options",
  },
  {
    icon: Contact2,
    title: "Contact Lens Fitting",
    description: "Specialized fitting services for all types of contact lenses",
  },
  {
    icon: Wrench,
    title: "Repairs & Maintenance",
    description: "Professional adjustment, cleaning, and repair services",
  },
];

export default function ServicesSection() {
  const navigate = useNavigate(); // Initialize navigate function

  const handleScheduleClick = () => {
    navigate("/schedule"); // Navigate to /schedule
  };

  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#7A6F5C] mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience comprehensive eye care services delivered by our team of
            experienced professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
            >
              <service.icon className="w-12 h-12 text-[#7A6F5C] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="text-[#7A6F5C] hover:text-[#6B5B4A] font-medium flex items-center">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
