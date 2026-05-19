/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        primary: '#1A1A1A',
        accent: '#2A2A2A',
        border: '#E5E5E5',
        muted: '#737373',
        midnight: '#111524'
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
