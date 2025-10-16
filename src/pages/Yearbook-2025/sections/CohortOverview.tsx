import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

interface GenderData {
  name: string;
  value: number;
  percentage: number;
}

const AnimatedNumber = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const displayValue = Math.round(springValue.get());

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toString();
      }
    });
    return () => unsubscribe();
  }, [springValue]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
};

const CohortOverview = () => {
  const genderData = [
    { name: "Male Founders", value: 10, percentage: 42 },
    { name: "Female Founders", value: 14, percentage: 58 },
  ];

  const COLORS = {
    male: "#6fc7ea",
    female: "#d0d1c9",
  };

  interface CustomTooltipProps {
    active?: boolean;
    payload?: Array<{
      name: string;
      value: number;
      payload: GenderData;
    }>;
  }

  const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-black bg-opacity-90 px-3 py-2 rounded border border-coolBlue">
          <p className="text-white text-sm">
            {payload[0].name}: {payload[0].value} (
            {payload[0].payload.percentage}%)
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section
      id="cohort"
      className="w-full py-16 sm:py-24 bg-black px-4 sm:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Quick <span className="text-coolBlue">Statistics</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Spanning across multiple industries, the 2025 BFN founders are
            redefining innovation in Canada.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center"
        >
          {/* Left: Headline */}
          <div className="lg:col-span-2 ml-10 sm:ml-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-maldives leading-tight mb-6">
              <div className="text-white mb-3  text-2xl">
                <AnimatedNumber
                  value={24}
                  className="text-5xl sm:text-6xl lg:text-7xl text-coolBlue"
                />{" "}
                Founders.
              </div>
              <div className="text-white mb-3  text-2xl ">
                <AnimatedNumber
                  value={5}
                  className="text-5xl sm:text-6xl lg:text-7xl text-coolBlue"
                />{" "}
                Industries.
              </div>
              <div className="text-white  text-2xl">
                <AnimatedNumber
                  value={1}
                  className="text-5xl sm:text-6xl lg:text-7xl text-coolBlue"
                />{" "}
                Bold Community.
              </div>
            </h2>
            <div className="w-16 h-1 bg-coolBlue" />
          </div>

          {/* Right: Data Visuals */}
          <div className="lg:col-span-3 space-y-12">
            {/* Gender Distribution */}
            <div>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
                <div className="w-full sm:w-48 md:w-56 flex-shrink-0">
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={genderData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        <Cell fill={COLORS.male} />
                        <Cell fill={COLORS.female} />
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="flex-1 w-full">
                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    {genderData.map((entry, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center p-4 bg-zinc-900 rounded-lg border border-zinc-800"
                      >
                        <div
                          className="w-8 h-8 rounded-full mb-3"
                          style={{
                            backgroundColor:
                              index === 0 ? COLORS.male : COLORS.female,
                          }}
                        />
                        <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                          {entry.value}
                        </div>
                        <div className="text-sm text-gray-400 mb-1">
                          {entry.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {entry.percentage}%
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Industry Breakdown */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CohortOverview;
