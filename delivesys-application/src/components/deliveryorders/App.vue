<template>
	<v-app>
		<Layout />
		<v-main>
			<DeliveryOrdersTable />
		</v-main>
	</v-app>
</template>
<script>
	import Layout from "@/components/template/Layout.vue"
	import DeliveryOrdersTable from "@/components/deliveryorders/DeliveryOrdersTable.vue"
	export default {
		components: {
			Layout,
			DeliveryOrdersTable
		},
	};
</script>
<style></style>
