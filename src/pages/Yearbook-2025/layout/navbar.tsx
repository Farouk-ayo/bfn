import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Cohort", href: "#cohort" },
    { name: "Founders", href: "#founders" },
    { name: "Highlights", href: "#highlights" },
    { name: "Memories", href: "#memories" },
    { name: "Voting", href: "#voting" },
  ];

  return (
    <nav className="fixed z-50 top-10 w-full flex justify-between items-center py-4 px-4 sm:py-6 sm:px-20 bg-opacity-100 backdrop-blur-3xl transition duration-500">
      {/* bg-opacity-100 backdrop-blur-3xl transition duration-500 */}
      <div className="text-white font-bold text-xl sm:text-2xl w-32 sm:w-44">
        <a href="/">
          <img src="/bfn-white.svg" alt="BFN Logo" />
        </a>
      </div>

      <div className="inline-block">
        <button
          className={`hamburger ${
            isOpen ? "open" : ""
          } relative z-30 w-7 h-5 sm:w-8 sm:h-6 flex flex-col justify-between items-center`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="line block w-full h-0.5 sm:h-1 bg-white transition-transform duration-300 ease-in-out origin-center"></span>
          <span className="line block w-full h-0.5 sm:h-1 bg-white transition-opacity duration-300 ease-in-out"></span>
          <span className="line block w-full h-0.5 sm:h-1 bg-white transition-transform duration-300 ease-in-out origin-center"></span>
        </button>
      </div>

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 w-full h-screen bg-black bg-opacity-50"
        onClick={() => setIsOpen(false)}
      >
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? "0%" : "100%" }}
          transition={{ duration: 0.3 }}
          className="absolute top-0 right-0 h-full z-50 w-3/4 sm:w-1/2 bg-gradient-to-br from-gray-900 to-black shadow-2xl p-6"
          onClick={(e: Event) => e.stopPropagation()}
        >
          <nav className="flex flex-col justify-center items-center h-full">
            <ul className="space-y-8 text-white text-lg sm:text-xl flex flex-col items-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-yellow-400 transition-colors duration-300 border-b-2 border-transparent hover:border-yellow-400 pb-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
