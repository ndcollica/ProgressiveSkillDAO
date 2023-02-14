/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkTheme: "scaffoldEthDark",
  // DaisyUI theme colors
  daisyui: {
    themes: [
      {
        scaffoldEth: {
          primary: "#93BBFB",
          "primary-content": "#212638",
          secondary: "#DAE8FF",
          "secondary-content": "#212638",
          accent: "#93BBFB",
          "accent-content": "#212638",
          neutral: "#212638",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#F9FBFF",
          "base-300": "#DAE8FF",
          "base-content": "#212638",
          info: "#93BBFB",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },

          [`input:-webkit-autofill.text-fill-gray-400,
            input:-webkit-autofill:hover.text-fill-gray-400,
            input:-webkit-autofill:focus.text-fill-gray-400,
            textarea:-webkit-autofill.text-fill-gray-400,
            textarea:-webkit-autofill:hover.text-fill-gray-400,
            textarea:-webkit-autofill:focus.text-fill-gray-400,
            select:-webkit-autofill.text-fill-gray-400,
            select:-webkit-autofill:hover.text-fill-gray-400,
            select:-webkit-autofill:focus.text-fill-gray-400`]: {
            // text-gray-400
            "-webkit-text-fill-color": "rgb(156 163 175)",
          },
        },
      },
      {
        scaffoldEthDark: {
          primary: "#212638",
          "primary-content": "#F9FBFF",
          secondary: "#2A3655",
          "secondary-content": "#F9FBFF",
          accent: "#4969A6",
          "accent-content": "#F9FBFF",
          neutral: "#F9FBFF",
          "neutral-content": "#385183",
          "base-100": "#385183",
          "base-200": "#2A3655",
          "base-300": "#212638",
          "base-content": "#F9FBFF",
          info: "#385183",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "hsl(var(--p))",
          },

          [`input:-webkit-autofill.text-fill-gray-400,
            input:-webkit-autofill:hover.text-fill-gray-400,
            input:-webkit-autofill:focus.text-fill-gray-400,
            textarea:-webkit-autofill.text-fill-gray-400,
            textarea:-webkit-autofill:hover.text-fill-gray-400,
            textarea:-webkit-autofill:focus.text-fill-gray-400,
            select:-webkit-autofill.text-fill-gray-400,
            select:-webkit-autofill:hover.text-fill-gray-400,
            select:-webkit-autofill:focus.text-fill-gray-400`]: {
            // text-gray-400
            "-webkit-text-fill-color": "rgb(156 163 175)",
          },
        },
      },
      {
        exampleUi: {
          primary: "#000000",
          "primary-content": "#ffffff",
          secondary: "#FF6644",
          "secondary-content": "#212638",
          accent: "#93BBFB",
          "accent-content": "#212638",
          neutral: "#f3f3f3",
          "neutral-content": "#212638",
          "base-100": "#ffffff",
          "base-200": "#f1f1f1",
          "base-300": "#d0d0d0",
          "base-content": "#212638",
          info: "#93BBFB",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
        },
      },
    ],
  },
  theme: {
    // Extend Tailwind classes (e.g. font-bai-jamjuree, animate-grow)
    extend: {
      fontFamily: {
        "bai-jamjuree": ["Bai Jamjuree", "sans-serif"],
      },
      keyframes: {
        grow: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "100%",
          },
        },
      },
      animation: {
        grow: "grow 5s linear infinite",
      },
    },
  },
};
