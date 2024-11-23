import React, { useState } from 'react';
import PersonalDetails from './steps/PersonalDetails';
import ServiceSelection from './steps/ServiceSelection';
import DateTimeSelection from './steps/DateTimeSelection';
import AdditionalInfo from './steps/AdditionalInfo';
import BookingSummary from './steps/BookingSummary';
import StepIndicator from './StepIndicator';
import { BookingData } from './types';

const STEPS = ['Personal Details', 'Select Service', 'Date & Time', 'Additional Info', 'Review'];

export default function BookingForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [bookingData, setBookingData] = useState<BookingData>({
    personalDetails: { firstName: '', lastName: '', email: '', phone: '' },
    service: null,
    dateTime: null,
    message: '',
  });

  const updateBookingData = (data: Partial<BookingData>) => {
    setBookingData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, STEPS.length - 1));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <PersonalDetails
            data={bookingData.personalDetails}
            onUpdate={data => updateBookingData({ personalDetails: data })}
            onNext={nextStep}
          />
        );
      case 1:
        return (
          <ServiceSelection
            selected={bookingData.service}
            onUpdate={service => updateBookingData({ service })}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 2:
        return (
          <DateTimeSelection
            selected={bookingData.dateTime}
            onUpdate={dateTime => updateBookingData({ dateTime })}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 3:
        return (
          <AdditionalInfo
            message={bookingData.message}
            onUpdate={message => updateBookingData({ message })}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 4:
        return (
          <BookingSummary
            data={bookingData}
            onConfirm={() => console.log('Booking confirmed:', bookingData)}
            onBack={prevStep}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <StepIndicator steps={STEPS} currentStep={currentStep} />
      <div className="mt-8">{renderStep()}</div>
    </div>
  );
}