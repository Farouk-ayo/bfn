import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
interface GenderData {
  name: string;
  value: number;
  percentage: number;
}

const CohortOverview = () => {
  const genderData = [
    { name: "Male", value: 14, percentage: 58 },
    { name: "Female", value: 10, percentage: 42 },
  ];

  const industryData = [
    { name: "Healthcare", count: 6 },
    { name: "Education", count: 5 },
    { name: "Technology", count: 4 },
    { name: "E-commerce", count: 3 },
    { name: "Fintech", count: 3 },
  ];

  const COLORS = {
    male: "#D1A000",
    female: "#FF6F61",
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
        <div className="bg-black bg-opacity-90 px-3 py-2 rounded border border-gold">
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-5 items-center gap-12 lg:gap-16"
        >
          {/* Left: Headline */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-maldives leading-tight mb-6">
              <div className="text-gold mb-3">24 Founders.</div>
              <div className="text-gold mb-3">5 Industries.</div>
              <div className="text-white">1 Bold Community.</div>
            </h2>
            <div className="w-16 h-1 bg-gold" />
          </div>

          {/* Right: Data Visuals */}
          <div className="lg:col-span-3 space-y-12">
            {/* Gender Distribution */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6 font-maldives">
                Gender Distribution
              </h3>

              <div className="flex flex-col sm:flex-row items-center gap-8">
                <div className="w-full sm:w-64">
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={genderData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
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

                <div className="space-y-4 flex-1">
                  {genderData.map((entry, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-4 h-4 rounded-sm"
                          style={{
                            backgroundColor:
                              index === 0 ? COLORS.male : COLORS.female,
                          }}
                        />
                        <span className="text-softGray font-body">
                          {entry.name}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-semibold">
                          {entry.value}
                        </div>
                        <div className="text-sm text-gray-500">
                          {entry.percentage}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Industry Breakdown */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6 font-maldives">
                Top Industries
              </h3>

              <ResponsiveContainer width="100%" height={280}>
                <BarChart
                  data={industryData}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
                >
                  <XAxis type="number" hide />
                  <YAxis
                    type="category"
                    dataKey="name"
                    tick={{ fill: "#F5F5F5", fontSize: 14 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    cursor={{ fill: "rgba(209, 160, 0, 0.1)" }}
                    contentStyle={{
                      backgroundColor: "rgba(0, 0, 0, 0.9)",
                      border: "1px solid #D1A000",
                      borderRadius: "4px",
                    }}
                    labelStyle={{ color: "#F5F5F5" }}
                  />
                  <Bar
                    dataKey="count"
                    fill="#D1A000"
                    radius={[0, 8, 8, 0]}
                    barSize={32}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>

        {/* Bottom Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-gray-400 text-base mt-16 max-w-2xl mx-auto font-body"
        >
          Spanning across multiple industries, the 2025 BFN founders are
          redefining innovation in Canada.
        </motion.p>
      </div>
    </section>
  );
};

export default CohortOverview;
