<template>
	<v-sheet style='flex:1 1 !important' class='d-flex justify-center'>
		<v-card style='min-width:40%' class="ma-auto pa-2 d-flex flex-column" elevation="4">
			<v-img
			src="@/assets/logo-delivesys.png"
			style='min-width: 400px'
			aspect-ratio="3"
			contain />
			<v-form ref="login" v-model="loginValid" class="px-8">
				<v-card-text>
					<v-row align='center'>
						<v-text-field
							ref="userId"
							v-model="user.UserId"
							label="Usuário"
							required
						></v-text-field>
					</v-row>
					<v-row align='center'>
						<v-text-field
							@keyup.enter="submitLogin"
							v-model="user.Password"
							label="Senha"
							type="password"
							required
						></v-text-field>
					</v-row>
				</v-card-text>
				<v-card-actions>
					<v-spacer />
					<v-btn class="white--text px-5 py-1" :color="color" @click="submitLogin">
						Login
					</v-btn>
				</v-card-actions>
			</v-form>
		</v-card>
	</v-sheet>
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
