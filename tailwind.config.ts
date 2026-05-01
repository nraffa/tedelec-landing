import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1B1F23",
          soft: "#3A3F44",
          muted: "#6B7178",
        },
        paper: {
          DEFAULT: "#FAFAF7",
          warm: "#F2F1EC",
        },
        spark: {
          DEFAULT: "#7FBA42",
          deep: "#5E9530",
          glow: "#E8F3D7",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
        shell: "1180px",
      },
      letterSpacing: {
        tightish: "-0.015em",
        tighter2: "-0.03em",
      },
    },
  },
  plugins: [],
};

export default config;
