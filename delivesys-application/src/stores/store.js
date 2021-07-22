import Vue from 'vue'
import Vuex from 'vuex'

import global from './modules/global'
import user from './modules/user'
import dialogs from './modules/dialogs'
import delivery from './modules/delivery'
import products from './modules/products'


Vue.use(Vuex)

const store = new Vuex.Store({
    modules: { global, user, dialogs, delivery, products }
})

export default store