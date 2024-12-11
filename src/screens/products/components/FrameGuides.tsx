import { useState } from "react";

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
      "Oblong face",
    ],
  },
  {
    frameShape: "Rectangle Glasses",
    suitableFaceTypes: [
      "Short, round face with wide cheekbones and equally wide forehead",
      "Short, oval face narrowing at forehead and jaw with wide cheekbones",
      "Heart shaped face with a wide forehead and narrow jawline",
    ],
  },
  {
    frameShape: "Oval Glasses",
    suitableFaceTypes: ["Short, square face with an angular jawline"],
  },
  {
    frameShape: "Round Glasses",
    suitableFaceTypes: ["Long, square face with an angular jawline"],
  },
  {
    frameShape: "Flat Top Round or Panto Glasses",
    suitableFaceTypes: [
      "Heart shaped face with a wide forehead and narrow jawline",
    ],
  },
  {
    frameShape: "Hexagon Glasses",
    suitableFaceTypes: [
      "Oval face narrowing at forehead and jaw with wide cheekbones",
    ],
  },
  {
    frameShape: "Keymont or Browline Glasses",
    suitableFaceTypes: [
      "Triangle shaped face with a narrow forehead and wide jawline",
      "Diamond face with a narrow-sharp jawline, narrow forehead and wide cheekbones",
    ],
  },
  {
    frameShape: "Pilot Glasses",
    suitableFaceTypes: [
      "Triangle shaped face with a narrow forehead and wide jawline",
    ],
  },
  {
    frameShape: "Butterfly Glasses",
    suitableFaceTypes: [
      "Heart shaped face with a wide forehead and narrow jawline",
    ],
  },
  {
    frameShape: "Pillow Glasses",
    suitableFaceTypes: [
      "Round face with wide cheekbones and equally wide forehead",
    ],
  },
  {
    frameShape: "Cateye Glasses",
    suitableFaceTypes: ["Square face with an angular jawline"],
  },
  {
    frameShape: "Wayfarer Glasses",
    suitableFaceTypes: [
      "Heart shaped face with a wide forehead and narrow jawline",
    ],
  },
];

export default function FrameGuideComponent() {
  const [selectedFrame, setSelectedFrame] = useState<number | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-[#7A6F5C]">
          Shapes of Eyeglasses that We Stock
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Find the perfect frame for your face shape
        </p>
      </div>

      {/* Grid Layout for Frame Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {frameGuides.map((guide, index) => (
          <div
            key={index}
            onClick={() => setSelectedFrame(index)}
            className={`cursor-pointer bg-white border rounded-lg p-6 shadow-md transition-transform transform hover:scale-105 ${
              selectedFrame === index ? "border-[#7A6F5C] shadow-lg" : ""
            }`}
          >
            <h2 className="text-xl font-semibold text-[#7A6F5C]">
              {guide.frameShape}
            </h2>
          </div>
        ))}
      </div>

      {/* Details Panel */}
      {selectedFrame !== null && (
        <div className="mt-10 p-6 bg-white border-t-4 border-[#7A6F5C] rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#7A6F5C]">
            {frameGuides[selectedFrame].frameShape}
          </h2>
          <h3 className="mt-4 text-lg font-semibold text-gray-800">
            Best Suited for:
          </h3>
          <ul className="mt-2 list-disc list-inside text-gray-700 space-y-2">
            {frameGuides[selectedFrame].suitableFaceTypes.map(
              (faceType, index) => (
                <li key={index}>{faceType}</li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
