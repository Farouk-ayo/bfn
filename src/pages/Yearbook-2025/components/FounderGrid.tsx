import { useState } from "react";
import FounderModal from "./founderModal";
import { founders } from "../../../../data/2025/founder-data";

const FounderGrid = () => {
  const [selectedProgram, setSelectedProgram] = useState<
    "all" | "Smart Start" | "Accelerate"
  >("all");
  const [selectedFounder, setSelectedFounder] = useState<
    (typeof founders)[0] | null
  >(null);

  const filteredFounders =
    selectedProgram === "all"
      ? founders
      : founders.filter((f) => f.cohort === `${selectedProgram}`);
  const handleVoteClick = () => {
    const votingSection = document.getElementById("voting");
    if (votingSection) {
      votingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="founders"
      className="w-full py-12 sm:py-20  px-4 sm:px-8"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div data-aos="zoom-in" className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our <span className="text-coolBlue">Founders</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Explore the inspiring stories of our 2025 cohort
          </p>
        </div>

        {/* Program Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          {["all", "Smart Start", "Accelerate"].map((program) => (
            <button
              key={program}
              onClick={() =>
                setSelectedProgram(program as typeof selectedProgram)
              }
              className={`px-4 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                selectedProgram === program
                  ? "bg-coolBlue text-black shadow-lg scale-105"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              {program === "all" ? "All Founders" : program}
            </button>
          ))}
        </div>

        {/* Founder Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {filteredFounders.map((founder) => (
            <div
              key={founder.name}
              onClick={() => setSelectedFounder(founder)}
              className="cursor-pointer group"
              data-aos="fade-up"
            >
              <div className="relative aspect-square rounded-full overflow-hidden border-4 border-gray-800 group-hover:border-coolBlue transition-all duration-300">
                <img
                  src={founder.imageUrl}
                  alt={founder.name}
                  className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3 sm:pb-4">
                  <span className="text-coolBlue text-xs sm:text-sm font-bold">
                    View Story →
                  </span>
                </div>
              </div>
              <div className="text-center mt-2 sm:mt-3">
                <h3 className="text-white font-semibold text-xs sm:text-sm md:text-base line-clamp-2">
                  {founder.name}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm line-clamp-1">
                  {founder.businessName}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Vote CTA */}
        <div className="mt-16 sm:mt-20 text-center">
          <button
            onClick={handleVoteClick}
            className="px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(to right, #6fc7ea, #5ab8d8)",
              color: "#0A0A0A",
            }}
          >
            Click Here to Vote for Your Favourite Founder ↓
          </button>
        </div>
      </div>

      {/* Founder Modal */}
      <FounderModal
        founder={selectedFounder}
        isOpen={!!selectedFounder}
        onClose={() => setSelectedFounder(null)}
      />
    </section>
  );
};

export default FounderGrid;
