/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#01959F",
        primaryBright: "#02b0bd",
        primaryDark: "#00727a",
        dark: "#1D1F20",
        red: "#E11428",
        redDark: "#a30212",
        redBright: "#fa253b",
        success: "#B8DBCA",
        danger: "#F5B1B7",
        caution: "#FEEABC",
        green: "#43936C",
        orange: "#FA9810",
      },
    },
  },
  plugins: [],
};
