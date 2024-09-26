import React from "react";
import { FaTimes } from "react-icons/fa"; // Close icon

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  detailContent: {
    title: string;
    media: Array<{ type: string; src: string; alt: string }>;
  };
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, detailContent }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 h-[80%] p-6 relative transform transition-all duration-500 ease-in-out overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition duration-300"
        >
          <FaTimes size={24} />
        </button>

        {/* Modal Header */}
        <h3 className="text-3xl font-bold text-primary mb-4">
          {detailContent.title}
        </h3>

        {/* Modal Content (Scrollable Area) */}
        <div className="space-y-6 overflow-y- overflow-x-hidden auto h-[90%] pr-2 custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {detailContent.media.map((item, index) => (
              <div key={index} className="w-full">
                {/* Image Display */}
                {item.type === "image" && (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-64 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
                  />
                )}

                {/* Video Display */}
                {item.type === "video" && (
                  <div className="relative h-64">
                    <video
                      controls
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    >
                      <source src={item.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
