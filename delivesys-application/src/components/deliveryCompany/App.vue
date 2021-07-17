<template>
	<v-app>
		<AppBar />
		<NavigationDrawer />
		<v-main>
			<DeliverymanTable />
		</v-main>
	</v-app>
</template>
<script>
	import AppBar from "@/components/template/layout/AppBar.vue"
	import NavigationDrawer from "@/components/template/layout/NavigationDrawer.vue"
	import DeliverymanTable from "@/components/deliveryCompany/DeliverymanTable.vue"
	export default {
		components: {
			AppBar,
			DeliverymanTable,
			NavigationDrawer
		},
	};
</script>
<style></style>
