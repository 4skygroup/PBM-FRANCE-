/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Couleurs PBM France
      colors: {
        "pbm-noir":       "#080810",
        "pbm-noir2":      "#0e0e1a",
        "pbm-surface":    "#13131f",
        "pbm-blue":       "#3730d4",
        "pbm-blue2":      "#4f46e5",
        "pbm-blue3":      "#6366f1",
        "pbm-blue-glow":  "rgba(55,48,212,0.2)",
        "pbm-white":      "#f5f3ee",
        "pbm-white-soft": "#FAFAFC",
        "pbm-grey":       "#6b6b7e",
        "pbm-grey2":      "#a0a0b0",
        "pbm-gold":       "#c9a84c",
      },

      // Typographie PBM France
      fontFamily: {
        bebas: ["'Bebas Neue'", "sans-serif"],
        dm:    ["'DM Sans'", "sans-serif"],
      },

      // Background PBM
      backgroundColor: {
        "pbm-noir":    "#080810",
        "pbm-noir2":   "#0e0e1a",
        "pbm-surface": "#13131f",
        "pbm-blue":    "#3730d4",
        "pbm-blue2":   "#4f46e5",
        "pbm-blue3":   "#6366f1",
      },

      // Border colors
      borderColor: {
        "pbm-blue":  "rgba(99,102,241,0.2)",
        "pbm-blue3": "#6366f1",
      },

      // Text colors
      textColor: {
        "pbm-white":  "#f5f3ee",
        "pbm-grey":   "#6b6b7e",
        "pbm-grey2":  "#a0a0b0",
        "pbm-blue3":  "#6366f1",
      },
    },
  },
  plugins: [],
};