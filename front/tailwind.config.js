/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "var(--clr-brand)",
        accent: "var(--clr-accent)",
        darkBrand: "#222",
      },
    },
  },
  plugins: [],
};
