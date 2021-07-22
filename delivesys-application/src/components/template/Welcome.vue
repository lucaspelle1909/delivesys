<template>
  <v-card elevation="2" outlined class='ma-2'>
            <v-list-item>
                <v-list-item-content class='pa-0'>
                    <span class="text-overline">
                        {{getHour}} {{ firstName }}!
                    </span>
                </v-list-item-content>
            </v-list-item>
      </v-card>
</template>

<script>
export default {
    computed: {
        firstName() {
            return this.$store.getters.user.FirstName
        },
        getHour(){
            let hour = new Date().getHours()
            if(hour < 6)
                return 'Boa noite'
            else if(hour >= 6 && hour < 12)
                return 'Bom dia'
            else if(hour >= 12 && hour < 18)
                return 'Boa tarde'
            return 'Boa noite'
        }
    }
}
</script>

<style>

</style>