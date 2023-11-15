/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#18181b',
        secondary: '#881337',
        dimWhite: 'rgba(255, 255, 255, 0.7)',
        dimWhiteReduced: 'rgba(255, 255, 255, 0.1)',
        dimRose: 'rgba(251, 113, 133, 0.9)',
      },
      fontFamily: {
        worksans: ['Work Sans', 'sans-serif'],
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
};
