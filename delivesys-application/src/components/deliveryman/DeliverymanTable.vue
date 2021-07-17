<template>
	<v-data-table
	:headers="headers"
	:items="deliveryCompanies"
	sort-by="calories"
	class="elevation-1 mx-3"
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
			<v-dialog
				v-model="dialog"
				max-width="500px">
				<template v-slot:activator="{ on, attrs }">
					<v-btn
						color="primary"
						dark
						class="mb-2"
						v-bind="attrs"
						v-on="on"
					>
						Cadastrar
					</v-btn>
				</template>
				<v-card>
					<v-card-title>
						<span class="text-h5">{{ formTitle }}</span>
					</v-card-title>

					<v-card-text>
						<v-container>
						<v-row>
							<v-col cols="12">
							<v-text-field
								label="Nome"
								v-model="editedItem.Name"
								required
							></v-text-field>
							</v-col>
							<v-col cols="12">
							<v-text-field
								label="CPF/CNPJ"
								v-model="editedItem.CpfCnpj"
								required
							></v-text-field>
							</v-col>
							<v-col cols="12">
							<v-text-field
								label="Usuário"
								v-model="editedItem.UserId"
								required
							></v-text-field>
							</v-col>
							<v-col cols="12">
							<v-text-field
								label="Senha"
								type="password"
								v-model="editedItem.Password"
								required
							></v-text-field>
							</v-col>
						</v-row>
						</v-container>
					</v-card-text>

					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn
							color="blue darken-1"
							text
							@click="close"
						>
						Cancelar
						</v-btn>
						<v-btn
							color="blue darken-1"
							text
							@click="save"
						>
						Salvar
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>
			<v-dialog v-model="dialogDelete" max-width="500px">
				<v-card>
				<v-card-title class="text-h5">Você tem certeza de que deseja excluir este entregador?</v-card-title>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="blue darken-1" text @click="closeDelete">Não</v-btn>
					<v-btn color="blue darken-1" text @click="deleteItemConfirm">Sim</v-btn>
					<v-spacer></v-spacer>
				</v-card-actions>
				</v-card>
			</v-dialog>
			</v-toolbar>
		</template>
		<template v-slot:[`item.actions`]="{ item }">
		<v-icon
			small
			class="mr-2"
			@click="editItem(item)"
		>
			mdi-pencil
		</v-icon>
		<v-icon
			small
			@click="deleteItem(item)"
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
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Nome',
          align: 'start',
          sortable: false,
          value: 'Name',
        },
        { text: 'CPF/CNPJ', value: 'CpfCnpj' },
        { text: 'Usuário', value: 'UserId' },
        { text: 'Ações', value: 'actions', sortable: false }
      ],
      deliveryCompanies: [],
      editedIndex: -1,
      editedItem: {
				Name: "",
				CpfCnpj: "",
        UserId: "",
        Password:""
      },
      defaultItem: {
				Name: "",
				CpfCnpj: "",
        UserId: "",
        Password:""
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Novo entregador' : 'Editar entregador'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.deliveryCompanies = [
          {
			Name: "Gugu",
			CpfCnpj: "942423104-52",
            UserId: "",
            Password:""
          }
        ]
      },

      editItem (item) {
        this.editedIndex = this.deliveryCompanies.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.deliveryCompanies.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.deliveryCompanies.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.deliveryCompanies[this.editedIndex], this.editedItem)
        } else {
          this.deliveryCompanies.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>
<style></style>
