/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
      colors: {
        'PRIMARY' : {
          'DARKBLUE05' : '#091B6F',
          'DARKBLUE04' : '#0D28A6',
          'DARKBLUE03' : '#5E70C4',
          'DARKBLUE02' : '#AEB7E1',
          'DARKBLUE01' : '#CFD4ED',
          'LIMEGREEN05' : '#3D7B3F',
          'LIMEGREEN04' : '#5CB85F',
          'LIMEGREEN03' : '#92D094',
          'LIMEGREEN02' : '#C9E7CA',
          'LIMEGREEN01' : '#DEF1DF',

        },

        'ALERT' : {
          'DANGER' : '#FA2C5A',
          'WARNING' : '#F9CC00',
          'SUCCESS' : '#73CA5C'
        },

        'NEUTRAL' : {
          'NEUTRAL05' : '#151515',
          'NEUTRAL04' : '#3C3C3C',
          'NEUTRAL03' : '#8A8A8A',
          'NEUTRAL02' : '#D0D0D0',
          'NEUTRAL01' : '#FFFFFF',
        }
      }
    },
  },
  plugins: [],
}

