<template>
	<div style="height: 100%">
		<v-card-title class="headline header"> {{ title }} </v-card-title>
		<v-card-text class="pb-0">
			<v-form ref="form" lazy-validation>
				<v-container>
					<v-row>
						<v-col cols="12" sm="6" md="4">
							<v-text-field
								v-model="item.CustAccount"
								label="Cliente"
								:rules="[(v) => !!v || 'Este campo não pode ser vazio']"
								required
							></v-text-field>
						</v-col>
						<v-col cols="12" sm="6" md="4">
							<v-text-field
								v-model="item.DeliveryAddress"
								label="Endereço de entrega"
								:rules="[(v) => !!v || 'Este campo não pode ser vazio']"
								required
							></v-text-field>
						</v-col>
						<v-col cols="12" sm="6" md="4">
							<v-text-field
								v-model="item.DeliveryDateTime"
								label="Data de entrega"
								:rules="[(v) => !!v || 'Este campo não pode ser vazio']"
								required
							></v-text-field>
						</v-col>
						<v-col cols="12" sm="6" md="4">
          					<v-autocomplete
          						v-model="item.DeliveryStatus"
            					:items="deliveryStatus"
          						label="Status"
          						:rules="[(v) => !!v || 'Este campo não pode ser vazio']"
          						required
          					></v-autocomplete>
						</v-col>
						<v-col cols="12" sm="6" md="4">
							<v-text-field
								v-model="item.FreightValue"
								label="Frete"
								:rules="[(v) => !!v || 'Este campo não pode ser vazio']"
								type="number"
								required
							></v-text-field>
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
				@click="validate"
			>
				{{ btnConfirm }}</v-btn
			>
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
			showDialog: true,
			item: {},
			btnConfirm: "Adicionar",
			deliveryStatus: ['Criado', 'Em transporte', 'Entregue']
        }
    },
	computed: {
			title() {
				if (this.mode == 7) 
					return "Adicionar nova entrega"
				return "Editando entrega: " + this.item.name;
			},
			btnCloseTxt() {
				return this.mode != 7 ? "Cancelar" : "Fechar";
			},

		},
    methods: {
		validate() {
			if (this.$refs.form.validate()) {
				if (this.mode == 7)
					this.$store.dispatch("addDeliveryOrder", this.item);
				else {
					if (this.updateEqual(this.item, {...this.$store.getters.getItem}))
						this.$store.dispatch("updateDeliveryOrder", this.item);
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
			if (this.mode == 7)
				this.item = {};
			else {
				this.item = {...this.$store.getters.getItem};
				this.btnConfirm = "Salvar";
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