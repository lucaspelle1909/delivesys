<template>
	<v-app>
		<AppBar />
		<NavigationDrawer />
		<v-main>
			<DeliveryCompaniesTable />
		</v-main>
	</v-app>
</template>
<script>
	import AppBar from "@/components/template/layout/AppBar.vue"
	import NavigationDrawer from "@/components/template/layout/NavigationDrawer.vue"
	import DeliveryCompaniesTable from "@/components/deliverycompany/DeliveryCompaniesTable.vue"
	export default {
		components: {
			AppBar,
			DeliveryCompaniesTable,
			NavigationDrawer
		},
	};
</script>
<style></style>
