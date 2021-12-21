import Vue from 'vue'
import Validations from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter.js'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

Vue.config.productionTip = false
Vue.use(Validations)

Vue.filter('date', dateFilter)

// import { email, reqiered, minLength } from 'vuelidate/lib/validators'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
