import FrameGuideComponent from "../products/components/FrameGuides";
import MyopiaManagementTips from "./components/MyopiaManagementService_card2";
import MyopiaManagementServiceHero from "./components/MyopiaManagementServiceHero";
import Myopia_Card1_Component from "./components/MyopiaManagementService_card1";
import MyopiaManagementService_card3 from "./components/MyopiaManagementService_card3";

export default function MyopiaManagementServiceInfo() {
  return (
    <div className="min-h-screen bg-[#f7f3ef] text-[#4a4a4a] w-[95%] mx-auto scroll-smooth">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-4 md:px-8 lg:px-12">
        <MyopiaManagementServiceHero />
      </section>

      {/* Frame Types Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Myopia_Card1_Component />
        </div>
      </section>
<section className="py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <MyopiaManagementService_card3 />
        </div>
      </section>
      {/* Frame Guide Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <MyopiaManagementTips />
        </div>
      </section>
    </div>
  );
}
