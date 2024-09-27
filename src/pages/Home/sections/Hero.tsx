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
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="z-20 relative w-full h-full flex flex-col justify-center items-center text-white px-6 sm:px-12 pt-40 hero-section">
        {/* Center Text */}
        <div className="text-center hero-text space-y-4">
          <h1 className="text-5xl sm:text-7xl font-bold uppercase  sm:leading-normal flex-col flex font-tradegothic tracking-wide">
            Black{" "}
            <span className="relative -skew-y-1 bg-[#00295c6e] transform perspective-300">
              <span className="block -skew-y-1 px-1">
                Founders
                <span className="absolute -bottom-1 left-0 w-full h-2 bg-white opacity-40 rotate-1"></span>
              </span>
            </span>{" "}
            Network
          </h1>
          <h2 className="font-tradegothic text-2xl sm:text-3xl mt-2 sm:mt-4 tracking-wider text-gray-200">
            2024
          </h2>
          <p className="text-gray-300 text-lg mt-4 sm:mt-6 max-w-lg mx-auto tagline leading-relaxed sm:leading-normal font-tradegothic tracking-wide">
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
