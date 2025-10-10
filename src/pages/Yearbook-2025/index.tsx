import { useEffect } from "react";
import Navbar from "./components/navbar";
import HeroSection from "./sections/Hero";
import CohortOverview from "./sections/CohortOverview";
import FounderGrid from "./sections/FounderGrid";
import ProgramHighlights from "./sections/ProgramHighlights";
import MemoriesSection from "./sections/Memories";

const Yearbook2025 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <CohortOverview />
      <FounderGrid />
      <ProgramHighlights />
      <MemoriesSection />
    </div>
  );
};

export default Yearbook2025;
