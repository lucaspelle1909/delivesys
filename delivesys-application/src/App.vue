<template>
	<v-app>
		<AppGlobalInicialization />
		<transition name="slide-fade">
			<router-view />
		</transition>
	</v-app>
</template>
<script>
import AppGlobalInicialization from '@/components/template/AppGlobalInicialization.vue'
export default {
	components:{
		AppGlobalInicialization
	},
	methods: {
		beforeunloadFn(e) {
			this.$store.commit('saveUserDataInStore')
		}
	},
	beforeCreate() {
		this.$store.commit('initialiseStore')
		window.addEventListener('beforeunload', e => this.beforeunloadFn(e))
	},
	destroyed() {
		window.removeEventListener('beforeunload', e => this.beforeunloadFn(e))
	}
}
</script>
<style>
	html {
		font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
			Roboto, "Helvetica Neue", Arial, sans-serif;
		font-size: 16px;
		word-spacing: 1px;
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		box-sizing: border-box;
		scroll-behavior: smooth;

	}
</style>
