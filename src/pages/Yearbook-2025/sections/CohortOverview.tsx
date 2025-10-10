import { motion } from "framer-motion";

const CohortOverview = () => {
  return (
    <section
      id="cohort"
      className="w-full py-12 sm:py-20 bg-gradient-to-b from-black to-gray-900 px-4 sm:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Left: Headline */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              <span className="text-yellow-400">24 Founders.</span>
              <br />
              <span className="text-yellow-400">15 Industries.</span>
              <br />
              <span className="text-white">1 Bold Community.</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto lg:mx-0 mt-6" />
          </div>

          {/* Right: Data Visuals */}
          <div className="space-y-6 sm:space-y-8">
            {/* Gender Distribution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-2xl border border-yellow-400 border-opacity-20"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-4 flex items-center">
                <span className="mr-3">👥</span> Gender Distribution
              </h3>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <div className="w-full bg-gray-700 rounded-full h-3 mr-3">
                      <div
                        className="bg-yellow-400 h-3 rounded-full"
                        style={{ width: "58%" }}
                      />
                    </div>
                    <span className="text-white text-sm sm:text-base whitespace-nowrap">
                      58% Male
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-700 rounded-full h-3 mr-3">
                      <div
                        className="bg-coral-400"
                        style={{
                          width: "42%",
                          backgroundColor: "#FF6F61",
                          height: "100%",
                          borderRadius: "9999px",
                        }}
                      />
                    </div>
                    <span className="text-white text-sm sm:text-base whitespace-nowrap">
                      42% Female
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Industry Categories */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-2xl border border-yellow-400 border-opacity-20"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-4 flex items-center">
                <span className="mr-3">💼</span> Top Industries
              </h3>
              <div className="space-y-3">
                {[
                  { name: "Healthcare & Wellness", icon: "🏥", count: 6 },
                  { name: "Education & Learning", icon: "📚", count: 5 },
                  { name: "Technology & AI", icon: "💻", count: 4 },
                  { name: "E-commerce & Fashion", icon: "🛍️", count: 3 },
                  { name: "Fintech & Legal", icon: "💰", count: 3 },
                ].map((industry, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-white"
                  >
                    <span className="text-sm sm:text-base">
                      {industry.icon} {industry.name}
                    </span>
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                      {industry.count}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center text-gray-400 text-sm sm:text-base md:text-lg mt-8 sm:mt-12 max-w-3xl mx-auto px-4"
        >
          Spanning from coast to coast, the 2025 BFN founders are redefining
          innovation in Canada.
        </motion.p>
      </div>
    </section>
  );
};

export default CohortOverview;
