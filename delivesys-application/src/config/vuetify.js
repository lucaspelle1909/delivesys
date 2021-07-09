import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#091B31',
                secondary: '#10ADD6',
                accent: '#8c9eff',
                error: '#dc3232',
            },
        },
    },
})