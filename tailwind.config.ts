import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    colors: {
      /* Primary */
      darkCyan: "#3c8067",
      veryDarkCyan: "#1a4031",
      cream: "#f2ebe3",

      /* Neutral */
      white: "#ffffff",
      veryDarkBlue: "#1c232b",
      darkGrayishBlue: "#6c7289",
    },
    fontFamily: {
      montserrat: "var(--montserrat)",
      fraunces: "var(--fraunces)",
    },
    fontWeight: {
      medium: "500",
      bold: "700",
    },
  },
  plugins: [],
};

export default config;
