<template>
	<div>
		<AppBar />
		<NavigationDrawer />
		<Footer />
	</div>
</template>
<script>
	import AppBar from "@/components/template/layout/AppBar.vue"
	import Footer from "@/components/template/layout/Footer.vue"
	import NavigationDrawer from "@/components/template/layout/NavigationDrawer.vue"
	export default {
		components: {
			Footer,
			AppBar,
			NavigationDrawer
		},
	};
</script>
<style></style>
