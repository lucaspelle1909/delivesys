import Vue from 'vue'
import Router from 'vue-router'

// Correção de versão que torna o retorno do push uma Promise
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

const Login = () => import(
	/* webpackMode: "lazy" */
	/* webpackPreload: true */
	/* webpackChunkName: "Login" */
	'@/components/login/App.vue'
)

const Home = () => import(
	/* webpackMode: "lazy" */
	/* webpackPreload: true */
	/* webpackChunkName: "Home" */
	'@/components/home/App.vue'
)

const DeliverymanTable = () => import(
	/* webpackMode: "lazy" */
	/* webpackPreload: true */
	/* webpackChunkName: "deliverymanTable" */
	'@/components/deliveryman/App.vue'
)

const Products = () => import(
	/* webpackMode: "lazy" */
	/* webpackPreload: true */
	/* webpackChunkName: "Products" */
	'@/components/products/App.vue'
)

const DeliveryOrders = () => import(
	/* webpackMode: "lazy" */
	/* webpackPreload: true */
	/* webpackChunkName: "Products" */
	'@/components/deliveryorders/App.vue'
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
		path: '/Home',
		name: 'Home',
		component: Home,
		meta: { requireLogin: true }
	},
	{
		path: '/DeliverymanTable',
		name: 'DeliverymanTable',
		component: DeliverymanTable,
		meta: { requireLogin: true }
	},
	{
		path: '/Products',
		name: 'Products',
		component: Products,
		meta: { requireLogin: true }
	},
	{
		path: '/DeliveryOrders',
		name: 'DeliveryOrders',
		component: DeliveryOrders,
		meta: { requireLogin: true }
	},
	// Redirect
	{ path: '*', redirect: '/Home' }]
})

router.beforeEach((to, from, next) => {
	let isLogged = localStorage.getItem('accessToken') != null

    if (to.matched.some(x => x.meta.requireLogin) && !isLogged)
		next("/")
	else
		next()
})

export default router;