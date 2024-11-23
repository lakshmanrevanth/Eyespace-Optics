import React from 'react';
import { ShoppingBag, Heart } from 'lucide-react';

interface ProductCardProps {
  image: string;
  name: string;
  brand: string;
  price: number;
  category: string;
}

export default function ProductCard({ image, name, brand, price, category }: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
        />
        <button className="absolute top-2 right-2 p-2 rounded-full bg-white/90 hover:bg-white">
          <Heart className="w-5 h-5" />
        </button>
      </div>
      <div className="mt-4">
        <div className="flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">{name}</h3>
            <p className="mt-1 text-sm text-gray-500">{brand}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">Rs. {price}</p>
        </div>
        <p className="mt-1 text-xs text-gray-500">{category}</p>
        <button className="mt-4 w-full bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 flex items-center justify-center">
          <ShoppingBag className="w-4 h-4 mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}