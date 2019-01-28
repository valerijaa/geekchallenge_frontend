import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store'
import Vuelidate from 'vuelidate'


Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(require('vue-moment'));

    
/*   eslint-disable no-console */
console.log(process.env);
/* eslint-enable no-console */

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
 