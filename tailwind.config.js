/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      screens: {
        xs: "320px",
        sm: "480px",
        md: "640px",
        lg: "768px",
        xl: "1024px",
        "2xl": "1280px",
        "3xl": "1440px",
        "4xl": "1600px",
        "5xl": "1920px",
        "2k": "2048px",
      },
    },
  },
  plugins: [],
};
