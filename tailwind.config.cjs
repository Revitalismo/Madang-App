/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["{html,jsx, css}"],
  theme: {
    fontFamily: {
      "Poppins": ["Poppins", "sans-serif"]
    },
    extend: {
      colors: {
        "dark-primary": "#1E1E1E",
        "light-primary": "#FFFFFF",
        "red-primary": "#E61931",

        "dark-secondary": "#373737",
        "light-secondary": "#E6E6E6",
        "red-secondary": "#EB475A"
      },

      boxShadow: {
        "100": "0 0 30px 0 rgba(69, 69, 69, 0.11)"
      }
    },
  },
  plugins: [],
}
