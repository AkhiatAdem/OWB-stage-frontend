/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Assure-toi que cela inclut tous tes fichiers
  ],
  theme: {
    extend: {
      colors: {
        
        beige: '#CFB290', // Couleur beige
        brown: '#593E2B', // Couleur marron clair
        'brown-dark': '#4E2B1F', // Couleur marron foncé pour le survol
        'brown-darkest': '#3B1A10'
      },
    },
  },
  plugins: [],
};