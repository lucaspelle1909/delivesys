<template>
  <v-data-table
	:headers="headers"
	:items="products"
    item-key="id"
	class="elevation-1 mx-3"
    :loading='loadingTable'
    loading-text="Carregando... Aguarde"
	:footer-props="{
		'items-per-page-text':'Produtos por página'
	}">
		<template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title>Produtos</v-toolbar-title>
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
					@click='newProduct()'
				>
              	Cadastrar
            	</v-btn>
            </v-toolbar>
		</template>
		<template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click.stop="editProduct(item)">
                mdi-pencil
            </v-icon>
            <v-icon small @click.stop="deleteProduct(item)"> mdi-delete </v-icon>
        </template>
		<template v-slot:no-data>
			<span>Nenhum Produto cadastrado</span>
		</template>
	</v-data-table>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      products: [],
      headers: [
        {
          text: 'Id',
          align: 'start',
          sortable: false,
          value: 'itemId',
        },
        { text: 'Nome', value: 'name' },
        { text: 'Preço', value: 'valueAmount' },
        { text: 'Ações', value: 'actions', sortable: false }
      ],
    }),
    computed: {
        loadingTable(){
            return this.$store.getters.loadingTable;
        }
    },
    methods: {
        newProduct(){
			this.$store.dispatch('showDialog', 1)
		},
        editProduct(item) {
            this.$store.dispatch('showDialog', 2)
            this.$store.dispatch("setItem", item);
        },
        deleteProduct(item) {
            var alert = {
                title: "Remover loja",
                message: "Deseja Remover esta loja?",
                callStore: "deleteProduct",
                parameterStore: item.id,
            };
            this.$store.dispatch("openAlertDialog", alert);
        },
    },
    created() {
        this.$store.dispatch('getProducts');
        this.products = this.$store.getters.products;
    },
  }
</script>
<style></style>