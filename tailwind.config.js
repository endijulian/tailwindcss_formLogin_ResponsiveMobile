module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container : {
        ceneter: 'true',
        padding: '1rem',
      }
    },

    // colors:{
    //   primary: '#264653',
    //   danger : '#e76f51',
    // }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}
