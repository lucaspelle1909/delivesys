<template>
	<div>
		<AppBar />
		<NavigationDrawer />
		<Footer />
	</div>
</template>
<script>
	import AppBar from "@/components/layout/AppBar.vue";
	import Footer from "@/components/layout/Footer.vue";
	import NavigationDrawer from "@/components/layout/NavigationDrawer.vue";
	export default {
		components: {
			Footer,
			AppBar,
			NavigationDrawer
		},
	};
</script>
<style></style>
