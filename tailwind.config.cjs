/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xl: { max: "1240px" },
      lg: { max: "992px" },
      md: { max: "765px" },
      sm: { max: "550px" },
      xs: { max: "375px" },
    },
  },
  plugins: [],
};
