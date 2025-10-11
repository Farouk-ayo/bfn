import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-12">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "url('/sun-tornado.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <img src="/bfn-white.svg" alt="BFN Logo" className="mb-4 w-40" />
            <p className="text-sm text-gray-300 text-center md:text-left">
              Empowering Black Founders to Innovate and Scale
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400 mb-2">
              Have questions or need more info? Reach out to us:
            </p>
            <a
              href="mailto:bfn@utoronto.ca"
              className="text-yellow-400 hover:underline text-lg transition-colors"
            >
              bfn@utoronto.ca
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <p className="text-gray-400 mb-4 text-center md:text-right">
              Stay connected with us online.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://web.facebook.com/BFNcommunity/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 transition-colors"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://twitter.com/bfncommunity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 transition-colors"
              >
                <FaXTwitter size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/blackfoundersnetwork/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 transition-colors"
              >
                <FaLinkedinIn size={24} />
              </a>
              <a
                href="https://www.youtube.com/@BlackFoundersNetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 transition-colors"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="https://www.instagram.com/bfncommunity/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 transition-colors"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 text-center mt-16 text-gray-500">
        <p className="mt-2">
          Microsite crafted by{" "}
          <strong className="text-white">Pitch Insights Consulting</strong>.
        </p>
        <p className="text-white">
          &copy; 2025 Black Founders Network. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
