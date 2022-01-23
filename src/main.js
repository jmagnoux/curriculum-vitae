import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

const kode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const length = kode.length
let pos = 0
document.addEventListener('keydown', function (event) {
  if (event.keyCode === kode[pos++]) {
    if (length === pos) {
      const audio = new Audio(require('./assets/konami-code.mp3'))
      audio.play()
      pos = 0 // ability to start over
      return false
    }
  } else {
    pos = 0
  }
}, false)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
