import { useEffect } from "react";
import Navbar from "./layout/navbar";
import HeroSection from "./sections/Hero";
import CohortOverview from "./sections/CohortOverview";
import ProgramHighlights from "./sections/ProgramHighlights";
import MemoriesSection from "./sections/Memories";
import Founder from "./sections/Founder";
import VotingSection from "./sections/Voting";
import SplashScreenManager from "./components/SplashScreenManager";
import SEO from "./components/SEO";

const Yearbook2025 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="BFN Yearbook 2025 | Celebrating 24 Innovative Black Founders"
        description="Meet the 2025 cohort of Black Founders Network - 24 entrepreneurs building the future across healthcare, education, technology, e-commerce, and fintech. Vote for your favorites and celebrate innovation."
        keywords="BFN 2025, Black Founders Network yearbook, Black entrepreneurs Canada, startup accelerator, Smart Start program, Accelerate program, Black-owned businesses, diversity in tech, innovation, Toronto startups"
        image="/og-yearbook-2025.png"
      />

      <SplashScreenManager>
        <Navbar />
        <HeroSection />
        <CohortOverview />
        <Founder />
        <ProgramHighlights />
        <MemoriesSection />
        <VotingSection />
      </SplashScreenManager>
    </>
  );
};

export default Yearbook2025;
