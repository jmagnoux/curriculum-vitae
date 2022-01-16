import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#575556',
        secondary: '#FFFFFF',
        light: '#FFFFFF',
        grey: '#A8AAA9',
        blue: '#24445C',
        orange: {
          base: '#B36700'
        }
      },
      dark: {
        primary: '#FFFFFF',
        secondary: '#575556',
        light: '#FFFFFF',
        grey: '#575556',
        blue: '#6a90a3',
        orange: {
          base: '#F4A426'
        }
      }
    }
  }
})

export default vuetify
