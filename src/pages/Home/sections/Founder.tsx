import React, { useState } from "react";
import {
  FaBriefcase,
  FaHeartbeat,
  FaLaptopCode,
  FaGlobe,
} from "react-icons/fa"; // Example icons for sectors

// Sample data for founders
const founders = [
  {
    name: "John Doe",
    businessName: "TechWave Solutions",
    description: "Providing AI-driven software solutions for startups.",
    achievement:
      "Launched an MVP and onboarded 100+ users during the accelerator.",
    quote:
      "The mentorship and resources provided by the accelerator were game-changers for us.",
    sector: "tech",
    imageUrl: "https://via.placeholder.com/150", // Dummy profile image
  },
  {
    name: "Jane Smith",
    businessName: "HealthConnect",
    description:
      "A digital platform connecting patients with healthcare providers.",
    achievement: "Secured $500K in seed funding during the accelerator.",
    quote: "The network we built here will sustain our growth for years.",
    sector: "health",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    businessName: "HealthConnect",
    description:
      "A digital platform connecting patients with healthcare providers.",
    achievement: "Secured $500K in seed funding during the accelerator.",
    quote: "The network we built here will sustain our growth for years.",
    sector: "health",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    businessName: "HealthConnect",
    description:
      "A digital platform connecting patients with healthcare providers.",
    achievement: "Secured $500K in seed funding during the accelerator.",
    quote: "The network we built here will sustain our growth for years.",
    sector: "health",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    businessName: "HealthConnect",
    description:
      "A digital platform connecting patients with healthcare providers.",
    achievement: "Secured $500K in seed funding during the accelerator.",
    quote: "The network we built here will sustain our growth for years.",
    sector: "health",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    businessName: "HealthConnect",
    description:
      "A digital platform connecting patients with healthcare providers.",
    achievement: "Secured $500K in seed funding during the accelerator.",
    quote: "The network we built here will sustain our growth for years.",
    sector: "health",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    businessName: "HealthConnect",
    description:
      "A digital platform connecting patients with healthcare providers.",
    achievement: "Secured $500K in seed funding during the accelerator.",
    quote: "The network we built here will sustain our growth for years.",
    sector: "health",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    businessName: "HealthConnect",
    description:
      "A digital platform connecting patients with healthcare providers.",
    achievement: "Secured $500K in seed funding during the accelerator.",
    quote: "The network we built here will sustain our growth for years.",
    sector: "health",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    businessName: "HealthConnect",
    description:
      "A digital platform connecting patients with healthcare providers.",
    achievement: "Secured $500K in seed funding during the accelerator.",
    quote: "The network we built here will sustain our growth for years.",
    sector: "health",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    businessName: "HealthConnect",
    description:
      "A digital platform connecting patients with healthcare providers.",
    achievement: "Secured $500K in seed funding during the accelerator.",
    quote: "The network we built here will sustain our growth for years.",
    sector: "health",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    businessName: "HealthConnect",
    description:
      "A digital platform connecting patients with healthcare providers.",
    achievement: "Secured $500K in seed funding during the accelerator.",
    quote: "The network we built here will sustain our growth for years.",
    sector: "health",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    businessName: "HealthConnect",
    description:
      "A digital platform connecting patients with healthcare providers.",
    achievement: "Secured $500K in seed funding during the accelerator.",
    quote: "The network we built here will sustain our growth for years.",
    sector: "health",
    imageUrl: "https://via.placeholder.com/150",
  },
];

// Function to get icon based on business sector
const getSectorIcon = (sector: string) => {
  switch (sector) {
    case "tech":
      return <FaLaptopCode className="text-blue-400 text-xl" />;
    case "health":
      return <FaHeartbeat className="text-red-400 text-xl" />;
    case "social":
      return <FaGlobe className="text-green-400 text-xl" />;
    default:
      return <FaBriefcase className="text-gray-400 text-xl" />;
  }
};

const Founder: React.FC = () => {
  // State to control how many founders are shown
  const [showAll, setShowAll] = useState(false);

  // Function to toggle "See All"
  const toggleShowAll = () => setShowAll(!showAll);

  // Only show 8 founders if "See All" is not clicked
  const foundersToShow = showAll ? founders : founders.slice(0, 8);

  return (
    <section className="py-16 bg-light text-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Founder Spotlights
        </h2>

        {/* Grid layout for founders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {foundersToShow.map((founder, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg overflow-hidden hover:shadow-xl transition duration-300 px-4 py-4"
              data-aos="fade-up"
            >
              {/* Front of the card */}
              <div className="p-6 flex flex-col items-center">
                <img
                  src={founder.imageUrl}
                  alt={founder.name}
                  className="w-40 h-40 rounded-full mb-4 object-cover"
                />
                <h3 className="text-lg font-bold">{founder.name}</h3>
                <p className="text-sm text-gray-500 mb-2">
                  {founder.businessName}
                </p>
                {/* Sector Icon */}
                <div className="flex justify-center items-center mt-2">
                  {getSectorIcon(founder.sector)}
                </div>
              </div>

              {/* Hidden back section (on hover) */}
              <div className="absolute inset-0 bg-primary text-white p-6 flex flex-col justify-between opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div>
                  <h4 className="text-lg font-bold mb-2">
                    {founder.businessName}
                  </h4>
                  <p className="text-sm">{founder.description}</p>
                </div>
                <div className="mt-4">
                  <h5 className="text-md font-semibold">Key Achievement:</h5>
                  <p className="text-sm mb-2">{founder.achievement}</p>
                  <blockquote className="text-sm italic">
                    "{founder.quote}"
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional Call-to-Action button */}
        <div className="text-center mt-12">
          {/* Toggle between "See All" and "See Less" */}
          <button
            onClick={toggleShowAll}
            className=" border-b border-b-transparent hover:border-b hover:border-primary transition pb-1"
          >
            {showAll ? "See Less" : "See All Founders"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Founder;
