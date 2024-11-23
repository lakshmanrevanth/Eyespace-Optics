import React from 'react';
import { StepProps } from '../types';
import { format, addDays, setHours, setMinutes } from 'date-fns';

interface Props extends StepProps {
  selected: Date | null;
  onUpdate: (date: Date) => void;
}

const HOURS = [9, 10, 11, 12, 14, 15, 16, 17];

export default function DateTimeSelection({ selected, onUpdate, onNext, onBack }: Props) {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null);

  const dates = Array.from({ length: 7 }, (_, i) => addDays(new Date(), i + 1));

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time: string) => {
    const [hours, minutes] = time.split(':').map(Number);
    const dateTime = setMinutes(setHours(selectedDate!, hours), minutes);
    setSelectedTime(time);
    onUpdate(dateTime);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Select Date</h3>
        <div className="grid grid-cols-3 sm:grid-cols-7 gap-2">
          {dates.map(date => (
            <button
              key={date.toISOString()}
              onClick={() => handleDateSelect(date)}
              className={`
                p-2 text-center rounded-lg border transition-all
                ${selectedDate?.toDateString() === date.toDateString()
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-200'
                }
              `}
            >
              <div className="text-sm font-medium">
                {format(date, 'EEE')}
              </div>
              <div className="text-lg">
                {format(date, 'd')}
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedDate && (
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Select Time</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {HOURS.map(hour => {
              const time = `${hour}:00`;
              return (
                <button
                  key={time}
                  onClick={() => handleTimeSelect(time)}
                  className={`
                    p-2 text-center rounded-lg border transition-all
                    ${selectedTime === time
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-200'
                    }
                  `}
                >
                  {time}
                </button>
              );
            })}
          </div>
        </div>
      )}

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