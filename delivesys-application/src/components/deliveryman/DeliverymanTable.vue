<template>
	<v-data-table
	:headers="headers"
	:items="deliveryCompanies"
	item-key="id"
	class="elevation-1 mx-3"
	:loading='loadingTable'
    loading-text="Carregando... Aguarde"
	:footer-props="{
		'items-per-page-text':'Entregadores por página'
	}">
		<template v-slot:top>
			<v-toolbar flat>
				<v-toolbar-title>Entregadores</v-toolbar-title>
				<v-divider
					class="mx-4"
					inset
					vertical
				/>
				<v-spacer />
				<v-btn
					color="primary"
					dark
					class="mb-2"
					@click='newDelivery()'
				>
              	Cadastrar
            	</v-btn>
			</v-toolbar>
		</template>
		<template v-slot:[`item.FullName`]="{ item }">
			<span>{{ item.FirstName +' '+ item.LastName }}</span>
		</template>
		<template v-slot:[`item.actions`]="{ item }">
		<v-icon
			small
			class="mr-2"
			@click="editDelivery(item)"
		>
			mdi-pencil
		</v-icon>
		<v-icon
			small
			@click="deleteDelivery(item)"
		>
			mdi-delete
		</v-icon>
		</template>
		<template v-slot:no-data>
			<span>Nenhum usuário cadastrado</span>
		</template>
	</v-data-table>
</template>
<script>
  export default {
    data() {
		return {
			headers: [
			{
				text: 'Nome',
				align: 'start',
				sortable: false,
				value: 'FullName',
				},
				{ text: 'CPF/CNPJ', value: 'CpfCnpj' },
				{ text: 'Usuário', value: 'Username' },
				{ text: 'Ações', value: 'actions', sortable: false }
			],
    	}
	},
	computed: {
        loadingTable(){
            return this.$store.getters.loadingTable
        },
		deliveryCompanies(){
			return this.$store.getters.deliveryman
		}
    },
    methods: {
		newDelivery(){
			this.$store.dispatch('showDialog', 3)
		},
      	editDelivery(item) {
			this.$store.dispatch('showDialog', 4)
            this.$store.dispatch("setItem", item);
      	},

      	deleteDelivery(item) {
			var alert = {
				title: "Remover Entregador",
				message: "Deseja Remover este Entregador?",
				callStore: "deleteDeliveryman",
				parameterStore: item.UserId,
			};
			console.log(item)
        	this.$store.dispatch("closeAlertDialog", alert);
      	},
    },
	created () {
		this.$store.dispatch('getDeliveryman')
    },
  }
</script>
<style></style>
