<template>
    <v-menu
        bottom
        min-width="200px"
        rounded
        offset-y>
        <template v-slot:activator="{ on }">
            <v-btn
                icon
                x-large
                v-on="on">
                <v-avatar color="primary" size="40">
                    <span class="white--text text-h7">{{ user.FirstName | userInitials(user.LastName) }}</span>
                </v-avatar>
            </v-btn>
        </template>
        <v-card>
            <v-list-item-content class="justify-center">
                <div class="mx-auto text-center">
                <v-avatar color="primary">
                    <span class="white--text text-h6">{{ user.FirstName | userInitials(user.LastName) }}</span>
                </v-avatar>
                <h3 class='my-1 mx-2'>{{ user.FullName }}</h3>
                <!-- <p class="text-caption">{{ user.phone }}</p> -->
                <v-divider />
                <v-btn
                    depressed
                    rounded
                    text>
                    Alterar Dados
                </v-btn>
                <v-divider />
                <v-btn
                    depressed
                    rounded
                    text>
                    Logout
                </v-btn>
                </div>
            </v-list-item-content>
        </v-card>
    </v-menu>
</template>

<script>
export default {
    filters:{
        userInitials(firstName, lastName){
            return firstName.substr(0,1) + lastName.substr(0,1)
        },
    },
    computed: {
        user() {
            return this.$store.getters.user
        },
    },
}
</script>

<style>

</style>