import { ScrollRestoration } from "react-router-dom";
import SplashScreenManager from "../../components/SplashScreenManager";
import Footer from "../../layout/Footer";
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
      <ScrollRestoration />
      <Hero />
      <Introduction />
      <ProgramHighlights />
      <Founder />
      <Milestone />
      <SuccessStories />
      <CallToAction />
      <Footer />{" "}
    </SplashScreenManager>
  );
};
export default Home;
