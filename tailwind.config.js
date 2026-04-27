/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "pbm-noir":      "#080810",
        "pbm-noir2":     "#0e0e1a",
        "pbm-surface":   "#13131f",
        "pbm-blue":      "#3730d4",
        "pbm-blue2":     "#4f46e5",
        "pbm-blue3":     "#6366f1",
        "pbm-white":     "#f5f3ee",
        "pbm-grey":      "#6b6b7e",
        "pbm-grey2":     "#a0a0b0",
        "pbm-gold":      "#c9a84c",
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', "sans-serif"],
        dm:    ['"DM Sans"',    "sans-serif"],
      },
    },
  },
  plugins: [],
};