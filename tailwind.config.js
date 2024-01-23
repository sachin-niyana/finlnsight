/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xsm: "10px",
      sm: "12px",
      "2sm": "13px",
      xmd: "14px",
      md: "15px",
      lg: "16px",
      xl: "18px",
      "2xl": "32px",
    },
    fontFamily: {
      Jost: ["Jost", "sans-serif"],
    },

    extend: {
      colors: {
        "dark-black": "#1F2C37",
        "light-black": "#3D474D",
        "dark-blue": "#4170FF",
        "light-blue": "#547EFF",
        "sky-blue": "#60A2F9",
        gray: "#9cA4AB",
        "dark-gray": "#83878B",
        "light-gray": "#9C9C9C",
        "dark-navy": "#122A53",
        "gray-black": "#78828A",
        "light-white": "#F8FaFF",
        "white-gray": "#BBC1C9",
      },
    },
  },
  plugins: [],
};
