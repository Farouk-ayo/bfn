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
      },
      fontFamily: {
        grotesk: ["ID Grotesk", "sans-serif"],
        billiona: ["Billiona", "sans-serif"],
        maldives: ["Maldives", "sans-serif"],
      },
    },
  },
  plugins: [],
};
