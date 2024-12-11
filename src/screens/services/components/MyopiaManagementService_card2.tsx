import React from "react";

interface TipProps {
  icon: React.ReactNode;
  title: string;
  highlight: string;
  description: string;
}

const Tip: React.FC<TipProps> = ({ icon, title, highlight, description }) => (
  <div className="flex items-start space-x-4 p-4 bg-[#f8f0f2] rounded-lg hover:bg-[#e8dadb] transition-colors shadow-md">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#9d8189] flex items-center justify-center text-white">
      {icon}
    </div>
    <div className="flex-1">
      <h3 className="text-sm font-semibold text-gray-900 uppercase">{title}</h3>
      <p className="mt-1 text-lg font-bold text-[#7A6F5C]">{highlight}</p>
      <p className="mt-1 text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const MyopiaManagementTips = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 text-center md:text-left">
          Good Behaviour Tips for Myopia Management
        </h1>
        <div className="text-[#7A6F5C] font-bold text-lg">ZEISS</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Tip
          icon={
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z" />
            </svg>
          }
          title="OUTDOOR ACTIVITIES"
          highlight="2 Hours a Day"
          description="Kids who are active outdoors have lower risk of Myopia."
        />
        <Tip
          icon={
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
          }
          title="KEEP DIGITAL DEVICES AT A DISTANCE"
          highlight="30 cm Away"
          description="Hold your digital devices at least 30 cm away."
        />
        <Tip
          icon={
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
            </svg>
          }
          title="SUFFICIENT SLEEP"
          highlight="9 Hours a Day"
          description="Sleep early, sleep well. Give your eyes a break."
        />
        <Tip
          icon={
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636" />
            </svg>
          }
          title="AMPLE LIGHTING"
          highlight="No Dim Light"
          description="Bright lighting for all activities – reading, learning or playing."
        />
        <Tip
          icon={
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          }
          title="HEALTHY BALANCED DIET"
          highlight="Good Balanced Diet"
          description="Proper nutrients help proper development of eyes."
        />
        <Tip
          icon={
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          title="TAKE VISUAL BREAKS"
          highlight="20 - 20 - 20 Rule"
          description="20 sec break | Every 20 min | Look 20 feet away."
        />
        <Tip
          icon={
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          }
          title="REGULAR EYE CHECKS"
          highlight="Every 6 Months*"
          description="Visit your doctor and test your eyes regularly."
        />
        <Tip
          icon={
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3.75V12h7.5" />
            </svg>
          }
          title="GOOD READING POSTURE & HABITS"
          highlight="Sit Upright"
          description="Sit upright when reading and avoid lying down."
        />
      </div>
      <p className="mt-6 text-sm text-gray-500 italic">
        * Or as recommended by your eye care professional.
      </p>
    </div>
  );
};

export default MyopiaManagementTips;
