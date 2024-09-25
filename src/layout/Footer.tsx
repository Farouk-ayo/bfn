import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <img src="/bfn-white.svg" alt="BFN Logo" className="mb-4 w-40" />
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center text-center">
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <a
            href="mailto:contact@founders.com"
            className="text-blue-400 mt-2 hover:underline"
          >
            contact@bfnfounders.com
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center">
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-10 text-gray-500">
        <p>&copy; 2024 Black Founders Network. All rights reserved.</p>
        <p className="mt-1">
          Microsite crafted by <strong>Pitch Insights Consulting</strong>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
