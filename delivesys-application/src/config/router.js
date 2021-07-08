import Vue from 'vue'
import Router from 'vue-router'

const Login = () => import(
  /* webpackMode: "lazy" */
  /* webpackPreload: true */
  /* webpackChunkName: "AppCodeRedirect" */
  '@/components/Login/App.vue'
)

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Login',
      component: Login
  }]
})

export default router;