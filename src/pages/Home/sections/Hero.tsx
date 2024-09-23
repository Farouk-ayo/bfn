import React, { useEffect } from "react";
import { gsap } from "gsap";
import Navbar from "../../../components/Navbar";

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
      <Navbar />

      {/* Hero Section */}
      <section className="z-20 relative w-full h-full flex flex-col justify-center items-center text-white px-6 sm:px-12 pt-40 hero-section">
        {/* Center Text */}
        <div className="text-center hero-text space-y-4">
          <h1 className="text-6xl sm:text-7xl font-bold uppercase leading-relaxed sm:leading-normal flex-col flex font-maldives">
            Black{" "}
            <span className="relative -skew-y-2 bg-secondary scale-105 transform perspective-300">
              <span className="block transform -skew-y-2">
                Founders
                <span className="absolute -bottom-1 left-0 w-full h-3 bg-white opacity-40 rotate-2"></span>
              </span>
            </span>{" "}
            Network
          </h1>
          <h2 className="font-maldives text-3xl sm:text-4xl mt-2 sm:mt-4">
            2024
          </h2>
          <p className="text-white text-lg mt-4 sm:mt-6 max-w-lg mx-auto tagline leading-relaxed sm:leading-normal">
            Empowering Black Founders to Innovate and Scale
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 sm:mt-24">
          <div className="scroll-indicator animate-bounce hover:scale-110 transition duration-300">
            <svg
              className="w-10 h-10 text-white"
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
      </section>
    </div>
  );
};

export default Hero;
