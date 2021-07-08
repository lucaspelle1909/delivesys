import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://localhost:44341/'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios
    }
})