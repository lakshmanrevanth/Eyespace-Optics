interface LensType {
  name: string;
  singleVision: string[];
  progressive: string[];
  bifocal: string[];
}

const lensTypes: LensType[] = [
  {
    name: "Carl Zeiss",
    singleVision: [
      "Spherical",
      "Aspherical",
      "Blue Capture",
      "EnergizeMe",
      "Superb",
      "Individual",
      "Photofusion",
      "Fog Free",
      "Antivirus",
    ],
    progressive: [
      "Office",
      "EnergizeMe",
      "Precision Portfolio",
      "Individual 2",
      "Photofusion",
      "Blue Capture",
      "Fog Free",
      "AntiVirus",
    ],
    bifocal: ["Clear", "Photofusion", "Fog Free"],
  },
  {
    name: "Essilor",
    singleVision: [
      "Spherical",
      "Aspherical",
      "Blue Capture",
      "Transitions",
      "Polarised",
      "Essilor Essentials",
      "Fog Free",
    ],
    progressive: [
      "Varilux",
      "EssiPAL",
      "Blue Capture",
      "Polarised",
      "Transitions",
      "Fog Free",
    ],
    bifocal: ["Bifocal K", "Bifocal D", "Sunsation", "Transitions", "Fog Free"],
  },
  {
    name: "Rodenstock",
    singleVision: ["Single Vision", "ColorMatic"],
    progressive: ["Progressive SI2", "PureLife Free2", "MyView2", "ColorMatic"],
    bifocal: ["Smart Bifocal", "ColorMatic"],
  },
  {
    name: "Nikon",
    singleVision: [
      "Aspherical",
      "Double Aspheric",
      "Transition",
      "Lite SV",
      "SEEMAX Infinite",
      "Polarised",
      "Transitions",
    ],
    progressive: [
      "I Digital",
      "E-Life Series",
      "Presio Series",
      "SEEMAX Series",
      "Transitions",
      "Polarised",
    ],
    bifocal: ["Bifocal K", "Bifocal D", "Transitions"],
  },
  {
    name: "Nova",
    singleVision: [
      "Spherical",
      "Aspherical",
      "Fino Series",
      "THINKMAX Series",
      "Plus 3.0",
      "Transitions",
      "Speciality Series",
      "Blue Capture",
    ],
    progressive: [
      "Platinum Series",
      "Lifestyle",
      "Active Series",
      "Speciality Series",
      "Blue Capture",
    ],
    bifocal: ["No Line", "Transitions"],
  },
  {
    name: "Vision Rx",
    singleVision: ["Single Vision", "Fotolens", "Younger Optics"],
    progressive: ["Regular Progressives", "Visio PAL"],
    bifocal: ["Bifocal K", "Bifocal D", "Transitions", "Sunlite & Fotolens"],
  },
];

export default function AdditionalBrandsTypeComponent() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Header Row */}
        <div className="bg-[#C3B29E] text-white p-4 font-medium text-center">
          Types
        </div>
        <div className="bg-[#C3B29E] text-white p-4 font-medium text-center">
          Single Vision
        </div>
        <div className="bg-[#C3B29E] text-white p-4 font-medium text-center">
          Progressive
        </div>
        <div className="bg-[#C3B29E] text-white p-4 font-medium text-center">
          Bifocal
        </div>

        {/* Data Rows */}
        {lensTypes.map((lens, index) => (
          <>
            <div
              key={`name-${index}`}
              className="text-[#7A6F5C] font-medium p-4 border-b"
            >
              {lens.name}
            </div>
            <div key={`single-${index}`} className="p-4 border-b">
              <ul className="space-y-2">
                {lens.singleVision.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-[#7A6F5C]"
                  >
                    <span className="text-xs">★</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div key={`progressive-${index}`} className="p-4 border-b">
              <ul className="space-y-2">
                {lens.progressive.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-[#7A6F5C]"
                  >
                    <span className="text-xs">★</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div key={`bifocal-${index}`} className="p-4 border-b">
              <ul className="space-y-2">
                {lens.bifocal.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-[#7A6F5C]"
                  >
                    <span className="text-xs">★</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
