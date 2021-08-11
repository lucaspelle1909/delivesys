import Vue from 'vue'
import Vuex from 'vuex'

import global from './modules/global'
import user from './modules/user'
import dialogs from './modules/dialogs'
import delivery from './modules/delivery'
import products from './modules/products'
import deliveryOrders from './modules/deliveryOrders'


Vue.use(Vuex)

const store = new Vuex.Store({
    modules: { global, user, dialogs, delivery, products, deliveryOrders }
})

export default store