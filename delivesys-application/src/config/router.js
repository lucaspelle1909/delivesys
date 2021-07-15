import Vue from 'vue'
import Router from 'vue-router'

const Login = () => import(
  /* webpackMode: "lazy" */
  /* webpackPreload: true */
  /* webpackChunkName: "Login" */
  '@/components/login/App.vue'
)

const DeliveryCompanies = () => import(
  /* webpackMode: "lazy" */
  /* webpackPreload: true */
  /* webpackChunkName: "DeliveryCompanies" */
  '@/components/deliverycompany/DeliveryCompanies.vue'
)

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Login',
      component: Login
  },
  {
    path: '/DeliveryCompanies',
    name: 'DeliveryCompanies',
    component: DeliveryCompanies
  }]
})

export default router;