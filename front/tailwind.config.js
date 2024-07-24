/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#422b75",
        accent: "#bf9666",
      },
    },
  },
  plugins: [],
};
