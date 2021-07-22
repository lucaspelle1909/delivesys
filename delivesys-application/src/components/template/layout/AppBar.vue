<template>
    <v-app-bar short app class="secondary">
        <v-toolbar-title>
            <span>Delive</span>
            <span class="font-weight-light">Sys</span>
        </v-toolbar-title>
        <v-spacer />
        <AccountMenu />
    </v-app-bar>
</template>

<script>
import AccountMenu from '@/components/template/layout/AccountMenu.vue'
export default {
    components:{
        AccountMenu
    }
}
</script>

<style>

</style>