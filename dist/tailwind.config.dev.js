"use strict";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public**/*figma.html"],
  theme: {
    extend: {
      backgroundColor: {
        'bodyColor': '#F8FFFF'
      },
      container: {
        '80%': '80%'
      },
      mt: {
        'mrg': '900px'
      }
    }
  },
  plugins: []
};