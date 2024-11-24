/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#5151e5",
          dark: "#4040b3", // darker shade of primary
        },
        secondary: {
          DEFAULT: "#43cbff",
          dark: "#35a2cc", // darker shade of secondary
        },
        ternary: {
          DEFAULT: "#00ebb6",
          dark: "#00bc92", // darker shade of ternary
        },
      },
    },
  },
  plugins: [],
};
