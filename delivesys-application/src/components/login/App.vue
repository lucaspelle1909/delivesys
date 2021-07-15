<template>
	<v-app>
		<AppBar />
		<Login />
	</v-app>
</template>
<script>
	import AppBar from "@/components/template/layout/AppBar.vue"
	import Login from "@/components/login/Login.vue"
	export default {
		components: {
			AppBar,
			Login,
		},
	};
</script>
<style></style>
