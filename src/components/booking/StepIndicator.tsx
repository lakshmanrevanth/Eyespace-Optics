import React from 'react';
import { Check } from 'lucide-react';

interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
}

export default function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <div className="hidden sm:block">
      <div className="relative">
        <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200" />
        <ul className="relative flex justify-between">
          {steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isCurrent = index === currentStep;
            
            return (
              <li key={step} className="flex flex-col items-center">
                <div
                  className={`
                    w-8 h-8 rounded-full flex items-center justify-center
                    ${isCompleted ? 'bg-blue-600' : isCurrent ? 'bg-blue-600' : 'bg-gray-200'}
                    ${index <= currentStep ? 'text-white' : 'text-gray-500'}
                  `}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <span className="mt-2 text-sm text-gray-600">{step}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}