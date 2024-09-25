import Footer from "../../layout/Footer";
// import CallToAction from "./sections/CallToAction";
import Founder from "./sections/Founder";
import Hero from "./sections/Hero";
import ProgramHighlights from "./sections/Highlights";
import Introduction from "./sections/Introduction";
import SuccessStories from "./sections/SuccessStories";

const Home = () => {
  return (
    <section>
      <Hero />
      <Introduction /> <ProgramHighlights />
      <Founder />
      <SuccessStories />
      {/* <CallToAction /> */}
      <Footer />
    </section>
  );
};
export default Home;
