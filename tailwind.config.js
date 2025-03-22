/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1DB954', // Spotify green
          dark: '#1AA34A',
          light: '#3DCB6C',
        },
        dark: {
          DEFAULT: '#121212',
          lighter: '#181818',
          light: '#282828',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

