/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          800: '#1a1b1e',
          900: '#141517',
        },
        blue: {
          500: '#3b82f6',
          600: '#2563eb',
        },
        'blue-gray': {
          900: '#4d5961',
          800: '#6b7883',
          700: '#8a98a3',
          600: '#acbac5',
          500: '#c0ccd5',
          400: '#d4dde4',
          300: '#e8eef2',
        }
      },
      boxShadow: {
        'cartoon': '2px 2px 0 #000',
        'cartoon-lg': '4px 4px 0 #000',
        'cartoon-xl': '6px 6px 0 #000',
      },
    },
  },
  plugins: [],
};