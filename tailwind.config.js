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
        'eden-green': '#2D4B3E',
        'eden-beige': '#F5F2ED',
        'eden-earth': '#8C7A6B',
        'eden-leaf': '#6B8E23',
      },
      fontFamily: {
        'lofi': ['Courier New', 'Courier', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
