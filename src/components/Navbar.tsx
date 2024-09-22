import { useState } from "react";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed z-30 top-0 w-full flex justify-between items-center p-6 bg-opacity-100 backdrop-blur-md transition duration-500">
      <ul className="hidden space-x-10 text-white items-center  sm:flex">
        <li className="hover:text-primary">
          <a href="#introduction">Introduction</a>
        </li>
        <li className="hover:text-primary ">
          <a href="#founder">Founder</a>
        </li>
      </ul>
      <div className="text-white font-bold text-2xl">
        <img
          src="https://via.placeholder.com/100x100?text=Logo"
          alt="Logo"
          className="w-12 h-12"
        />
      </div>
      <ul className=" hidden sm:flex space-x-10 text-white items-center">
        <li className="hover:text-primary">
          <a href="#program-highlights">Program Highlights</a>
        </li>
        <li className="hover:text-primary">
          <a href="#success-stories">Success Stories</a>
        </li>
      </ul>
      <div className="inline-block sm:hidden">
        <button
          className={`hamburger ${
            isOpen ? "open" : ""
          } relative z-30 w-8 h-6 flex flex-col justify-between items-center`}
          onClick={toggleMenu}
        >
          <span
            className={`line block w-full h-1 ${
              isOpen ? "bg-primary" : "bg-white"
            }  transition-transform duration-300 ease-in-out origin-center`}
          ></span>
          <span
            className={`line block w-full h-1  ${
              isOpen ? "bg-primary" : "bg-white"
            }  transition-opacity duration-300 ease-in-out`}
          ></span>
          <span
            className={`line block w-full h-1 ${
              isOpen ? "bg-primary" : "bg-white"
            }  transition-transform duration-300 ease-in-out origin-center`}
          ></span>
        </button>
      </div>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ duration: 0.5 }}
        className={`fixed inset-0 w-full h-lvh bg-black bg-opacity-50 lg:hidden`}
      >
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? "0%" : "100%" }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 right-0 h-full w-3/4 bg-light shadow-lg p-4"
        >
          <MobileNav />
        </motion.div>
      </motion.div>
    </nav>
  );
};
export default Navbar;
