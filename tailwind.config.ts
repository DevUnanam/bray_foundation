import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orchid: "#c860f5",
          lilac: "#d880fc",
          violet: "#af5fc4",
          plum: "#500769",
          pink: "#ff66c4",
          teal: "#1cabb0",
          sky: "#c2e9ff",
          white: "#ffffff",
          black: "#000000"
        }
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-body)"]
      },
      boxShadow: {
        bubble: "0 16px 40px rgba(80, 7, 105, 0.18)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top left, rgba(216,128,252,0.35), transparent 38%), radial-gradient(circle at 80% 20%, rgba(255,102,196,0.24), transparent 28%), radial-gradient(circle at bottom right, rgba(28,171,176,0.24), transparent 32%)"
      }
    }
  },
  plugins: []
};

export default config;
