<template>
	<v-dialog v-model="show" max-width="400px" persistent @click:outside="close()">
		<v-card>
			<v-card-title class="header secondary pt-1 pb-0 white--text"> {{ alertObject.title }} </v-card-title>
			<v-card-text class="pt-1 pb-1" style="color: black">
				<span> {{ alertObject.message }} </span>
			</v-card-text>

			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn class="font-weight-medium" color='secondary' outlined @click="close"
					>Cancelar</v-btn
				>

				<v-btn
					class="secondary white--text font-weight-medium"
					@click="confirmAction"
					>Confirmar</v-btn
				>
				<v-spacer></v-spacer>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>
<script>
	export default {
		props: {
			alertObject: {
				type: Object,
				require: true,
			},
		},
		data() {
			return {
				show: true,
			};
		},
		methods: {
			confirmAction() {
				this.$store.dispatch(
					this.alertObject.callStore,
					this.alertObject.parameterStore
				);
			},
			close() {
				this.$store.dispatch("closeAlertDialog");
			},
		},
	};
</script>
<style>
	.v-dialog > .v-card > .v-card__title {
		font-size: 18px;
		font-weight: 400;
		justify-content: center;
		padding: 5px 0px 5px;
	}
	.v-dialog > .v-card > .v-card__text span {
		font-size: 16px;
		font-weight: 500;
	}
</style>
