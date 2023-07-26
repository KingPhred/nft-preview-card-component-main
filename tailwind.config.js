/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        softblue: "hsl(215, 51%, 70%)",
        Cyan: "hsl(178, 100%, 50%)",
        verydarkblue: {
          line: "hsl(215, 32%, 27%)",
          cardbg: "hsl(216, 50%, 16%)",
          mainbg: "hsl(217, 54%, 11%)",
        }
      },

      fontFamily: {
        body: ['Outfit']
      }
    },
  },
  plugins: [],
}

