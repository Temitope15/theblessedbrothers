/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Navy for strong contrast and professional look
        primary: {
          DEFAULT: '#0F172A', 
          light: '#1E293B',
        },
        // Gold/Bronze for the premium accent
        accent: {
          DEFAULT: '#D4AF37', 
          hover: '#B5952F',
        },
        // Off-white for background (easier on eyes than pure white)
        surface: '#F8FAFC',
      },
      fontFamily: {
        // Serif for Headings (Classy)
        serif: ['"Playfair Display"', 'serif'],
        // Clean Sans for Body (Readable)
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}