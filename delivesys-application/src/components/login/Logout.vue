<template>
	<v-overlay :opacity="0.3" :z-index="5">
		<div class="loading_indicator">
			<v-progress-circular indeterminate size="64"></v-progress-circular>
		</div>
		<h2>{{ text }}</h2>
	</v-overlay>
</template>
<script>
	export default {
		data() {
			return {
				text: "Voltando a tela Inicial",
			};
		},
		mounted() {
			this.$store.dispatch("logout").then(() => this.$router.push("/"));
		},
	};
</script>
<style></style>
