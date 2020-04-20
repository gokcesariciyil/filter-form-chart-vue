import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import {router} from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import HighchartsVue from 'highcharts-vue'
Vue.prototype.$eventBus = new Vue()

Vue.use(HighchartsVue)
Vue.use(Vuex)
Vue.use(VueAxios, axios)
 
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)


new Vue({
  el: '#app',
  render: h => h(App),
  router,
})
