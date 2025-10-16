import { milestones } from "../../../../data/2025/highlight-data";

const ProgramHighlights = () => {
  return (
    <section
      id="highlights"
      className="relative w-full py-12 sm:py-20 px-4 sm:px-8 overflow-hidden"
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/sun-tornado.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/80 z-0" />

      {/* Content */}
      <div className="max-w-7xl  mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Program <span className="text-coolBlue">Highlights</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            A journey of growth, learning, and community
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-12 sm:mb-20">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-coolBlue via-purple-500 to-pink-500 transform sm:-translate-x-1/2" />

          {milestones.map((milestone, idx) => (
            <div
              key={idx}
              data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
              className={`relative flex items-center mb-8 sm:mb-12  ${
                idx % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              } flex-row`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 sm:left-1/2 w-4 h-4 bg-coolBlue rounded-full border-4 border-black transform sm:-translate-x-1/2 z-10" />

              {/* Content Card */}
              <div
                className={`ml-10 sm:ml-0 w-full sm:w-5/12 ${
                  idx % 2 === 0
                    ? "sm:pr-12 sm:text-right"
                    : "sm:pl-12 sm:text-left"
                }`}
              >
                <div
                  className={` p-6 rounded-2xl shadow-xl bg-black/20 hover:scale-105 transition-transform duration-300`}
                >
                  <div className="text-4xl sm:text-5xl mb-3">
                    {milestone.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-white text-opacity-90 text-sm sm:text-base">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;
