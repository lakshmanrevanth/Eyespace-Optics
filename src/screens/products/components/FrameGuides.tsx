import { useState, useEffect } from "react";

interface FrameGuide {
  frameShape: string;
  suitableFaceTypes: string[];
}

const frameGuides: FrameGuide[] = [
  {
    frameShape: "Square Glasses",
    suitableFaceTypes: [
      "Long, round face with wide cheekbones and equally wide forehead",
      "Long, oval face narrowing at forehead and jaw with wide cheekbones",
      "Oblong face"
    ]
  },
  {
    frameShape: "Rectangle Glasses",
    suitableFaceTypes: [
      "Short, round face with wide cheekbones and equally wide forehead",
      "Short, oval face narrowing at forehead and jaw with wide cheekbones",
      "Heart shaped face with a wide forehead and narrow jawline"
    ]
  },
  {
    frameShape: "Oval Glasses",
    suitableFaceTypes: [
      "Short, square face with an angular jawline"
    ]
  }
];

export default function FrameGuideComponent() {
  // Set default selected frame as the first one
  const [selectedFrame, setSelectedFrame] = useState<number>(0);

  useEffect(() => {
    // Automatically select the first frame when the component mounts
    setSelectedFrame(0);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-[#f9f9f9]">
      {/* Centered Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-[#9d8189]">Shapes of Eyeglasses that We Stock</h1>
      </div>

      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
        {/* Left Column (Tabs for frame shapes) */}
        <div className="w-full lg:w-1/3">
          <div className="space-y-4">
            {frameGuides.map((guide, index) => (
              <div
                key={index}
                onClick={() => setSelectedFrame(index)}
                className={`cursor-pointer p-6 rounded-lg transition-all duration-300 
                  ${selectedFrame === index
                    ? 'bg-[#9d8189] text-white shadow-xl transform scale-105'
                    : 'bg-[#f4e0e1] text-[#9d8189] hover:bg-[#9d8189] hover:text-white hover:scale-105 hover:shadow-md'
                  }`}
              >
                {/* Frame Image and Name */}
                <div className="flex items-center space-x-4">
                  <span className="text-lg font-semibold">{guide.frameShape}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (Content for selected frame) */}
        <div className="w-full lg:w-2/3">
          {frameGuides[selectedFrame] && (
            <div className="space-y-4">
              <div className="bg-[#9d8189] p-5 rounded-lg shadow-xl">
                <h2 className="text-2xl font-semibold text-white">
                  {frameGuides[selectedFrame].frameShape}
                </h2>
              </div>
              <div className="space-y-3 px-5 py-4 bg-[#f4e0e1] rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-[#9d8189]">Best Suited for:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {frameGuides[selectedFrame].suitableFaceTypes.map((faceType, index) => (
                    <li key={index} className="text-[#9d8189] text-sm leading-tight">
                      {faceType}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
