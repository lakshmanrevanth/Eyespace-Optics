import FrameGuideComponent from "./components/FrameGuides";
import FramesAndSunglassesInfoHero from "./components/FramesAndSunglassesInfoHero";
import FrameTypesComponent from "./components/FramesTypes";

export default function FramesAndSunglassesInfo() {
  return (
    <div className="min-h-screen bg-[#f7f3ef] text-[#4a4a4a] w-[95%] mx-auto scroll-smooth">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden px-4 md:px-8 lg:px-12">
        <FramesAndSunglassesInfoHero />
      </section>

      {/* Frame Types Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#967c5b] mb-8">
            Explore Our Frame Types
          </h2>
          <FrameTypesComponent />
        </div>
      </section>

      {/* Frame Guide Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#7A6F5C] mb-8">
            Frame Selection Guide
          </h2>
          <FrameGuideComponent />
        </div>
      </section>
    </div>
  );
}
