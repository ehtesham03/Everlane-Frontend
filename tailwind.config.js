/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      display: ["display", "sans-serif"],
      lato: ["Lato", "sans-serif"],
      openSans: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};