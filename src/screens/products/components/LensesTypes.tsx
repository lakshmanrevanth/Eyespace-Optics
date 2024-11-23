import React from 'react';

interface LensType {
  title: string;
  icon: 'single' | 'progressive' | 'bifocal';
  description: string;
}

const lensTypes: LensType[] = [
  {
    title: 'Single Vision',
    icon: 'single',
    description:
      'These lenses are designed for individuals with myopia or hypermetropia. They serve a single prescription, helping users see both distant and near objects clearly.',
  },
  {
    title: 'Progressive',
    icon: 'progressive',
    description:
      'These lenses solve multifocal limitations by integrating different focal points in a single lens. They allow users to see distance, intermediate, and near objects clearly without needing multiple lenses.',
  },
  {
    title: 'Bifocal',
    icon: 'bifocal',
    description:
      'These lenses help wearers see two zones clearly with two prescriptions: one for distance and another for reading. Available in different designs, including no-line bifocals.',
  },
];

const IconComponent: React.FC<{ type: LensType['icon'] }> = ({ type }) => {
  return (
    <div className="w-16 h-16 mx-auto mb-4">
      {type === 'single' && (
        <svg viewBox="0 0 24 24" className="w-full h-full text-[#9d8189]">
          <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      )}
      {type === 'progressive' && (
        <svg viewBox="0 0 24 24" className="w-full h-full text-[#9d8189]">
          <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M12 4v2M12 18v2M4 12h2M18 12h2" stroke="currentColor" strokeWidth="2" />
        </svg>
      )}
      {type === 'bifocal' && (
        <svg viewBox="0 0 24 24" className="w-full h-full text-[#9d8189]">
          <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M12 14h6" stroke="currentColor" strokeWidth="2" />
        </svg>
      )}
    </div>
  );
};

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="p-6 bg-white border border-[#9d8189]/30 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      {children}
    </div>
  );
};

export default function LensesTypeComponent() {
  return (
    <div className="w-11/12 max-w-7xl mx-auto py-8 space-y-10">
      {/* Header Section */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-[#9d8189]">
          SPECTACLE AND PRESCRIPTION SUNGLASS LENSES
        </h1>
        <h2 className="text-lg md:text-xl font-medium text-[#9d8189]">
          Types of Prescription Lenses
        </h2>
      </div>

      {/* Lenses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {lensTypes.map((lens, index) => (
          <Card key={index}>
            <IconComponent type={lens.icon} />
            <h3 className="text-lg text-center font-semibold text-[#9d8189] mb-2">{lens.title}</h3>
            <p className="text-sm text-[#9d8189]/90 leading-relaxed">{lens.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
