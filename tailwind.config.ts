import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Azure blue accent
        azure: {
          50: "#e6f2fb",
          100: "#b3d9f2",
          200: "#80c0e8",
          300: "#4da7df",
          400: "#1a8ed5",
          500: "#0078D4", // primary
          600: "#0063b0",
          700: "#004e8c",
          800: "#003968",
          900: "#002444",
        },
        // Emerald for "currently working" badge
        emerald: {
          400: "#34d399",
          500: "#10B981",
          600: "#059669",
        },
        // Backgrounds
        ink: {
          900: "#0A0E1A",
          800: "#111827",
          700: "#1F2937",
          600: "#374151",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          "2xl": "1200px",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;