import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#1976d2',
                secondary: '#b0bec5',
                accent: '#8c9eff',
                error: '#dc3232',
            },
        },
    },
})