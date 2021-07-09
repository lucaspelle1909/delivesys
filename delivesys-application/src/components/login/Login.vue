<template>
	<v-card style="width: 35%" class="ma-auto py-10" elevation="4">
		<v-form ref="login" v-model="loginValid" class="ma-auto">
			<v-container style="width: 55%">
				<v-row>
					<v-text-field
						ref="userId"
						v-model="user.UserId"
						label="Usuário"
						required
					></v-text-field>
				</v-row>
				<v-row class="my-3">
					<v-text-field
						@keyup.enter="submitLogin"
						v-model="user.Password"
						label="Senha"
						type="password"
						required
					></v-text-field>
				</v-row>
			</v-container>
			<v-row class="justify-center">
				<v-btn class="px-5 white--text" :color="color" @click="submitLogin">
					Login
				</v-btn>
			</v-row>
		</v-form>
	</v-card>
</template>
<script>
	export default {
		data() {
			return {
				color: this.$vuetify.theme.themes.light.primary,
				loginValid: false,
				user: {
					UserId: "",
					Password: "",
				},
			};
		},
		computed: {
			errorOnLogin() {
				return this.$store.getters.errorOnLogin;
			},
		},
		methods: {
			submitLogin() {
				if (this.$refs.login.value) {
					this.$store.dispatch("submitLogin", this.user)
					.then(() => {
						if (this.errorOnLogin)
							this.errorLogin();
					});
				}
			},
			errorLogin() {
				setTimeout(() => {
					this.color = this.$vuetify.theme.themes.light.primary;
				}, 2500);
				this.color = this.$vuetify.theme.themes.light.error;
				this.user.UserId = "";
				this.user.Password = "";
				this.$refs.login.resetValidation();
				this.$refs.userId.focus();
			},
		},
	};
</script>
<style></style>
