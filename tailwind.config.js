module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#1DC0AD',
        'main-hover': '#2EB086',
        'trans' : '#7F7F7F',
        'test' : '#0F0E0E'
      },
      fontFamily: {
        'display' : ['Nunito', 'sans-serif'],
        'display2' : ['Montserrat Alternates', 'sans-serif']
      },
      fontWeight: {
      'extra-light': 100,
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
      'extra-bold': 800,
      black: 900,
      },
      fontSize: {
        'sxs': '.68rem',
      }
    },
  },
  plugins: [],
}
