<template>
	<v-navigation-drawer
		absolute
		permanent
		:mini-variant.sync="mini"
		expand-on-hover
		left
		app
	>
		<template v-slot:prepend>
			<v-list class="py-0" dense nav>
				<v-list-item class="px-0">
					<v-list-item-avatar>
						<v-icon>mdi-menu</v-icon>
					</v-list-item-avatar>
					<v-list-item-content>
						<v-list-item-title class="title mt-2 pb-2"
							>Menu</v-list-item-title
						>
					</v-list-item-content>
				</v-list-item>

				<v-divider> </v-divider>

				<v-list-item link v-for="item in itemsMenu" :key="item.title">
					<v-list-item-icon>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</template>
	</v-navigation-drawer>
</template>
<script>
	export default {
		data() {
			return {
				mini: true,
				itemsMenu: [
					{ title: "Consulta", icon: "mdi-view-dashboard" },
					{ title: "Sobre", icon: "mdi-forum" },
				],
			};
		},
	};
</script>
<style></style>
