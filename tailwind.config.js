/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1a1a1d",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%);",
        image: "url('./cool-background.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
