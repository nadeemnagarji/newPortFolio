/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    // colors:{
    //   "white":"#F1F1F1",
    //   "black":"#212121"
    // },
    fontFamily:{
      "neue":['"Neue Montreal"'],
      "nads":['Ojuju'],
      "main":['"Oswald"'],
      "logo":['Antonio']
    },
    backgroundImage:{
      "project":"url('/project1.svg')"
    },
    screens: {
      'sm-phone': '300px',
      "lg-phone":"450px",
      "tablet":'750px',
      "laptop":"1030px"
    },
  },
  plugins: [],
}

