/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#0f0e12",
        "primary-300": "#1d1c24",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
        "purple-light": "#a383ff",
        "darkgray-purple": "#1c1b24",
        "middle-purple": "#4e18a0",
        "very-dark-purple": "#0b0716",
      },

      fontFamily: {
        ebgaramond: ["EB Garamond, serif;"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
