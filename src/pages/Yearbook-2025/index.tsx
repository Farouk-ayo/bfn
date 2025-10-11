import { useEffect } from "react";
import Navbar from "./layout/navbar";
import HeroSection from "./sections/Hero";
import CohortOverview from "./sections/CohortOverview";
import ProgramHighlights from "./sections/ProgramHighlights";
import MemoriesSection from "./sections/Memories";
import Founder from "./sections/Founder";
import VotingSection from "./sections/Voting";

const Yearbook2025 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <CohortOverview />
      <Founder />
      <ProgramHighlights />
      <MemoriesSection />
      <VotingSection />
    </div>
  );
};

export default Yearbook2025;
