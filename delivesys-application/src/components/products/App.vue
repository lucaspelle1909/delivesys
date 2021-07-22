<template>
	<v-app>
		<Layout />
		<v-main>
			<ProductsTable />
		</v-main>
	</v-app>
</template>
<script>
	import Layout from "@/components/template/Layout.vue"
	import ProductsTable from "@/components/products/ProductsTable.vue"
	export default {
		components: {
			Layout,
			ProductsTable
		},
	};
</script>
<style></style>
