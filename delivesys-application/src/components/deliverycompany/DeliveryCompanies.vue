<template>
	<v-app>
		<AppBar />
		<v-main><DeliveryCompaniesTable /></v-main>
	</v-app>
</template>
<script>
	import AppBar from "@/components/template/layout/AppBar.vue";
	import DeliveryCompaniesTable from "@/components/deliverycompany/DeliveryCompaniesTable.vue";
	export default {
		components: {
			AppBar,
			DeliveryCompaniesTable
		},
	};
</script>
<style></style>
