import SplashScreenManager from "../../components/SplashScreenManager";
import CallToAction from "./sections/CallToAction";
import Founder from "./sections/Founder";
import Hero from "./sections/Hero";
import ProgramHighlights from "./sections/Highlights";
import Introduction from "./sections/Introduction";
import Milestone from "./sections/Milestone";
import SuccessStories from "./sections/SuccessStories";

const Home = () => {
  return (
    <SplashScreenManager>
      <Hero />
      <Introduction />
      <ProgramHighlights />
      <Founder />
      <Milestone />
      <SuccessStories />
      <CallToAction />
    </SplashScreenManager>
  );
};
export default Home;
