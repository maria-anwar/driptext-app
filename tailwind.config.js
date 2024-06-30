/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xxxs':'150',
      'xxs':'250px',
      'xs': '375px',
      'sm':  '550px',
      'md': '640px', 
      'lg': '768px',
      'xl': '992px',
      '2xl': '1024px',
      '3xl': '1221px',
      '4xl': '1536px',
      '5xl': '1800px',
      '6xl': '2280px',
      '7xl': '2600px',
      '8xl': '3000px',
      '9xl': '3400px',
      '10xl': '3900px',
      '11xl': '4300px',
      '12xl': '4700px',
      '13xl': '5000px',
    },
    extend: {
      colors: {
        'custom-blue': '#1985C2',
        'custom-yellow': '#FFCE22',
        'dark-blue': '#101E33',
        'custom-black':'#313C49',
      },
      fontFamily: {
        sans: ['sans-serif'], 
      },
    },
  },
  plugins: [],
}
