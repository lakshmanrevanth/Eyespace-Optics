export interface PersonalDetailsData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
}

export interface BookingData {
  personalDetails: PersonalDetailsData;
  service: Service | null;
  dateTime: Date | null;
  message: string;
}

export interface StepProps {
  onNext: () => void;
  onBack?: () => void;
}