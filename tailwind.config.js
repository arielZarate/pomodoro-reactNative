/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", // Incluye el archivo App
    "./src/**/*.{js,jsx,ts,tsx}", // Busca en todos los archivos dentro de la carpeta src
    ".app.d.ts",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", // Incluye el archivo App
    "./src/**/*.{js,jsx,ts,tsx}", // Busca en todos los archivos dentro de la carpeta src
    ".app.d.ts",
  ],
  theme: {
    extend: {},
  },

  safelist: ["bg-yellow-300","bg-green-300"],
  plugins: [],
};
