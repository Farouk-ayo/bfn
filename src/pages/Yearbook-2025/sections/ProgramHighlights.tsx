import { useState } from "react";
import { milestonesData } from "../../../../data/2025/highlight-data";

const ProgramHighlights = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const [selectedMilestoneIdx, setSelectedMilestoneIdx] = useState<
    number | null
  >(null);
  const thumbnailRefs = useState<{ [key: number]: HTMLButtonElement | null }>(
    {}
  )[0];

  const DISPLAY_COUNT = 5;

  const handleImageClick = (image: string, milestoneIdx: number) => {
    const imgIdx = milestonesData[milestoneIdx].images.indexOf(image);
    setSelectedImage(image);
    setCurrentImageIdx(imgIdx);
    setSelectedMilestoneIdx(milestoneIdx);
  };

  const nextImage = () => {
    if (selectedMilestoneIdx === null) return;
    const images = milestonesData[selectedMilestoneIdx].images;
    const nextIdx = (currentImageIdx + 1) % images.length;
    setCurrentImageIdx(nextIdx);
    setSelectedImage(images[nextIdx]);
    scrollToThumbnail(nextIdx);
  };

  const prevImage = () => {
    if (selectedMilestoneIdx === null) return;
    const images = milestonesData[selectedMilestoneIdx].images;
    const prevIdx = (currentImageIdx - 1 + images.length) % images.length;
    setCurrentImageIdx(prevIdx);
    setSelectedImage(images[prevIdx]);
    scrollToThumbnail(prevIdx);
  };

  const getDisplayImages = (images: string[]): string[] => {
    return images.slice(0, DISPLAY_COUNT);
  };

  const getRemainingCount = (images: string[]): number => {
    return Math.max(0, images.length - DISPLAY_COUNT);
  };

  const scrollToThumbnail = (index: number) => {
    const thumbnail = thumbnailRefs[index];
    if (thumbnail) {
      thumbnail.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  return (
    <section
      id="highlights"
      className="relative w-full py-12 lg:py-20 px-4 lg:px-8 overflow-hidden"
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
      <div className="max-w-screen-2xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Program <span className="text-coolBlue">Highlights</span>
          </h2>
          <p className="text-gray-400 text-lg lg:text-base md:text-lg max-w-2xl mx-auto">
            A journey of growth, learning, and community
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-12 lg:mb-20">
          {/* Timeline Line */}
          <div className="absolute left-1 lg:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-coolBlue via-purple-500 to-pink-500 transform lg:-translate-x-1/2" />

          {milestonesData.map((milestone, idx) => (
            <div
              key={idx}
              data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
              className={`relative flex items-center mb-8 lg:mb-12 ${
                idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } flex-row`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1 lg:left-1/2 w-4 h-4 bg-coolBlue rounded-full border-4 border-black transform lg:-translate-x-1/2 z-10" />

              {/* Content Card */}
              <div
                className={`ml-3 lg:ml-0 w-full ${
                  idx % 2 === 0
                    ? "lg:pr-12 lg:text-right lg:w-6/12 "
                    : "lg:pl-12 lg:text-left lg:w-6/12 "
                }`}
              >
                <div className="p-4 lg:p-6 rounded-2xl shadow-xl bg-black/20 hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl lg:text-5xl  mb-3">
                    {milestone.icon}
                  </div>
                  <h3 className="text-lg lg:text-2xl  font-bold text-white mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-white text-opacity-90 text-xs lg:text-base  mb-4">
                    {milestone.description}
                  </p>

                  {/* Image Gallery Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-2  mt-4 lg:mt-6">
                    {getDisplayImages(milestone.images).map((image, imgIdx) => (
                      <button
                        key={imgIdx}
                        onClick={() => handleImageClick(image, idx)}
                        className="relative h-20 lg:h-24 md:h-28 rounded-lg overflow-hidden hover:scale-110 transition-transform duration-300 group"
                      >
                        <img
                          src={image}
                          alt={`${milestone.title}-${imgIdx}`}
                          className="w-full h-full object-cover group-hover:brightness-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all" />
                      </button>
                    ))}

                    {/* +N Badge */}
                    {getRemainingCount(milestone.images) > 0 && (
                      <button
                        onClick={() =>
                          handleImageClick(milestone.images[DISPLAY_COUNT], idx)
                        }
                        className="relative h-20 lg:h-24 md:h-28  rounded-lg overflow-hidden bg-coolBlue/30 border-2 border-coolBlue hover:bg-coolBlue/50 transition-all duration-300 flex items-center justify-center group"
                      >
                        <img
                          src={milestone.images[DISPLAY_COUNT]}
                          alt="more"
                          className="w-full h-full object-cover group-hover:brightness-110 absolute"
                        />
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all" />
                        <span className="relative text-white font-bold text-lg lg:text-2xl md:text-3xl ">
                          +{getRemainingCount(milestone.images)}
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && selectedMilestoneIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-95 flex flex-col items-center justify-center p-3 lg:p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center max-w-4xl">
            {/* Main Image */}
            <img
              src={selectedImage}
              alt="Full size"
              className="w-full h-auto max-h-[70vh] object-contain rounded-2xl animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-3 -right-3 lg:top-2 lg:right-2  text-white bg-black/70 hover:bg-black rounded-full p-2 lg:p-3  transition-all text-lg lg:text-xl "
            >
              ✕
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-1 lg:left-4 top-1/2 -translate-y-1/2 text-white bg-black/70 hover:bg-black rounded-full p-2 lg:p-4  transition-all text-lg lg:text-2xl "
            >
              ❮
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-1 lg:right-4 top-1/2 -translate-y-1/2 text-white bg-black/70 hover:bg-black rounded-full p-2 lg:p-4  transition-all text-lg lg:text-2xl "
            >
              ❯
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-3 lg:bottom-4 left-1/2 -translate-x-1/2 text-white text-xs lg:text-lg bg-black/70 px-3 lg:px-4 py-2 rounded-full">
              {currentImageIdx + 1} /{" "}
              {milestonesData[selectedMilestoneIdx].images.length}
            </div>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-16 lg:bottom-20 left-1/2 -translate-x-1/2 w-full max-w-xs lg:max-w-2xl px-4">
              <div className="flex gap-2 overflow-x-auto px-2 py-3 bg-black/70 rounded-xl scroll-smooth">
                {milestonesData[selectedMilestoneIdx].images.map((img, i) => (
                  <button
                    key={i}
                    ref={(el) => (thumbnailRefs[i] = el)}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIdx(i);
                      setSelectedImage(img);
                      scrollToThumbnail(i);
                    }}
                    className={`flex-shrink-0 h-16 w-16 lg:h-20 lg:w-20 rounded-lg overflow-hidden transition-all ${
                      i === currentImageIdx
                        ? "ring-3 ring-coolBlue scale-110"
                        : "opacity-70 hover:opacity-100 hover:scale-105"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`thumb-${i}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            transform: scale(0.8);
          }
          to {
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ProgramHighlights;
