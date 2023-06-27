/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "2px 5px 10px 0px rgba(0, 0, 0, 0.10)",
      },
      gridTemplateColumns: {
        table: "80px repeat(5, minmax(150px, 1fr)) 80px",
      },
    },
  },
  plugins: [],
};
