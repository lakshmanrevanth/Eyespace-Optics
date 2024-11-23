import React from 'react';
import BookingForm from './BookingForm';
import { ArrowLeft } from 'lucide-react';

export default function AppointmentPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <a href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </a>
        
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Book Your Eye Care Appointment</h1>
            <p className="text-gray-600 mt-2">
              Schedule a consultation with our experienced optometrists
            </p>
          </div>
          
          <BookingForm />
        </div>
      </div>
    </div>
  );
}