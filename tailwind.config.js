/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-bg": "hsl(207, 26%, 17%)",
        "dark-elements": "hsl(209, 23%, 22%)",
        "dark-input": "hsl(0, 0%, 100%)",
        "dark-text": "hsl(0, 0%, 100%)",

        "light-bg": "hsl(0, 0%, 98%)",
        "light-elements": "hsl(0, 0%, 100%)",
        "light-input": "hsl(0, 0%, 52%)",
        "light-text": "hsl(200, 14%, 8%)",

        "box-shadow": "rgba(0, 0, 0, 0.06)",
      },
      screens: {
        'xsm': '450px'
      }
    },
  },
  plugins: [],
};
