<template>
	<v-app>
		<Layout />
		<v-main>
			<Home />
		</v-main>
	</v-app>
</template>
<script>
	import Layout from "@/components/template/Layout.vue"
	import Home from "@/components/home/Home.vue"
	export default {
		components: {
			Layout,
			Home
		},
	};
</script>
<style></style>
