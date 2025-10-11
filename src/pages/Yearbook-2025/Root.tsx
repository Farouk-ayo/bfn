import { Outlet } from "react-router";
import { ScrollRestoration } from "react-router-dom";
import Footer from "./layout/footer";

const Root25 = () => {
  return (
    <section>
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </section>
  );
};
export default Root25;
