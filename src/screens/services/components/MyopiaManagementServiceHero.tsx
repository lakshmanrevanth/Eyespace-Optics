export default function MyopiaManagementServiceHero() {
  return (
    <div className="relative bg-[#f7f3ef] overflow-hidden w-full">
      <div className="max-w-7xl mx-auto w-full">
        <div className="relative z-10 pb-8 bg-[#f7f3ef] sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          {/* Decorative SVG */}
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-[#f7f3ef] transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          {/* Content */}
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              {/* Heading */}
              <h1 className="text-4xl tracking-tight font-extrabold text-[#7A6F5C] sm:text-5xl md:text-6xl">
                <span className="block xl:inline">
                  Myopia Management Centre
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 text-[#555555] leading-relaxed text-lg sm:mt-5 sm:text-base sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
                Myopia is of growing concern today and it is assumed that by
                2050 over half the world's population will be myopic. As such,
                we at S.R.Gopal Rao, being the oldest opticians in Bangalore
                with its Founder being the first qualified Optometrist in the
                city, have taken several steps to update our oldest store and
                create India's first in-store Myopia Management Centre in
                association with industry experts - Zeiss.
              </p>
            </div>
          </main>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 w-full">
        {/* Image Section without background */}
        <div className="h-full flex items-center justify-center">
          <img
            className="w-full h-auto object-cover"
            src="/assets/images/services/myopia.png"
            alt="Various eyeglasses and lenses on display"
          />
        </div>
      </div>
    </div>
  );
}
