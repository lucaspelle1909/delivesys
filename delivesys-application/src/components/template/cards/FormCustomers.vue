<template>
	<div style="height: 100%">
		<v-card-title class="headline header"> {{ title }} </v-card-title>
		<v-card-text class="pb-0">
			<v-form ref="form" lazy-validation>
				<v-container>
					<v-row>
						<v-col cols="12" sm="6" md="4">
							<v-text-field
								v-model="item.CustName"
								label="Nome"
								:rules="[(v) => !!v || 'Este campo não pode ser vazio']"
								required />
						</v-col>
						<v-col cols="12" sm="6" md="4">
                             <v-menu
								v-model="datePicker"
								:close-on-content-click="false"
								transition="scale-transition"
								offset-y
								max-width="290px"
								min-width="auto"
								>
								<template v-slot:activator="{ on, attrs }">
									<v-text-field
									v-model="dateFormatted"
									label="Data de Nascimento"
									persistent-hint
									append-icon="mdi-calendar"
									v-bind="attrs"
									v-on="on"
									/>
								</template>
								<v-date-picker
									v-model="date"
									no-title
									@input="parsedate(dateFormatted)"
								/>
							</v-menu>
						</v-col>
						<v-col cols="12" sm="6" md="4">
							<v-text-field
								v-if='item.Customer === undefined'
								v-model="item.CpfCnpj"
								label="CPF/CNPJ"
								:rules="[(v) => !!v || 'Este campo não pode ser vazio']"
								required />
							<v-text-field
								v-else
								v-model="item.CpfCnpj"
								label="CPF/CNPJ"
								:rules="[(v) => !!v || 'Este campo não pode ser vazio']"
								required />
						</v-col>
					</v-row>
				</v-container>
			</v-form>
		</v-card-text>
		<v-card-actions class="mx-2 pb-2 pt-0">
			<v-spacer />
			<v-btn class="font-weight-medium" color='secondary' outlined @click="close">
				{{ btnCloseTxt }}</v-btn>
			<v-btn
				class="secondary white--text font-weight-medium"
				depressed
				@click="validate">
				{{ btnConfirm }}</v-btn>
		</v-card-actions>
	</div>
</template>

<script>
export default {
	props: {
		mode: {
			type: Number,
			required: true,
		},
	},
    data(){
        return{
			date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      		dateFormatted: this.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
			datePicker: false,
			birthDate: null,
			showDialog: true,
			item: {},
			btnConfirm: "Adicionar",
        }
    },
	computed: {
		title() {
			if (this.mode == 5) 
				return "Adicionar novo Cliente"
			return "Editando Cliente Nº: " + this.item.CustName;
		},
		btnCloseTxt() {
			return this.mode != 5 ? "Cancelar" : "Fechar";
		},
	},
    watch: {
		date (val) {
			this.dateFormatted = this.formatDate(this.date)
		},
    },
    methods: {
		formatDate (date) {
			if (!date) return null
			
			const [year, month, day] = date.split('-')
			return `${day}/${month}/${year}`
      	},
		parsedate (date) {
			if (!date) return null

			this.datePicker = false
			const [day, month, year] = this.formatDate(this.date).split('/')
			this.item.BirthDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
		},
		validate() {
			if (this.$refs.form.validate()) {
				if (this.mode == 5)
					this.$store.dispatch("addCustomer", this.item);
				else {
					if (this.updateEqual(this.item, {...this.$store.getters.getItem}))
						this.$store.dispatch("updateCustomer", this.item);
					else this.close();
				}
			}
		},
		close() {
			this.$store.dispatch("closeDialog");
		},
        updateEqual(item, check) {
            const keyCheck = Object.keys(check);
            const keyItem = Object.keys(item);

            if (keyItem.length !== keyCheck.length) return true;

            for (let key of keyItem) {
                if (item[key] !== check[key]) return true;
            }
            return false;
        },
    },
	created() {
			if (this.mode == 5)
				this.item = {};
			else {
				this.item = {...this.$store.getters.getItem}
				this.btnConfirm = "Salvar"
			}
		},
	mounted() {
		document.addEventListener("keydown", (e) => {
			if (e.key === "Escape") this.close();
			else if (e.key === "Enter") this.validate();
		});
	},
}
</script>

<style>
	.header {
		background-color: #10ADD6;
		font-weight: 700;
		color: white;
		text-align: center;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}
</style>