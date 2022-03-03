module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          light: '#233F3E',
          DEFAULT: '#131921',
        },
      },
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
   
  ],
}
