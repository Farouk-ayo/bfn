import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Program and Partner Logos */}
        <div className="flex flex-col items-center">
          {/* Program Logo */}
          <img
            src="https://via.placeholder.com/150x150?text=Program+Logo"
            alt="Program Logo"
            className="mb-4 w-24 h-24"
          />
          {/* Partner Logos */}
          <div className="flex space-x-4">
            <img
              src="https://via.placeholder.com/100x100?text=Partner+1"
              alt="Partner 1"
              className="w-16 h-16"
            />
            <img
              src="https://via.placeholder.com/100x100?text=Partner+2"
              alt="Partner 2"
              className="w-16 h-16"
            />
            <img
              src="https://via.placeholder.com/100x100?text=Partner+3"
              alt="Partner 3"
              className="w-16 h-16"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center text-center">
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <p className="text-gray-400">
            For inquiries, collaborations, or investment opportunities, contact us at:
          </p>
          <a
            href="mailto:contact@bamsfounders.com"
            className="text-blue-400 mt-2 hover:underline"
          >
            contact@bamsfounders.com
          </a>
          <p className="mt-4">
            Bams Founders Accelerator<br />
            123 Startup Avenue<br />
            Tech City, TC 12345
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center">
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://via.placeholder.com/40x40?text=FB"
                alt="Facebook"
                className="w-8 h-8"
              />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://via.placeholder.com/40x40?text=TW"
                alt="Twitter"
                className="w-8 h-8"
              />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://via.placeholder.com/40x40?text=LI"
                alt="LinkedIn"
                className="w-8 h-8"
              />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://via.placeholder.com/40x40?text=IG"
                alt="Instagram"
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-10 text-gray-500">
        <p>&copy; 2024 Bams Founders Accelerator. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
