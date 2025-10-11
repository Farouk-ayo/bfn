import FounderGrid from "../components/FounderGrid";
import FounderSpotlights from "../components/FounderSpotlight";

const Founder = () => {
  return (
    <div className="relative">
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

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black/80 z-0" />

      <FounderGrid />
      <FounderSpotlights />
    </div>
  );
};

export default Founder;
