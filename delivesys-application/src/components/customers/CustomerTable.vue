<template>
	<v-data-table
	:headers="headers"
	:items="customers"
	item-key="id"
	class="elevation-1 mx-3"
	:loading='loadingTable'
    loading-text="Carregando... Aguarde"
	:footer-props="{
		'items-per-page-text':'Clientes por página'
	}">
		<template v-slot:top>
			<v-toolbar flat>
				<v-toolbar-title>Clientes</v-toolbar-title>
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
					@click='newCustomers()'
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
			@click="editCustomers(item)"
		>
			mdi-pencil
		</v-icon>
		<v-icon
			small
			@click="deleteCustomers(item)"
		>
			mdi-delete
		</v-icon>
		</template>
		<template v-slot:no-data>
			<span>Nenhum cliente cadastrado</span>
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
				value: 'CustName',
				},
				{ text: 'CPF/CNPJ', value: 'CpfCnpj' },
				{ text: 'Contato', value: '' },
				{ text: 'Ações', value: 'actions', sortable: false }
			],
    	}
	},
	computed: {
        loadingTable(){
            return this.$store.getters.loadingTable
        },
		customers(){
			return this.$store.getters.customers
		}
    },
    methods: {
		newCustomers(){
			this.$store.dispatch('showDialog', 5)
		},
      	editCustomers(item) {
			this.$store.dispatch('showDialog', 6)
            this.$store.dispatch("setItem", item);
      	},

      	deleteCustomers(item) {
			var alert = {
				title: "Remover Cliente",
				message: "Deseja Remover este Cliente?",
				callStore: "deleteCustomers",
				parameterStore: item.UserId,
			};
        	this.$store.dispatch("openAlertDialog", alert);
      	},
    },
	created () {
		this.$store.dispatch('getCustomers')
    },
  }
</script>
<style></style>
