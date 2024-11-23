import { Star } from 'lucide-react';

export default function MyopiaManagementService_card3() {
  const treatments = [
    'Myopia control spectacle lenses (lens for myopia)',
    'Contact lenses (lens for correction of myopia)',
    'Eye drops to control Myopia',
    'Combination therapies',
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto p-8">
      {/* Decorative Star */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
        <Star className="w-16 h-16 text-[#B3A69B]/20" />
      </div>

      <div className="grid md:grid-cols-2 gap-8 bg-white rounded-xl shadow-lg p-8">
        {/* Left Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-medium text-[#B3A69B]">
            How to treat and manage Myopia?
          </h2>
          <div className="space-y-4 text-[#B3A69B]">
            <p className="leading-relaxed">
              Several strategies can help manage myopia in children and slow down its progression,
              while providing clearer vision at the same time. Myopia management is effective and
              applies only to children between the ages of 6 years and 16 years.
            </p>
            <p className="leading-relaxed">
              Your optometrists can recommend the treatment options they think best suit your
              child's needs during an eye examination. Myopia can affect your child's vision and
              eye health more than you think, besides needing heavier prescriptions in adulthood.
              However, early action can help slow the progression of myopia and protect your child's vision.
            </p>
            <div className="space-y-2">
              <p className="leading-relaxed">
                There are several options for Myopia Management, which are provided by understanding
                the causes and recognising the symptoms. Our Optometrists will provide one of the
                following, post an eye examination and consultation:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                {treatments.map((treatment, index) => (
                  <li key={index} className="text-[#B3A69B]">
                    {treatment}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-medium text-[#B3A69B]">
            About our Myopia Management Centre:
          </h2>
          <div className="space-y-4 text-[#B3A69B]">
            <p className="leading-relaxed">
              We at S.R.Gopal Rao Opticians & Optometrists have launched India's first retail
              housed clinical Myopia Management Centres supported by Zeiss. The centre aims to
              provide vision care and support to children from a young age while still retaining
              the comforts of a retail setup like ours. The key to this practice is that one can{' '}
              <a href="#" className="text-[#B3A69B] underline hover:text-[#9D8189]">
                make an appointment
              </a>{' '}
              to visit the store and be assured of getting their needs and their child's needs
              attended to at the same time without the daunting task of long hours and waits.
            </p>
            <p className="leading-relaxed">
              Moreover, we are fully equipped with state-of-the-art technology to complete a thorough
              eye examination for adults while also being able to detect if children have myopia
              at an early age, followed by counselling, providing solutions, and treatment for the same.
            </p>
            <p className="leading-relaxed">
              It is important to know that not all children can get myopia, but regular eye check-ups
              (from 6 months to a year), from an early age is important for every child to detect and
              control the progression of myopia if needed.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="md:col-span-2 text-center text-[#B3A69B]">
          <p>
            If your child has myopia symptoms{' '}
            <a href="#" className="text-[#B3A69B] underline hover:text-[#9D8189]">
              Contact Us
            </a>{' '}
            or{' '}
            <a href="#" className="text-[#B3A69B] underline hover:text-[#9D8189]">
              Book An Appointment
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
