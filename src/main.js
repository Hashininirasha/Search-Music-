import Vue from 'vue'
import App from './App.vue'
import Navbar from './Components/Navbar.vue'

Vue.component('app-Navbar',Navbar);

new Vue({
  el: '#app',
  render: h => h(App)
})
