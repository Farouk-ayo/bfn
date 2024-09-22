import React from "react";

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button>
      <a
        href="/invest"
        className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
      >
        {children}
      </a>
    </button>
  );
};
export default Button;
