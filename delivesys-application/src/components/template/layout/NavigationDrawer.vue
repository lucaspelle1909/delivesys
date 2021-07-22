<template>
	<v-navigation-drawer
		permanent
		:mini-variant.sync="mini"
		expand-on-hover
		left
		fixed
		app
	>
		<v-card>
			<v-list class="py-0" dense nav>
				<v-list-item-group v-model="selectedItem">
					<v-list-item disabled class="elevation-2">
						<v-list-item-avatar>
							<v-icon>mdi-menu</v-icon>
						</v-list-item-avatar>
						<v-list-item-content>
							<v-list-item-title class="title mt-2 pb-2"
								>Menu</v-list-item-title
							>
						</v-list-item-content>
					</v-list-item>
					<v-list-item
						v-for="item in itemsMenu"
						:key="item.title"
						:to="item.routerPath"
						link
					>
						<v-list-item-icon>
							<v-icon>{{ item.icon }}</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>{{ item.title }}</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-card>
	</v-navigation-drawer>
</template>
<script>
	export default {
		data() {
			return {
				mini: true,
				selectedItem: "",
				itemsMenu: [
					{
						title: "Página Inicial",
						icon: "mdi-view-dashboard",
						routerPath: "/home",
					},
					{
						title: "Entregadores",
						icon: "mdi-forum",
						routerPath: "/DeliverymanTable",
					},
					{
						title: "Produtos",
						icon: "mdi-store",
						routerPath: "/products",
					},
					{
						title: "Fazer Logout",
						icon: "mdi-logout",
						routerPath: "/logout",
					},
				],
			};
		},
	};
</script>
<style>
.theme--light.v-list-item--link:not(.v-list-item--disabled) {
		padding-left: 15px;
		padding-right: 0px;
	}

	.v-list-item.v-list-item--disabled.v-list-item--link.theme--light {
		color: black;
		font-weight: 400;
		background-color: #10ADD6;
	}

	.v-list--nav .v-list-item,
	.v-list--nav .v-list-item:before {
		border-radius: 0px;
	}

	.v-list--nav {
		padding-left: 0px;
		padding-right: 0px;
	}
</style>
