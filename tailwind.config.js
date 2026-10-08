/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Mungo: {
          green: '#2bc2a7',
          dark: '#1e293b',
          gray: '#475569',
          light: '#f0fbf9',
          accent: '#28c4b1',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Fredoka', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
