export default function FrameTypesComponent() {
  const framesData = [
    {
      title: "Rimless",
      description: `Origins of rimless spectacles date back to the 1880's but gained popularity in the last few decades. 
        Rimless eyeglasses or the 3-piece frame have undergone several innovations over the years. Brands like 
        Silhouette and Lindberg have made this style a classic.`,
      image: "/assets/images/products/rimless.png",
    },
    {
      title: "Full-Rim",
      description: `Full-rim eyeglasses are durable and versatile, completely encircling the lenses for added protection. 
        This style is suitable for those who prefer a bold, defined look and can accommodate higher prescription lenses.`,
      image: "/assets/images/products/full_rimmed.png",
    },
    {
      title: "Semi-Rimless",
      description: `Semi-rimless frames balance style and minimalism by covering only the upper part of the lens. They offer 
        a modern, lightweight look and are popular in professional settings for their sleek design.`,
      image: "/assets/images/products/half_rimmed.png",
    },
  ];

  return (
    <section className="w-full px-4 py-16 flex justify-center">
      <div className="w-full max-w-5xl space-y-12">
        {/* Heading */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#7A6F5C]">
            FRAMES AND SUNGLASSES
          </h2>
          <h3 className="text-2xl md:text-3xl text-[#b5aa9a]">
            Types of Eyeglasses that we Dispense
          </h3>
        </div>

        {/* Cards */}
        {framesData.map((frame, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            } items-center gap-8 bg-white border border-gray-300 rounded-lg shadow-md p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg`}
          >
            {/* Image */}
            <div className="relative h-[200px] w-full md:w-[50%] bg-gray-50 rounded-md overflow-hidden">
              <img
                src={frame.image}
                alt={frame.title}
                className="object-contain w-full h-full rounded-md"
              />
            </div>

            {/* Content */}
            <div className="flex-1 space-y-4 text-center md:text-left">
              <h4 className="text-xl md:text-2xl font-semibold text-[#7A6F5C]">
                {frame.title}
              </h4>
              <p className="text-[#967c5b] leading-relaxed">
                {frame.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
