import ContactLensAdditionalBrandsMobilityComponent from './components/ContactLensAdditionalBrandsMobility';
import ContactLensBrandModilityTable from './components/ContactLensBrandsModility';
import ContactLensBrandTable from './components/ContactLensBrandTypes';
import ContactLensMaterialsRecommdendTable from './components/ContactLensMaterailsRecommendations';
import ContactLensTypeComponent from './components/ContactLensTypes';
import ContactLensTypeTable from './components/ContactLensTypeTable';
import Hero from './components/EyeOpticalInfoHero';
import SpecailContactLensInfoHero from './components/SpecailContactLensInfoHero';

export default function SpecialContactLensInfo() {
  return (
    <div className="min-h-screen text-[#4a4a4a] w-[95%] mx-auto bg-[#F7F3EF]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <SpecailContactLensInfoHero />
      </section>

      {/* Contact Lens Types Section */}
      <section className="py-10 bg-white">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#9D8189]">Contact Lens Types</h2>
        </div>
        <ContactLensTypeComponent />
      </section>

      {/* Contact Lens Types Table Section */}
      <section className="py-10 bg-[#F7F3EF]">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#9D8189]">Lens Type Overview</h2>
        </div>
        <ContactLensTypeTable />
      </section>

      {/* Brands Section */}
      <section className="py-10 bg-white">
        <div className="text-center space-y-6 px-4 md:px-0">
          <h2 className="text-3xl md:text-4xl font-medium text-[#9D8189] mb-4 md:mb-8">
            Brands that We Dispense
          </h2>
          <p className="text-lg text-[#4A4A4A] leading-relaxed">
            We retail several brands like Zeiss, Hoya, Nikon, <span className="font-medium">Essilor</span>, Nova, and Rodenstock in prescription lenses for both clear eyeglasses, photochromatic lenses, and sunglasses. Depending on the prescription and the type of correction required, we dispense the following lenses.
          </p>
          <p className="text-lg italic text-[#4A4A4A]">
            To know which lens is best suited for your needs, please consult our team at the store.
          </p>
        </div>
        <ContactLensBrandTable />
      </section>

      {/* Brands Based on Modality Section */}
      <section className="py-10 bg-[#F7F3EF]">
        <div className="text-center space-y-6 px-4 md:px-0">
          <h2 className="text-3xl md:text-4xl font-medium text-[#9D8189] mb-4 md:mb-8">
            Brands Based on Modality
          </h2>
        </div>
        <ContactLensBrandModilityTable />

        
      </section>
      <section className='py-10 bg-[#F7F3EF]'><ContactLensAdditionalBrandsMobilityComponent /></section>

      {/* Materials Recommendation Section */}
      <section className="py-10 bg-white">
        <div className="text-center space-y-6 px-4 md:px-0">
          <h2 className="text-3xl md:text-4xl font-medium text-[#9D8189] mb-4 md:mb-8">
            Materials that We Recommend
          </h2>
          <p className="text-lg text-[#4A4A4A] leading-relaxed">
            The materials used in making prescription eyeglasses vary based on the power and its purpose. For example, prescription lenses for sunglasses are available only in certain types of materials, while clear and photochromic lenses are available in almost all materials. We choose to dispense lenses only from tried and tested companies that spend significantly on research and design, keeping the end wearer in mind. Corrective eyeglasses are important, and compromising on quality can harm your vision, leading to further problems.
          </p>
          <p className="text-lg italic text-[#4A4A4A]">
            To know which lens is best suited for your needs, please consult our team at the store.
          </p>
        </div>
        <ContactLensMaterialsRecommdendTable />
      </section>
    </div>
  );
}
