import Vue from 'vue'
import App from './App.vue'
import Contador from './Contador.vue'
import Quadro from './Quadro.vue'

Vue.config.productionTip = false
Vue.component('app-contador', Contador)
Vue.component('app-quadro', Quadro)

new Vue({
  render: h => h(App)
}).$mount('#app')
