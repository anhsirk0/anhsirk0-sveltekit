const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      width: {
        18: "4.5rem",
      },
      borderWidth: {
        1: "1px",
      },
      keyframes: {
        wave: {
          "20%": { transform: "rotate(-8deg)" },
          "10%, 30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
          "0%, 65%, 100%": { transform: "rotate(0)" },
        },
      },
      animation: {
        wave: "wave 2s ease-in-out 0s infinite",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#6698ff",
          "primary-focus": "#3568d4",
          "primary-content": colors.slate[200],
          secondary: colors.blue[400],
          "secondary-focus": colors.blue[600],
          "secondary-content": colors.slate[400],
          accent: "#39d98a",
          "accent-focus": "#06c270",
          "accent-content": colors.slate[200],
          neutral: colors.slate[600],
          "neutral-focus": colors.slate[700],
          "neutral-content": colors.slate[200],
          "base-100": "#737384",
          "base-200": "#20212f",
          "base-300": "#16161e",
          "base-content": colors.slate[200],
          info: colors.emerald[400],
          success: colors.green[600],
          warning: "#ff9900",
          error: colors.rose[500],
        },
      },
    ],
  },
};
