import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/config/vuetify.js'
import router from '@/config/router.js'
import store from '@/store/store.js'

import '@/config/axios.js'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')