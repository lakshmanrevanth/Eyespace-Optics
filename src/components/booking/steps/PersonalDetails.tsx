import React from 'react';
import { PersonalDetailsData, StepProps } from '../types';

interface Props extends StepProps {
  data: PersonalDetailsData;
  onUpdate: (data: PersonalDetailsData) => void;
}

export default function PersonalDetails({ data, onUpdate, onNext }: Props) {
  const [errors, setErrors] = React.useState<Partial<PersonalDetailsData>>({});

  const validate = () => {
    const newErrors: Partial<PersonalDetailsData> = {};
    
    if (!data.firstName) newErrors.firstName = 'First name is required';
    if (!data.lastName) newErrors.lastName = 'Last name is required';
    if (!data.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(data.email)) newErrors.email = 'Invalid email format';
    if (!data.phone) newErrors.phone = 'Phone number is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            value={data.firstName}
            onChange={e => onUpdate({ ...data, firstName: e.target.value })}
            className={`
              mt-1 block w-full rounded-md shadow-sm
              ${errors.firstName ? 'border-red-300' : 'border-gray-300'}
              focus:border-blue-500 focus:ring-blue-500
            `}
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            value={data.lastName}
            onChange={e => onUpdate({ ...data, lastName: e.target.value })}
            className={`
              mt-1 block w-full rounded-md shadow-sm
              ${errors.lastName ? 'border-red-300' : 'border-gray-300'}
              focus:border-blue-500 focus:ring-blue-500
            `}
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={data.email}
            onChange={e => onUpdate({ ...data, email: e.target.value })}
            className={`
              mt-1 block w-full rounded-md shadow-sm
              ${errors.email ? 'border-red-300' : 'border-gray-300'}
              focus:border-blue-500 focus:ring-blue-500
            `}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            value={data.phone}
            onChange={e => onUpdate({ ...data, phone: e.target.value })}
            className={`
              mt-1 block w-full rounded-md shadow-sm
              ${errors.phone ? 'border-red-300' : 'border-gray-300'}
              focus:border-blue-500 focus:ring-blue-500
            `}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
          )}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Next Step
        </button>
      </div>
    </form>
  );
}