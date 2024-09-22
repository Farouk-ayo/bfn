import React, { useEffect } from "react";
import { gsap } from "gsap";

const Hero: React.FC = () => {
  useEffect(() => {
    // GSAP Animations for the hero text
    gsap.fromTo(
      ".hero-text",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );
  }, []);

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="absolute w-full top-0 flex justify-between items-center p-6 z-20 bg-transparent">
        <ul className="flex space-x-8 text-white items-center">
          <li>Introduction</li>
          <li>Founder</li>
        </ul>

        <div className="text-white font-bold text-2xl">
          <img
            src="https://via.placeholder.com/100x100?text=Logo"
            alt="Logo"
            className="w-12 h-12"
          />
        </div>

        <ul className="flex space-x-8 text-white items-center">
          <li>Program Highlights</li>
          <li>Success Stories</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-screen bg-gradient-to-r from-purple-600 via-blue-600 to-blue-300 text-white flex justify-center items-center px-12 pt-24">
        {/* Center Text */}
        <div className="text-center hero-text">
          <h1 className="text-7xl font-bold uppercase">
            Being{" "}
            <span className="relative">
              founder
              <span className="absolute -bottom-1 left-0 w-full h-3 bg-white opacity-40 rotate-2"></span>
            </span>{" "}
            takes guts.
          </h1>
          <p className="text-gray-300 text-lg mt-4 max-w-md mx-auto">
            We are Bams Founders VC firm, building companies in emerging
            markets.
          </p>

          {/* Call to Action Button */}
          <div className="mt-8">
            <a
              href="/invest"
              className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-200 transition duration-300 ease-in-out"
            >
              Invest in our founders
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-12">
            <div className="animate-bounce">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
