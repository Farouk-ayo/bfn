/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4A4947",
        secondary: "#B17457",
        tertiary: "#D8D2C2",
        light: "#FAF7F0",
      },
    },
  },
  plugins: [],
};
