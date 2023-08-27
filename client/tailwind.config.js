/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f4f0ea",
        dark: "#2F2F2F",
      }
    },
  },
  plugins: [],
};
