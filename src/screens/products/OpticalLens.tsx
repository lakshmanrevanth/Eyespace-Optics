import AdditionalBrandsTypeComponent from "./components/AdditionalBrandsTypes";
import BrandsTable from "./components/BrandsTypes";
import EyeOpticalInfoHero from "./components/EyeOpticalInfoHero";
import LensesTypeComponent from "./components/LensesTypes";
import MaterialsRecommdendTable from "./components/material";
import TypesOfLensesTable from "./components/TypesOfLensesTable";

export default function EyeOpticalInfo() {
  return (
    <div className="min-h-screen text-[#4a4a4a] w-[95%] mx-auto scroll-smooth bg-[#F7F3EF]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 text-white">
        <EyeOpticalInfoHero />
      </section>

      {/* Lenses Types Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#9D8189]">
            Types of Lenses
          </h2>
        </div>
        <LensesTypeComponent />
      </section>

      {/* Types of Lenses Table Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-12 bg-[#F7F3EF]">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#9D8189]">
            Lenses Overview
          </h2>
        </div>
        <div className="overflow-x-auto">
          <TypesOfLensesTable />
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#9D8189] mb-4">
            Brands that We Dispense
          </h2>
          <p className="text-lg text-[#4A4A4A] leading-relaxed">
            We retail several brands like Zeiss, Hoya, Nikon,{" "}
            <span className="font-medium">Essilor</span>, Nova, and Rodenstock in prescription lenses for both clear eyeglasses, photochromatic lenses, and sunglasses.
          </p>
          <p className="text-lg italic text-[#4A4A4A]">
            To know which lens is best suited for your needs, please consult our team at the store.
          </p>
        </div>
        <div className="overflow-x-auto">
          <BrandsTable />
        </div>
      </section>

      {/* Lens Types Table Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-12 bg-[#F7F3EF]">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#9D8189]">
            Additional Lens Types
          </h2>
        </div>
        <div className="overflow-x-auto">
          <AdditionalBrandsTypeComponent />
        </div>
      </section>

      {/* Materials Recommendation Table Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#9D8189] mb-4">
            Materials that We Recommend
          </h2>
          <p className="text-lg text-[#4A4A4A] leading-relaxed">
            The materials used in making prescription eyeglasses vary based on the power and its purpose. For example, prescription lenses for sunglasses are available only in certain types of materials while clear and photochromic lenses will be available in almost all materials.
          </p>
          <p className="text-lg italic text-[#4A4A4A]">
            To know which lens is best suited for your needs, please consult our team at the store.
          </p>
        </div>
        <div className="overflow-x-auto">
          <MaterialsRecommdendTable />
        </div>
      </section>
    </div>
  );
}
