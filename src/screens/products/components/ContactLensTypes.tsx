import React from 'react';

interface LensType {
  title: string;
  icon: "single" | "progressive";
  description: string;
}

const lensTypes: LensType[] = [
  {
    title: "Single Vision",
    icon: "single",
    description: "These lenses were designed for individuals who either have myopia (near-sightedness) or hypermetropia (long-sightedness). It is designed to serve a single prescription and will assist the user in seeing both distance and near objects. These lenses are available for both spherical and astigmatic powers."
  },
  {
    title: "Multifocal",
    icon: "progressive",
    description: "These lenses are designed to solve problems for people who have multifocal limitations. The inability to see both distance and near objects without using 2 different powers for each. Multifocal lenses have different focal points in a single lens to help the wearer see distance and near clearly. Multifocal lenses have certain limitations in contact lenses. It is available only for certain powers."
  },
]

const IconComponent: React.FC<{ type: LensType["icon"] }> = ({ type }) => {
  return (
    <div className="w-16 h-16 mx-auto mb-6">
      {type === "single" && (
        <svg viewBox="0 0 24 24" className="w-full h-full text-[#9d8189]">
          <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )}
      {type === "progressive" && (
        <svg viewBox="0 0 24 24" className="w-full h-full text-[#9d8189]">
          <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 4v2M12 18v2M4 12h2M18 12h2" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )}
    </div>
  );
};

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="p-6 border border-[#9d8189]/20 rounded-lg shadow-sm flex flex-col items-center text-center">
      {children}
    </div>
  );
};

export default function ContactLensTypeComponent() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-2xl md:text-3xl font-medium text-[#9d8189]">
          SPECTACLE AND PRESCRIPTION SUNGLASS LENSES
        </h1>
        <h2 className="text-xl md:text-2xl text-[#9d8189]">
          Types of Prescription Lenses
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {lensTypes.map((lens, index) => (
          <Card key={index}>
            <IconComponent type={lens.icon} />
            <h3 className="text-xl font-medium text-[#9d8189] mb-4">
              {lens.title}
            </h3>
            <p className="text-[#9d8189] text-sm leading-relaxed">
              {lens.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
