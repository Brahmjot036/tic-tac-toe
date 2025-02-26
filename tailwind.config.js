/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'working-img': "url('/work-proceess.webp')"
      },
      fontFamily: {
        'primary': ["Poppins", "sans-serif"],
        'secondary': ["Syne", "sans-serif"],
        'bonheur': ["Bonheur Royale", "serif"], 
        'cinzel': ["Cinzel", "serif"] 
      },
      colors: {
        'heroBg': "#151515",
        'para': "rgb(0 0 0 / 80%)",
        'primary': '#06a055'
      }
    },
  },
  plugins: [],
}
