<template>
	<v-app>
		<AppBar />
		<NavigationDrawer />
		<v-main>
			<CustomerTable />
		</v-main>
	</v-app>
</template>
<script>
	import AppBar from "@/components/template/layout/AppBar.vue"
	import NavigationDrawer from "@/components/template/layout/NavigationDrawer.vue"
	import CustomerTable from "@/components/customers/CustomerTable.vue"
	export default {
		components: {
			AppBar,
			NavigationDrawer,
			CustomerTable
		},
	};
</script>
<style></style>
