/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gul: "#F4F465",
        mellemgul: "#d6d63e",
        moerkgul: "#565606",
        sort: "#36322d",

        offwhite: "#e6e5e5",
        pink: "#e500b3",
        lilla: "#460137",
        moerklilla: "#2c0022",
        blaa: "#19007b",
        lysgul: "#ffffe0",
        lysblaa: "#f8faff",
        mellemblaa: "#1877f2",
      },
    },
    fontFamily: {
      sans: ["Helvetica", "Arial", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
