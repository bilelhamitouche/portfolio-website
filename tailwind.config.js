/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: "Playfair Display",
        primary: "Inter",
      },
    },
  },
  plugins: [],
};
