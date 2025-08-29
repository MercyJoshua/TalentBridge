/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          background: "#FAFAFA",
          text: "#4A4A4A",
          primary: "#00BFA6",
          accent: "#FF6B6B",
          highlight: "#FFD93D",
        },
        dark: {
          background: "#0B132B",
          text: "#EAEAEA",
          primary: "#00BFA6",
          accent: "#FF6B6B",
        },
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
}
