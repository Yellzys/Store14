const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'daraz-primary': '#FFCC00', // Changed to yellow
        'daraz-orange': '#FFD700', // Changed to golden yellow
        'daraz-dark': '#333333',
        'daraz-gray': '#818181',
        'daraz-light-gray': '#f7f6f7',
        'daraz-brown': '#8B7500', // Changed to dark yellow
        'daraz-beige': '#FFF8DC', // Changed to light yellow/cornsilk
        'daraz-blue': '#FFE87C', // Changed to light yellow
        'yellzy-yellow': '#FFCC00',
        'yellzy-dark': '#333333',
        'yellzy-light': '#FFF8DC',
      },
      fontFamily: {
        'sans': ['EuclidCircularA', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-10px)" }
        },
        "slide-in": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" }
        },
        "slide-out": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" }
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" }
        },
        "pulse-light": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" }
        }
      },
      animation: {
        "fade-in": "fade-in 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "fade-out": "fade-out 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "slide-in": "slide-in 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "slide-out": "slide-out 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "scale-in": "scale-in 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "float": "float 3s ease-in-out infinite",
        "pulse-light": "pulse-light 2s ease-in-out infinite"
      },
      transitionTimingFunction: {
        "apple": "cubic-bezier(0.23, 1, 0.32, 1)"
      }
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}
