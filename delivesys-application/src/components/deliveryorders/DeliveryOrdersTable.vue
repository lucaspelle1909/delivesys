<template>
  <v-data-table
	:headers="headers"
	:items="deliveryOrders"
    item-key="id"
	class="elevation-1 mx-3"
    :loading='loadingTable'
    loading-text="Carregando... Aguarde"
	:footer-props="{
		'items-per-page-text':'Entregas por página'
	}">
		<template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title>Entregas</v-toolbar-title>
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
					@click='newDeliveryOrder()'
				>
              	Cadastrar
            	</v-btn>
            </v-toolbar>
		</template>
		<template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click.stop="editDeliveryOrder(item)">
                mdi-pencil
            </v-icon>
            <v-icon small @click.stop="deleteDeliveryOrder(item)"> mdi-delete </v-icon>
        </template>
		<template v-slot:no-data>
			<span>Nenhuma entrega cadastrada</span>
		</template>
	</v-data-table>
</template>

<script>
  export default {
    data: () => ({
      headers: [
        {
          text: 'Id',
          align: 'start',
          sortable: false,
          value: 'DeliveryId',
        },
        { text: 'Cliente', value: 'client.CustName' },
        { text: 'CPF/CNPJ', value: 'client.CpfCnpj' },
        { text: 'CEP', value: 'postalAddress.ZipCode' },
        { text: 'Data de entrega', value: 'DeliveryDateTime' },
        { text: 'Status', value: 'DeliveryStatus' },
        { text: 'Frete', value: 'FreightValue' },
        { text: 'Ações', value: 'actions', sortable: false }
      ],
    }),
    computed: {
        loadingTable(){
            return this.$store.getters.loadingTable
        },
        deliveryOrders(){
			console.log(this.$store.getters.deliveryOrders)
            return this.$store.getters.deliveryOrders
        }
    },
    methods: {
        newDeliveryOrder(){
			this.$store.dispatch('showDialog', 7)
		},
        editDeliveryOrder(item) {
            this.$store.dispatch('showDialog', 8)
            this.$store.dispatch("setItem", item)
        },
        deleteDeliveryOrder(item) {
            var alert = {
                title: "Remover entrega",
                message: "Deseja remover esta entrega?",
                callStore: "deleteDeliveryOrder",
                parameterStore: item.DeliveryId,
            };
            this.$store.dispatch("openAlertDialog", alert)
        },
    },
    created() {
        this.$store.dispatch('getDeliveryOrders');
    },
  }
</script>
<style></style>