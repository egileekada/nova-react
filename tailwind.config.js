/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@shadcn/ui/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5A20D5',
        secondary: '#1f2937',
        background: '#0a1018',
        text: {
          primary: '#ffffff',
          secondary: '#8A8F98'
        }
      }
    },
  },
  plugins: [],
} 