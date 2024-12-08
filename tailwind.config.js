/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundHeader: "var(--background-header)",
        colorText: "var(--color-text)",
        backgroundButton: "var(--background-button)",
        colorLink: "var(--color-link)",
        backgroundMain: "var(--background-main)",
      },
      height: { 
        'mainHeight': 'calc(100vh - 80px)',
      }
    },
  },
  plugins: [],
};
