import React from 'react';

interface ServiceCardProps {
  title: string;
  imageUrl: string;
  alt: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, imageUrl, alt }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-shadow hover:shadow-xl">
      <div className="aspect-[4/5] w-full">
        <img
          src={imageUrl}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
        <div className="absolute bottom-8 left-6 space-y-4">
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
          <button className="bg-white/90 hover:bg-gray-200 text-gray-900 px-8 py-3 rounded-full text-sm font-medium transition-transform transform hover:-translate-y-1 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};
