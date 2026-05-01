import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0a0a0a",
          soft: "#525050",
        },
        accent: {
          DEFAULT: "#2f6b3a",
          ink: "#0a0a0a",
        },
        surface: "#f4f4ee",
        line: "#e6e5dc",
      },
      fontFamily: {
        display: ["var(--font-display)", "Archivo", "Helvetica Neue", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        shell: "1320px",
      },
    },
  },
  plugins: [],
};

export default config;
