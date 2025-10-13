import { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import FaizahBalogunPage from "./pages/Yearbook-2024/Faizah";
import Yearbook2025 from "./pages/Yearbook-2025";
import Root25 from "./pages/Yearbook-2025/Root";
import Root24 from "./pages/Yearbook-2024/Root";
import Leaderboard from "./pages/Yearbook-2025/pages/Leaderboard";
import Yearbook2024 from "./pages/Yearbook-2024";
import { inject } from "@vercel/analytics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root25 />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Yearbook2025 /> }],
  },
  {
    path: "/yearbook-2025",
    element: <Root25 />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Yearbook2025 /> },
      { path: "leaderboard", element: <Leaderboard /> },
    ],
  },
  {
    path: "/yearbook-2024",
    element: <Root24 />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Yearbook2024 /> },
      { path: "interview-faizah-balogun", element: <FaizahBalogunPage /> },
    ],
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
    inject();
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
