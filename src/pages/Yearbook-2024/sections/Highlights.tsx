import React, { useState } from "react";

import Modal from "../components/Modal";
import { highlights } from "../../../../data/2024/highlight-data";

const ProgramHighlights: React.FC = () => {
  const [selectedHighlight, setSelectedHighlight] = useState<{
    title: string;
    detailContent: {
      title: string;
      media: Array<{ type: string; src: string; alt: string }>;
    };
  } | null>(null);

  const openModal = (highlight: {
    title: string;
    detailContent: {
      title: string;
      media: Array<{ type: string; src: string; alt: string }>;
    };
  }) => {
    setSelectedHighlight(highlight);
  };

  const closeModal = () => {
    setSelectedHighlight(null);
  };

  return (
    <section
      className="timeline-section py-16 bg-light text-primary overflow-x-hidden"
      id="program-highlights"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">
          Program Highlights & Workshops
        </h2>

        {/* Timeline */}
        <div className="relative mt-12">
          {/* Vertical Line */}
          <div
            className="absolute w-1 bg-gray-300 left-1/2 transform -translate-x-1/2 transition-all duration-300"
            style={{ height: "100%" }} // Dynamic height based on scroll
          ></div>

          {/* Timeline events */}
          <div className="space-y-12">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`flex flex-col items-center  ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                data-aos={`${index % 2 === 0 ? "fade-right" : "fade-left"}`}
              >
                {/* Icon */}
                <div className="relative z-10 flex-shrink-0 p-4 bg-white rounded-full shadow-lg">
                  {highlight.icon}
                </div>

                {/* Content */}
                <div className="relative lg:w-1/2 w-full mt-4 lg:mt-0 p-6 bg-white rounded-lg shadow-lg flex flex-col ">
                  <h3 className="text-xl font-semibold mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 mb-2">
                    {highlight.date}
                  </p>
                  <p className="text-gray-600 mb-4">{highlight.description}</p>

                  {/* Click to open modal */}
                  <button
                    onClick={() => openModal(highlight)}
                    className="text-secondary font-semibold hover:underline focus:outline-none"
                  >
                    Explore moments
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedHighlight && (
          <Modal
            isOpen={!!selectedHighlight}
            onClose={closeModal}
            detailContent={selectedHighlight.detailContent}
          />
        )}
      </div>
    </section>
  );
};

export default ProgramHighlights;
