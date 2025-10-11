/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#002A5C",
        secondary: "#295F98",
        tertiary: "#D8D2C2",
        light: "#FAF7F0",
        primary2: "#4A4947",
        // 2025
        black: "#0A0A0A",
        gold: "#D1A000",
        coral: "#FF6F61",
        softGray: "#F5F5F5",
      },
      fontFamily: {
        grotesk: ["ID Grotesk", "sans-serif"],
        billiona: ["Billiona", "sans-serif"],
        maldives: ["Poppins", "sans-serif"],
        tradegothic: ["Trade Gothic LT Std", "sans-serif"],
        body: ["Inter", "Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
