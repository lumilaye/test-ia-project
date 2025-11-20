export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          darkRed: '#880D1E',
          red: '#DD2D4A',
          pink: '#F26A8D',
          lightPink: '#F49CBB',
          iceBlue: '#CBEEF3',
        }
      },
      backgroundImage: {
        'starry-sky': "radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 3px), radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 2px), radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 3px)",
      }
    },
  },
  plugins: [],
}
