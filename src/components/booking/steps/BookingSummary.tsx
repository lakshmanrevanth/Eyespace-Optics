import React from 'react';
import { BookingData, StepProps } from '../types';
import { format } from 'date-fns';
import { Calendar, Clock, DollarSign, User, Mail, Phone, MessageSquare } from 'lucide-react';

interface Props extends StepProps {
  data: BookingData;
  onConfirm: () => void;
}

export default function BookingSummary({ data, onConfirm, onBack }: Props) {
  return (
    <div className="space-y-6">
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Booking Summary</h3>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <User className="w-5 h-5 text-gray-500 mt-1 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Name</p>
              <p className="font-medium">
                {data.personalDetails.firstName} {data.personalDetails.lastName}
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <Mail className="w-5 h-5 text-gray-500 mt-1 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="font-medium">{data.personalDetails.email}</p>
            </div>
          </div>

          <div className="flex items-start">
            <Phone className="w-5 h-5 text-gray-500 mt-1 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Phone</p>
              <p className="font-medium">{data.personalDetails.phone}</p>
            </div>
          </div>

          {data.service && (
            <div className="flex items-start">
              <Clock className="w-5 h-5 text-gray-500 mt-1 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Service</p>
                <p className="font-medium">{data.service.name}</p>
                <p className="text-sm text-gray-500">{data.service.duration}</p>
              </div>
            </div>
          )}

          {data.dateTime && (
            <div className="flex items-start">
              <Calendar className="w-5 h-5 text-gray-500 mt-1 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Appointment Time</p>
                <p className="font-medium">
                  {format(data.dateTime, 'EEEE, MMMM d, yyyy')}
                </p>
                <p className="text-sm text-gray-500">
                  {format(data.dateTime, 'h:mm a')}
                </p>
              </div>
            </div>
          )}

          {data.service && (
            <div className="flex items-start">
              <DollarSign className="w-5 h-5 text-gray-500 mt-1 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Price</p>
                <p className="font-medium">Rs. {data.service.price}</p>
              </div>
            </div>
          )}

          {data.message && (
            <div className="flex items-start">
              <MessageSquare className="w-5 h-5 text-gray-500 mt-1 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Additional Notes</p>
                <p className="font-medium">{data.message}</p>
              </div>
            </div>
          )}
        </div>
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
          onClick={onConfirm}
          className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}