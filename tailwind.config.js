/** @type {import('tailwindcss').Config} */

const customPlugin = require('./tailwind-custom-plugin');
const { mediaStyle } = require('./mediaStyle'); // 使用 require



module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // 確保這裡包含所有動態引入類名的文件
    './*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans', 'Noto Sans TC', 'sans-serif'],
        Baloo_Thambi: ['Baloo Thambi', 'sans-serif'],
      },
      backgroundColor: {
        "538AA2":"#538AA2",
        "CACACA":"#CACACA",
        "C3C3C3": "#C3C3C3",
        "FEFEFE": "#FEFEFE",
        "3F3F46": "#3F3F46",
        "D6D6D6" :"#D6D6D6",

      },
      backgroundImage: {
        'button_color_green': 'linear-gradient(to right, #399983, #538aa2)',
        "button_color_Light_green": "linear-gradient(93deg, #83BBAE -0.12%, #538AA2 99.93%)",
        'button_color_Light_green2': 'linear-gradient(93deg, rgba(57, 153, 131, 0.50) -0.12%, rgba(83, 138, 162, 0.50) 99.93%), #FFF',

        'button_color_hover': 'linear-gradient(to right, #3F3F46, #3F3F46)',
      },
      textColor: {
        "3F3F46": "#3F3F46",
        "538AA2": "#538AA2",
        "399983": "#399983",
        "83BBAE": "#83BBAE",
        "5A4B4B": "#5A4B4B",
        "AE2D2D" : "#AE2D2D",
        
      },
      colors: {
        "B3B3B3": "#B3B3B3",
      },
     
      screens: {
     
        
        md: '769px',
      },


      ...mediaStyle.theme.extend, 

    },

  },
  plugins: [customPlugin],
  



};
