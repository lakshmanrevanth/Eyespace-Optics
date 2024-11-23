// import Image from 'next/image'

export default function EyeOpticalInfoHero() {
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
              <h1 className="text-4xl tracking-tight font-extrabold text-[#9d8189] sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Optical Lenses</span>
              </h1>
              <h2 className="mt-3 text-2xl font-bold text-[#967c5b]">
                Name it and we got it!
              </h2>

              {/* Description */}
              <p className="mt-6 text-[#555555] leading-relaxed text-lg sm:mt-5 sm:text-base sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
                We are authorized retailers for all brands of spectacles, sunglasses, and contact lenses. We dispense only tried and tested products from world-class lens manufacturers like Essilor, Carl Zeiss, Nikon, Bausch & Lomb, Johnson & Johnson, Cooper Vision, and more.
              </p>
              <p className="mt-4 text-[#555555] leading-relaxed text-lg sm:text-base sm:max-w-xl sm:mx-auto md:text-lg lg:mx-0">
                As a testimony to our expertise in dispensing optics, we were nominated as the first Essilor Expert in South India and were awarded by Times Healthcare for Service Excellence in Opticianry and Optometry.
              </p>
            </div>
          </main>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 w-full">
        {/* Uncomment this when ready */}
        {/* <Image
          className="w-full h-auto object-cover"
          src="/placeholder.svg?height=600&width=800"
          alt="Various eyeglasses and lenses on display"
          width={800}
          height={600}
          layout="responsive"
        /> */}
        <div className="h-full bg-gray-100 flex items-center justify-center">
          <span className="text-gray-500">Image Placeholder</span>
        </div>
      </div>
    </div>
  );
}
