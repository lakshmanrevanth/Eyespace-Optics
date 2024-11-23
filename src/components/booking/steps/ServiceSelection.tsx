import React from 'react';
import { Service, StepProps } from '../types';
import { Clock, DollarSign } from 'lucide-react';

const SERVICES: Service[] = [
  {
    id: 'eye-exam',
    name: 'Comprehensive Eye Examination',
    description: 'Complete vision and eye health assessment',
    duration: '45 mins',
    price: 120
  },
  {
    id: 'contact-fitting',
    name: 'Contact Lens Fitting',
    description: 'Professional fitting and consultation for contact lenses',
    duration: '30 mins',
    price: 90
  },
  {
    id: 'frame-styling',
    name: 'Frame Styling Session',
    description: 'Personal consultation for frame selection',
    duration: '30 mins',
    price: 60
  },
  {
    id: 'follow-up',
    name: 'Follow-up Consultation',
    description: 'Review and adjust your prescription or fitting',
    duration: '20 mins',
    price: 45
  }
];

interface Props extends StepProps {
  selected: Service | null;
  onUpdate: (service: Service) => void;
}

export default function ServiceSelection({ selected, onUpdate, onNext, onBack }: Props) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4">
        {SERVICES.map(service => (
          <div
            key={service.id}
            className={`
              border rounded-lg p-4 cursor-pointer transition-all
              ${selected?.id === service.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-200'
              }
            `}
            onClick={() => onUpdate(service)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900">{service.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{service.description}</p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.duration}
                  </span>
                  <span className="flex items-center text-sm text-gray-600">
                    
                    Rs. {service.price}
                  </span>
                </div>
              </div>
              <div className={`
                w-5 h-5 rounded-full border-2
                ${selected?.id === service.id
                  ? 'border-blue-500 bg-blue-500'
                  : 'border-gray-300'
                }
              `}>
                {selected?.id === service.id && (
                  <div className="w-full h-full rounded-full bg-white scale-[0.4]" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="text-gray-600 hover:text-gray-900"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!selected}
          className={`
            px-6 py-2 rounded-md
            ${selected
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }
          `}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}