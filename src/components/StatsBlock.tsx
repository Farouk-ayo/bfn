import React from "react";

const StatsBlock: React.FC = () => {
  return (
    <section className="w-full py-12 bg-white" data-aos="zoom-in">
      <div className="relative max-w-4xl mx-auto text-center">
        {/* Central Stat Block */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex flex-col items-center justify-center stats-item relative">
            <h3 className="text-4xl sm:text-6xl  font-bold ">24</h3>
            <p className="text-lg text-gray-500 mt-2 font-semibold">
              Finalist Black Founders
            </p>
          </div>

          {/* Downward pointing arrows from "11" and "13" to "24" */}
          <svg
            className="absolute left-1/2 transform -translate-x-1/2 top-14 sm:top-20"
            width="250"
            height="120"
            viewBox="0 0 300 120"
          >
            <line
              x1="50"
              y1="100"
              x2="150"
              y2="20"
              stroke="#4A4947"
              strokeWidth="2"
              markerStart="url(#arrowhead)"
            />
            <line
              x1="250"
              y1="100"
              x2="150"
              y2="20"
              stroke="#4A4947"
              strokeWidth="2"
              markerStart="url(#arrowhead)"
            />
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="10"
                refY="3.5"
                orient="auto-start-reverse"
              >
                <polygon points="0 0, 10 3.5, 0 7" fill="#4A4947" />
              </marker>
            </defs>
          </svg>
        </div>

        {/* Lower Stat Blocks (11 and 13) */}
        <div className="flex items-center justify-center space-x-24">
          {/* BFN Accelerate Program */}
          <div className="stats-item text-center flex flex-col items-center">
            <h3 className=" text-3xl sm:text-5xl font-bold">11</h3>
            <p className="text-base sm:text-lg text-gray-500 mt-2 font-semibold">
              BFN Accelerate Program
            </p>
          </div>

          {/* BFN Smart Start Program */}
          <div className="stats-item text-center flex flex-col items-center">
            <h3 className="text-3xl sm:text-5xl  font-bold">13</h3>
            <p className="text-base sm:text-lg text-gray-500 mt-2 font-semibold">
              BFN Smart Start Program
            </p>
          </div>
        </div>

        {/* Connecting line between "11" and "13" */}
        <svg
          className="absolute left-1/2 transform -translate-x-1/2 bottom-8"
          width="200"
          height="50"
          viewBox="0 0 300 50"
        >
          <line
            x1="50"
            y1="10"
            x2="250"
            y2="10"
            stroke="#4A4947"
            strokeWidth="2"
          />
        </svg>
      </div>
    </section>
  );
};

export default StatsBlock;
