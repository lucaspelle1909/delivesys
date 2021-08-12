<template>
    <v-dialog v-model="show" max-width="750px" persistent @click:outside="close()">
        <v-card>
            <Products v-if='modeDialog == 1 || modeDialog == 2' :mode='modeDialog' />
            <Deliveryman v-if='modeDialog == 3 || modeDialog == 4' :mode='modeDialog' />
            <Customers v-if='modeDialog == 5 || modeDialog == 6' :mode='modeDialog' />
            <DeliveryOrders v-if='modeDialog == 7 || modeDialog == 8' :mode='modeDialog' />
        </v-card>
    </v-dialog>
</template>

<script>
import Products from '@/components/template/cards/FormProducts.vue'
import Deliveryman from '@/components/template/cards/FormDeliveryman.vue'
import Customers from '@/components/template/cards/FormCustomers.vue'
import DeliveryOrders from '@/components/template/cards/FormDeliveryOrders.vue'
export default {
    components:{
        Products,
        Deliveryman,
        Customers,
        DeliveryOrders
    },
    computed:{
        modeDialog(){
            return this.$store.getters.modeDialog;
        }
    },
    data(){
        return{
            show: true,
        }
    },
    methods:{
        close() {
            this.$store.dispatch("closeDialog");
        },
    },
}
</script>

<style>

</style>