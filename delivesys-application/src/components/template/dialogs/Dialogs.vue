<template>
    <v-dialog v-model="show" max-width="750px" persistent @click:outside="close()">
        <v-card>
            <Products v-if='modeDialog == 1 || modeDialog == 2' :mode='modeDialog' />
            <Deliveryman v-if='modeDialog == 3 || modeDialog == 4' :mode='modeDialog' />
        </v-card>
    </v-dialog>
</template>

<script>
import Products from '@/components/template/cards/FormProducts.vue'
import Deliveryman from '@/components/template/cards/FormDeliveryman.vue'
export default {
    components:{
        Products,
        Deliveryman
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
    created(){
        console.log('test')
    }
}
</script>

<style>

</style>