import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full py-4 px-8 bg-black text-white fixed top-0 flex justify-between items-center">
      <div className="font-bold text-xl">vCamp</div>
      <ul className="flex space-x-6">
        <li className="hover:text-gray-400 transition duration-300">
          <a href="#about">About us</a>
        </li>
        <li className="hover:text-gray-400 transition duration-300">
          <a href="#join">Join us</a>
        </li>
        <li className="hover:text-gray-400 transition duration-300">
          <a href="#team">Team</a>
        </li>
        <li className="hover:text-gray-400 transition duration-300">
          <a href="#news">News & Events</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
