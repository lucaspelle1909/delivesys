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
	import DeliverymanTable from "@/components/deliveryman/DeliverymanTable.vue"
	export default {
		components: {
			AppBar,
			NavigationDrawer,
			DeliverymanTable
		},
	};
</script>
<style></style>
