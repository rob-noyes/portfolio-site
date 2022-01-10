module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F2F2F2',
        secondary: '#0D0D0D',
        head: '#333',
        tertiary: '#A6A6A6',
        four: '#C4D4F2',
        five: '#99AFF2',
      },
      fontSize: {
        micro: '0px',
        responsive: '3.125vw',
        growing: '2.125vw',
      },
      padding: {
        third: '23%',
        two: '15%',
        one: '40%',
        extra: '50%',
      },
      height: {
        almostFull: '80vh',
      },
    },
    fontFamily: {
      aktiv: ['aktiv-grotesk', 'sans-serif'],
    },
  },
  plugins: [],
};
