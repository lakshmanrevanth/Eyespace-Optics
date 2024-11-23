import React from 'react';
import { StepProps } from '../types';

interface Props extends StepProps {
  message: string;
  onUpdate: (message: string) => void;
}

export default function AdditionalInfo({ message, onUpdate, onNext, onBack }: Props) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Additional Requirements or Notes
        </label>
        <textarea
          value={message}
          onChange={e => onUpdate(e.target.value)}
          rows={4}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Please let us know if you have any specific requirements or medical conditions we should be aware of..."
        />
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
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          Review Booking
        </button>
      </div>
    </div>
  );
}