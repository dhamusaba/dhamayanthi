/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","/src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors:{
        "dodgeroll-gold": "#F79F1A",
        "apple-green": "#B46E1B",
        "dir-wolf": "#292727"
      },
    },
    fontFamily:{
       Monserrat: "Monserrat, sans-serif",
    },
    container:{
      center:true,
      padding: "2rem",
    },
  },
  plugins: [],
};

