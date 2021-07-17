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
	/* webpackChunkName: "Login" */
	'@/components/home/App.vue'
)

const DeliveryCompanies = () => import(
	/* webpackMode: "lazy" */
	/* webpackPreload: true */
	/* webpackChunkName: "DeliveryCompanies" */
	'@/components/deliveryCompany/App.vue'
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
		path: '/DeliveryCompanies',
		name: 'DeliveryCompanies',
		component: DeliveryCompanies
	}]
})

export default router;