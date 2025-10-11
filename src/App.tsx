import { useEffect } from "react";
import "./App.css";
import Home from "./pages/Yearbook-2024/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import FaizahBalogunPage from "./pages/Yearbook-2024/Faizah";
import Yearbook2025 from "./pages/Yearbook-2025";
import Root25 from "./pages/Yearbook-2025/Root";
import Root24 from "./pages/Yearbook-2024/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root24 />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "interview-faizah-balogun", element: <FaizahBalogunPage /> },
    ],
  },
  {
    path: "/yearbook-2025",
    element: <Root25 />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Yearbook2025 /> }],
  },
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
