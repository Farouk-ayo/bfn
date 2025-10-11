import { Outlet } from "react-router";
import Footer from "./layout/Footer";
import { ScrollRestoration } from "react-router-dom";

const Root24 = () => {
  return (
    <section>
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </section>
  );
};
export default Root24;
