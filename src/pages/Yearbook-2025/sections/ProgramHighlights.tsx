import { motion } from "framer-motion";
import { milestones, stats } from "../../../../data/2025/highlight-data";

const ProgramHighlights = () => {
  return (
    <section
      id="highlights"
      className="relative w-full py-12 sm:py-20 px-4 sm:px-8 overflow-hidden"
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/sun-tornado.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-black/80 z-0" />

      {/* Content */}
      <div className="max-w-7xl  mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Program <span className="text-yellow-400">Highlights</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            A journey of growth, learning, and community
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-12 sm:mb-20">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 via-purple-500 to-pink-500 transform sm:-translate-x-1/2" />

          {milestones.map((milestone, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative flex items-center mb-8 sm:mb-12 ${
                idx % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              } flex-row`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 sm:left-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-black transform sm:-translate-x-1/2 z-10" />

              {/* Content Card */}
              <div
                className={`ml-10 sm:ml-0 w-full sm:w-5/12 ${
                  idx % 2 === 0
                    ? "sm:pr-12 sm:text-right"
                    : "sm:pl-12 sm:text-left"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`bg-gradient-to-br ${milestone.color} p-6 rounded-2xl shadow-xl`}
                >
                  <div className="text-4xl sm:text-5xl mb-3">
                    {milestone.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-white text-opacity-90 text-sm sm:text-base">
                    {milestone.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* By the Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 sm:p-10 border-2 border-yellow-400"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-yellow-400 mb-8 sm:mb-12">
            By the Numbers
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 sm:p-6 bg-black bg-opacity-50 rounded-2xl"
              >
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramHighlights;
