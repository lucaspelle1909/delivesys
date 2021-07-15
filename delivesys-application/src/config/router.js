import Vue from 'vue'
import Router from 'vue-router'

const App = () => import(
  /* webpackMode: "lazy" */
  /* webpackPreload: true */
  /* webpackChunkName: "AppCodeRedirect" */
  '@/components/login/App.vue'
)

const DeliveryCompanies = () => import(
  /* webpackMode: "lazy" */
  /* webpackPreload: true */
  /* webpackChunkName: "AppCodeRedirect" */
  '@/components/deliverycompany/DeliveryCompanies.vue'
)

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'App',
      component: App
  },
  {
    path: '/DeliveryCompanies',
    name: 'DeliveryCompanies',
    component: DeliveryCompanies
  }]
})

export default router;