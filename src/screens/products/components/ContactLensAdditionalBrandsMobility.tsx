import React from "react";

type ContactLensProduct = {
  manufacturer: string;
  products: {
    daily?: string[];
    fortnightly?: string[];
    monthly?: string[];
    quarterly?: string[];
    yearly?: string[];
  };
};

const contactLensData: ContactLensProduct[] = [
  {
    manufacturer: "Johnson & Johnson",
    products: {
      daily: ["Acuvue Moist", "Acuvue Oasys"],
      fortnightly: ["Acuvue 2", "Acuvue Oasys", "Acuvue Oasys Transitions"],
      monthly: ["Acuvue Vita"],
    },
  },
  {
    manufacturer: "Alcon",
    products: {
      daily: ["Aqua Comfort Plus", "Dailies Total", "Freshlook"],
      monthly: ["Air Optix", "Freshlook", "Air Optix Colors"],
    },
  },
  {
    manufacturer: "Cooper Vision",
    products: {
      daily: ["My Day", "Clariti", "Aspire", "Aspire GO MAX"],
      monthly: [
        "Biofinity XR",
        "Clariti",
        "Aspire PRO",
        "Aspire AIR",
        "Biofinity Energys",
        "Biomedics NOW",
        "Pro Clear",
      ],
    },
  },
  {
    manufacturer: "Bausch & Lomb",
    products: {
      daily: ["BioTrue", "SofLens Daily", "Lacelle"],
      monthly: ["Pure Vision 2", "SofLens", "Lacelle"],
      quarterly: ["Lacelle"],
      yearly: ["B/U/HO", "Optima"],
    },
  },
];

export default function ContactLensAdditionalBrandsMobilityComponent() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[800px]">
        {/* Header */}
        <div className="grid grid-cols-6 gap-2 mb-4">
          <div className="text-[#7A6F5C] p-4 rounded-lg shadow-lg border-2 border-[#7A6F5C]">
            Types/Materials
          </div>
          <div className="text-[#7A6F5C] p-4 rounded-lg shadow-lg border-2 border-[#7A6F5C]">
            Daily Disposable
          </div>
          <div className="text-[#7A6F5C] p-4 rounded-lg shadow-lg border-2 border-[#7A6F5C]">
            Fortnightly
          </div>
          <div className="text-[#7A6F5C] p-4 rounded-lg shadow-lg border-2 border-[#7A6F5C]">
            Monthly
          </div>
          <div className="text-[#7A6F5C] p-4 rounded-lg shadow-lg border-2 border-[#7A6F5C]">
            Quarterly
          </div>
          <div className="text-[#7A6F5C] p-4 rounded-lg shadow-lg border-2 border-[#7A6F5C]">
            Yearly
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {contactLensData.map((manufacturer, index) => (
            <div
              key={index}
              className="grid grid-cols-6 gap-2 py-4 border-b-2 border-[#7A6F5C]"
            >
              <div className="text-[#7A6F5C] font-medium border-r-2 border-[#7A6F5C] p-4">
                {manufacturer.manufacturer}
              </div>
              <div className="space-y-2 p-4">
                {manufacturer.products.daily?.map((product, idx) => (
                  <div key={idx} className="text-[#7A6F5C] text-sm">
                    ✶ {product}
                  </div>
                ))}
              </div>
              <div className="space-y-2 p-4">
                {manufacturer.products.fortnightly?.map((product, idx) => (
                  <div key={idx} className="text-[#7A6F5C] text-sm">
                    ✶ {product}
                  </div>
                ))}
              </div>
              <div className="space-y-2 p-4">
                {manufacturer.products.monthly?.map((product, idx) => (
                  <div key={idx} className="text-[#7A6F5C] text-sm">
                    ✶ {product}
                  </div>
                ))}
              </div>
              <div className="space-y-2 p-4">
                {manufacturer.products.quarterly?.map((product, idx) => (
                  <div key={idx} className="text-[#7A6F5C] text-sm">
                    ✶ {product}
                  </div>
                ))}
              </div>
              <div className="space-y-2 p-4">
                {manufacturer.products.yearly?.map((product, idx) => (
                  <div key={idx} className="text-[#7A6F5C] text-sm">
                    ✶ {product}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
