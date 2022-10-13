/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rod: "#CF1919",
        mellemrod: "#a80909",
        gul: "#F4F465",
        mellemgul: "#d6d63e",
        moerkgul: "#565606",
        sort: "#36322d",
        bla: "#008180",
        blabla: "#006969",
        lysbla: "#E5F2F2",
        offwhite: "#e6e5e5",
        pink: "#e500b3",
        lilla: "#460137",
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
