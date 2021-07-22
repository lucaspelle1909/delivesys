<template>
    <div style="width: 100%">
        <AlertDialog v-if="showAlertDialog" :alertObject="alertObject" />
        <Dialogs v-if="showDialog" />
    </div>
</template>

<script>
import AlertDialog from '@/components/template/dialogs/AlertDialog.vue'
import Dialogs from '@/components/template/dialogs/Dialogs.vue'
export default {
    components:{
        AlertDialog,
        Dialogs
    },
    computed:{
        showDialog(){
            return this.$store.getters.showDialog;
        },
        showAlertDialog() {
            return this.$store.getters.alertDialog;
        },
        alertObject() {
            return this.$store.getters.alertObject;
        },
    }
}
</script>

<style>

</style>