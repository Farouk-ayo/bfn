import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight =
        document.querySelector(".hero-section")?.clientHeight || 0;
      if (window.scrollY > heroSectionHeight) {
        setScrolled(true); // User has scrolled past the hero section
      } else {
        setScrolled(false); // User is still in the hero section
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up event listener
    };
  }, []);

  return (
    <nav className="fixed z-50 top-0 w-full flex justify-between items-center py-6 px-6 sm:px-20 bg-opacity-100 backdrop-blur-3xl transition duration-500 uppercase">
      <div className="text-white font-bold text-2xl w-44 ">
        <img src={`${scrolled ? "/bfn.svg" : "/bfn-white.svg"}`} alt="Logo" />
      </div>

      <div className="inline-block">
        <button
          className={`hamburger ${
            isOpen ? "open" : ""
          } relative z-30 w-8 h-6 flex flex-col justify-between items-center`}
          onClick={toggleMenu}
        >
          <span
            className={`line block w-full h-1 ${
              isOpen || scrolled ? "bg-primary" : "bg-white"
            }  transition-transform duration-300 ease-in-out origin-center`}
          ></span>
          <span
            className={`line block w-full h-1  ${
              isOpen || scrolled ? "bg-primary" : "bg-white"
            }  transition-opacity duration-300 ease-in-out`}
          ></span>
          <span
            className={`line block w-full h-1 ${
              isOpen || scrolled ? "bg-primary" : "bg-white"
            }  transition-transform duration-300 ease-in-out origin-center`}
          ></span>
        </button>
      </div>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ duration: 0.5 }}
        className={`fixed inset-0 w-full h-lvh bg-black bg-opacity-50`}
      >
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? "0%" : "100%" }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 right-0 h-full z-50 w-3/4 bg-light shadow-lg p-4"
        >
          <MobileNav setIsOpen={setIsOpen} />
        </motion.div>
      </motion.div>
    </nav>
  );
};
export default Navbar;
