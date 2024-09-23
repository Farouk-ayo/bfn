import React from "react";
import { FaTimes } from "react-icons/fa"; // Close icon

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: Array<{ title: string; description: string }>;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 p-8 relative transform transition-all duration-500 ease-in-out scale-100">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition duration-300"
        >
          <FaTimes size={24} />
        </button>

        {/* Modal Header */}
        <h3 className="text-3xl font-bold text-primary mb-6">{title}</h3>

        {/* Modal Content */}
        <div className="space-y-6">
          {content.map((item, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <h4 className="text-xl font-semibold text-gray-700 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
