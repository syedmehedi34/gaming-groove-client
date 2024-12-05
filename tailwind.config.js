/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%);",
        image: "url('./public/cool-background.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
