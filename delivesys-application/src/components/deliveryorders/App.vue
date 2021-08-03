<template>
	<v-app>
		<Layout />
		<v-main>
			<DeliveryOrders />
		</v-main>
	</v-app>
</template>
<script>
	import Layout from "@/components/template/Layout.vue"
	import DeliveryOrders from "@/components/deliveryorders/DeliveryOrders.vue"
	export default {
		components: {
			Layout,
			DeliveryOrders
		},
	};
</script>
<style></style>
