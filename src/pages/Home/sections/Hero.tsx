import React, { useEffect } from "react";
import { gsap } from "gsap";
import Navbar from "../../../components/Navbar";

const Hero: React.FC = () => {
  useEffect(() => {
    // GSAP Animations for the hero text
    gsap.fromTo(
      ".hero-text",
      { opacity: 0, y: 50 }, // Start further down
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.3 }
    );
    gsap.fromTo(
      ".tagline",
      { opacity: 0, y: 30 }, // Start a bit lower
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.8 }
    );

    // Bounce effect for scroll indicator
    gsap.to(".scroll-indicator", {
      y: 20,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 1.2,
    });
  }, []);

  return (
    <div className="relative h-screen ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        preload="metadata"
      >
        <source src="/bgvideo.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to make the text readable */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="z-20 relative w-full h-full flex flex-col justify-center items-center text-white px-6 sm:px-12 pt-40 hero-section leading-tight sm:leading-normal">
        <div className="text-center hero-text space-y-6 sm:space-y-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold uppercase flex-col flex font-tradegothic">
            Black{" "}
            <span className="relative bg-[#00295c6e] inline-block transform -skew-y-1">
              <span className="block px-2 -skew-y-1">Founders</span>
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-white opacity-40 rotate-1"></span>
            </span>{" "}
            Network
          </h1>

          <h2 className="font-tradegothic text-xl sm:text-2xl lg:text-3xl mt-2 sm:mt-4 tracking-wide text-gray-200">
            2024
          </h2>

          <p className="text-gray-300 text-base sm:text-lg lg:text-xl mt-4 sm:mt-6 max-w-lg mx-auto tagline leading-relaxed sm:leading-normal font-tradegothic tracking-wide">
            Empowering Black Founders to Innovate and Scale
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 sm:mt-24">
          <div className="scroll-indicator animate-bounce hover:scale-110 transition duration-300">
            <svg
              className="w-10 h-10 text-gray-300"
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
