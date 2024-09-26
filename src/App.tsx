import { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import FaizahBalogunPage from "./pages/Faizah";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  { path: "/interview-faizah-balogun", element: <FaizahBalogunPage /> },
]);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
    AOS.refresh();
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
