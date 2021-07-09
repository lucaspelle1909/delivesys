import Vue from 'vue'
import App from '@/App.vue'
import vuetify from '@/config/vuetify'
import router from '@/config/router'
import Axios from '@/config/axios'
import store from '@/stores/store'

Vue.prototype.$axios = Axios();

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')