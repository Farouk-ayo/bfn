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
    gsap.fromTo(
      ".tagline",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.7 }
    );
  }, []);

  return (
    <div className="relative h-screen">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/office.webp"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        preload="metadata"
      >
        <source src="/office.webm" type="video/webm" />
        <source src="/office.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to make the text readable */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Navbar */}
      <nav className="sticky z-30 top-0 flex justify-between items-center p-6 bg-opacity-100 backdrop-blur-md transition duration-500">
        <ul className="flex space-x-8 text-white items-center">
          <li className="hover:text-yellow-400">
            <a href="#introduction">Introduction</a>
          </li>
          <li className="hover:text-yellow-400 ">
            <a href="#founder">Founder</a>
          </li>
        </ul>
        <div className="text-white font-bold text-2xl">
          <img
            src="https://via.placeholder.com/100x100?text=Logo"
            alt="Logo"
            className="w-12 h-12"
          />
        </div>
        <ul className="flex space-x-8 text-white items-center">
          <li className="hover:text-yellow-400">
            <a href="#program-highlights">Program Highlights</a>
          </li>
          <li className="hover:text-yellow-400">
            <a href="#success-stories">Success Stories</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="z-20 relative w-full h-screen flex justify-center items-center text-white px-12">
        {/* Center Text */}
        <div className="text-center hero-text">
          <h1 className="text-7xl font-bold uppercase">
            Being{" "}
            <span className="relative bg-[#2F2F2F]">
              founder
              <span className="absolute -bottom-1 left-0 w-full h-3 bg-white opacity-40 rotate-2"></span>
            </span>{" "}
            takes guts.
          </h1>
          <p className="text-gray-300 text-lg mt-4 max-w-md mx-auto tagline">
            Empowering Founders to Innovate and Scale—The 2024 Accelerator
            Showcase
          </p>

          {/* Call to Action Button */}
          <div className="mt-8">
            <a
              href="/invest"
              className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
            >
              Invest in our founders
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-12">
            <div className="scroll-indicator mt-12 animate-bounce hover:scale-110 transition duration-300">
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
