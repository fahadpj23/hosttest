/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        PageHeight: "calc(100vh - 2rem)",
      },
    },
  },
  plugins: [],
};
