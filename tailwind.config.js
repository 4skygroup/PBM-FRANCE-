/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pbm: {
          noir: "#080810",
          surface: "#13131f",
          blue: "#3730d4",
          blueLight: "#6366f1",
        }
      }
    },
  },
  plugins: [],
}

