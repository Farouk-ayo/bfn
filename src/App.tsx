import { useEffect } from "react";
import "./App.css";
import SplashScreenManager from "./components/SplashScreenManager";
import Home from "./pages/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <SplashScreenManager>
        <Home />
      </SplashScreenManager>
    </>
  );
}

export default App;
