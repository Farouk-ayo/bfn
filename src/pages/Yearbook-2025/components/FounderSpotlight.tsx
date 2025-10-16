import { useState, useRef, useEffect } from "react";
import FounderModal from "./founderModal";
import { founders } from "../../../../data/2025/founder-data";

// Subtheme configuration
const subthemes = [
  {
    title: "The Builders",
    cardColor: "#E5E5E5",
    accent: "#4A4947",
    description: "Creating infrastructure and tools for tomorrow",
    founders: [] as typeof founders,
  },
  {
    title: "The Healers",
    cardColor: "#E8F5E9",
    accent: "#4CAF50",
    description: "Transforming healthcare and wellness",
    founders: [] as typeof founders,
  },
  {
    title: "The Changemakers",
    cardColor: "#FFF9E6",
    accent: "#D1A000",
    description: "Bringing bold visions to life",
    founders: [] as typeof founders,
  },
  {
    title: "The Craftsmen",
    cardColor: "#FFE8E5",
    accent: "#FF6F61",
    description: "Building bridges and communities",
    founders: [] as typeof founders,
  },
];

const FounderSpotlights = () => {
  const [selectedFounder, setSelectedFounder] = useState<
    (typeof founders)[0] | null
  >(null);
  const scrollContainerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const autoScrollIntervals = useRef<(NodeJS.Timeout | null)[]>([]);

  // Categorize founders by theme
  const categorizedThemes = subthemes.map((theme) => ({
    ...theme,
    founders: founders.filter((f) => f.theme === theme.title),
  }));

  // Auto-scroll functionality
  useEffect(() => {
    categorizedThemes.forEach((theme, index) => {
      if (theme.founders.length > 0) {
        const interval = setInterval(() => {
          const container = scrollContainerRefs.current[index];
          if (container) {
            const maxScroll = container.scrollWidth - container.clientWidth;
            const currentScroll = container.scrollLeft;

            // If we've reached the end, scroll back to start
            if (currentScroll >= maxScroll - 10) {
              container.scrollTo({ left: 0, behavior: "smooth" });
            } else {
              // Otherwise scroll forward by one card width
              container.scrollBy({ left: 350, behavior: "smooth" });
            }
          }
        }, 3000); // Scroll every 3 seconds

        autoScrollIntervals.current[index] = interval;
      }
    });

    // Cleanup intervals on unmount
    return () => {
      autoScrollIntervals.current.forEach((interval) => {
        if (interval) clearInterval(interval);
      });
    };
  }, []);

  const scroll = (index: number, direction: "left" | "right") => {
    const container = scrollContainerRefs.current[index];
    if (container) {
      const scrollAmount = 350;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Pause auto-scroll when user interacts
  const handleManualScroll = (index: number) => {
    const interval = autoScrollIntervals.current[index];
    if (interval) {
      clearInterval(interval);
      // Resume auto-scroll after 5 seconds of inactivity
      setTimeout(() => {
        const newInterval = setInterval(() => {
          const container = scrollContainerRefs.current[index];
          if (container) {
            const maxScroll = container.scrollWidth - container.clientWidth;
            const currentScroll = container.scrollLeft;

            if (currentScroll >= maxScroll - 10) {
              container.scrollTo({ left: 0, behavior: "smooth" });
            } else {
              container.scrollBy({ left: 350, behavior: "smooth" });
            }
          }
        }, 3000);
        autoScrollIntervals.current[index] = newInterval;
      }, 5000);
    }
  };

  return (
    <section
      id="spotlights"
      className="relative w-full py-12 sm:py-20 overflow-hidden"
      data-aos="fade-up"
    >
      {/* Content */}
      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 px-4" data-aos="zoom-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-maldives">
            Founder <span className="text-coolBlue">Spotlights</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto ">
            Deeper stories, organized by the impact they're making
          </p>
        </div>
        <div className="space-y-12 sm:space-y-16">
          {/* Subtheme Sections */}
          {categorizedThemes.map((theme, themeIndex) => (
            <div
              key={theme.title}
              className="relative"
              data-aos={themeIndex % 2 === 0 ? "zoom-in-right" : "zoom-in-left"}
            >
              {/* Theme Header */}
              <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-6 sm:mb-8">
                <div className="flex items-center gap-3 sm:gap-4 mb-2">
                  <div
                    className="w-1.5 sm:w-2 h-10 sm:h-12 rounded-full"
                    style={{ backgroundColor: theme.accent }}
                  />
                  <h3
                    className="text-2xl sm:text-3xl md:text-4xl font-bold font-maldives"
                    style={{ color: theme.accent }}
                  >
                    {theme.title}
                  </h3>
                </div>
                <p className="text-softGray text-xs sm:text-sm md:text-base ml-5 sm:ml-6 ">
                  {theme.description}
                </p>
              </div>

              {/* Horizontal Scroll Container */}
              <div className="relative">
                {/* Left Arrow - Hidden on mobile */}
                <button
                  onClick={() => {
                    scroll(themeIndex, "left");
                    handleManualScroll(themeIndex);
                  }}
                  className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg items-center justify-center hover:scale-110 transition-transform font-bold text-xl"
                  style={{ color: theme.accent }}
                  aria-label="Scroll left"
                >
                  ←
                </button>

                {/* Cards Container */}
                <div
                  ref={(el) => (scrollContainerRefs.current[themeIndex] = el)}
                  className="flex gap-4 sm:gap-6 overflow-x-auto px-4 sm:px-16 py-4 snap-x snap-mandatory scrollbar-hide"
                  style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    WebkitOverflowScrolling: "touch",
                  }}
                  onTouchStart={() => handleManualScroll(themeIndex)}
                  onMouseDown={() => handleManualScroll(themeIndex)}
                >
                  {theme.founders.map((founder) => (
                    <div
                      key={founder.name}
                      className="flex-shrink-0 w-72 sm:w-80 md:w-96 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden cursor-pointer snap-center hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300"
                      style={{ backgroundColor: theme.cardColor }}
                      onClick={() => setSelectedFounder(founder)}
                    >
                      {/* Founder Image */}
                      <div className="relative h-56 sm:h-64 overflow-hidden">
                        <img
                          src={founder.imageUrl}
                          alt={founder.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div
                          className="absolute bottom-0 left-0 right-0 h-20 sm:h-24"
                          style={{
                            background: `linear-gradient(to top, ${theme.accent}, transparent)`,
                          }}
                        />
                      </div>

                      {/* Card Content */}
                      <div className="p-4 sm:p-6">
                        {/* Founder Name */}
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2 font-maldives">
                          {founder.name}
                        </h4>

                        {/* Business Name */}
                        <p
                          className="font-semibold text-sm sm:text-base mb-2 sm:mb-3 "
                          style={{ color: theme.accent }}
                        >
                          {founder.businessName}
                        </p>

                        {/* Story Preview (3 sentences) */}
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3 ">
                          {founder.story || founder.description}
                        </p>

                        {/* Read More Button */}
                        <button
                          className="text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all hover:gap-3 "
                          style={{ color: theme.accent }}
                        >
                          Read full story →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right Arrow - Hidden on mobile */}
                <button
                  onClick={() => {
                    scroll(themeIndex, "right");
                    handleManualScroll(themeIndex);
                  }}
                  className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg items-center justify-center hover:scale-110 transition-transform font-bold text-xl"
                  style={{ color: theme.accent }}
                  aria-label="Scroll right"
                >
                  →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Founder Modal */}
      <FounderModal
        founder={selectedFounder}
        isOpen={!!selectedFounder}
        onClose={() => setSelectedFounder(null)}
      />

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default FounderSpotlights;
