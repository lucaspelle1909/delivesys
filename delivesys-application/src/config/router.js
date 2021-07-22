import Vue from 'vue'
import Router from 'vue-router'

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
		component: Home
	},
	{
		path: '/DeliverymanTable',
		name: 'DeliverymanTable',
		component: DeliverymanTable
	},
	{
		path: '/Products',
		name: 'Products',
		component: Products
	}]
})

export default router;