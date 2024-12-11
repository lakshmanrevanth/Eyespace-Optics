export default function FramesAndSunglassesInfoHero() {
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
              <h1 className="text-4xl tracking-tight font-extrabold text-[#7A6F5C] sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Frames and Sunglasses</span>
              </h1>
              <h2 className="mt-3 text-2xl font-bold text-[#695D50]">
                Name it and we got it!
              </h2>

              <p className="mt-6 text-[#555555] leading-relaxed text-lg sm:mt-5 sm:text-base sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
                We are the pioneer opticians in Karnataka with roots dating back
                to the 19th century. Quality products, precision in dispensing,
                and service is our main focus. Every eyepiece in our store is
                important, and so is every customer.
              </p>

              <p className="mt-4 text-[#555555] leading-relaxed text-lg sm:text-base sm:max-w-xl sm:mx-auto md:text-lg lg:mx-0">
                We stock a wide range of products from lenses to frames &amp;
                sunglasses. Each store holds over 2000 eyeglasses to help you
                make the right selection, and each eyepiece is handpicked and
                carefully selected by the management.
              </p>
            </div>
          </main>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 w-full">
        <img
          src="/assets/images/products/frames.png"
          alt="Frames and Sunglasses display"
          className="w-full h-auto object-cover"
          style={{ maxWidth: "1056px", height: "300px" }}
        />
      </div>
    </div>
  );
}
