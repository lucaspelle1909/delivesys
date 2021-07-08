import axios from 'axios'
import router from '@/config/router'
import { getMessageError } from '@/config/utils'
import { ValidateAxiosResponse } from '@/config/utils'

export default {
    state: {
        errorOnLogin: false,
        isUserLogged: false,
        accessToken: null,
        expirationToken: new Date('01/01/0001 00:00').getTime()
    },
    getters: {
        errorOnLogin(state) {
            return state.errorOnLogin
        },
        isUserLogged(state) {
            return state.isUserLogged
        },
        accessToken(state) {
            return state.accessToken
        },
        ExpirationToken(state) {
            return state.expirationToken
        }
    },
    mutations: {
        clearToken(state) {
            state.accessToken = null
            state.expirationToken = new Date('01/01/0001 00:00').getTime()
        },
        logoutUser(state) {
            state.isUserLogged = false
        }
    },
    actions: {
        async submitLogin(store, user) {
            store.state.errorOnLogin = false
            if(user.password !== 'admin')
                store.state.errorOnLogin = true
            /*
            await axios.post(process.env.VUE_APP_TOKEN_URI + process.env.VUE_APP_API_TOKEN_SERVICE, user)
                .then((res) => {
                    store.dispatch("loginSucessuful", res)
                })
                .catch(() => {
                    store.state.errorOnLogin = true
                })
                */
        },

        loginSucessuful(store, response) {
            response = ValidateAxiosResponse(response.data)
            if (!response.authenticated) {
                store.state.errorOnLogin = true
                return;
            }
            store.state.isUserLogged = true;
            store.state.accessToken = response.accessToken;
            store.state.expirationToken = new Date(response.expiration).getTime()
            localStorage.setItem('accessToken', response.accessToken)
            localStorage.setItem('expirationToken', store.state.expirationToken)
            this._vm.$axios.defaults.headers.common['Authorization'] = 'Bearer '.concat(response.accessToken)
            router.push("/home")
            return
        },

        async getAuthorizationToken(store) {
            localStorage.removeItem("accessToken")
            localStorage.removeItem("expirationToken")
            await store.dispatch("requestToken")
        },

        async requestToken(store) {
            await axios.post(process.env.VUE_APP_TOKEN_URI + process.env.VUE_APP_API_TOKEN_SERVICE, {
                UserId: process.env.VUE_APP_U_AUTHORIZATION,
                Password: process.env.VUE_APP_S_AUTHORIZATION
            })
                .then(response => store.dispatch('authorizationSuccessful', response))
                .catch(() => store.dispatch('authorizationFailed'))
            return true
        },

        async authorizationSuccessful(store, response) {
            var responseJson = ValidateAxiosResponse(response.data)
            if (!responseJson.authenticated) {
                store.dispatch('authorizationFailed')
                return;
            }
            store.state.accessToken = responseJson.accessToken;
            store.state.expirationToken = new Date(responseJson.expiration).getTime();
            localStorage.setItem('accessToken', responseJson.accessToken)
            localStorage.setItem('expirationToken', store.state.expirationToken)
            this._vm.$axios.defaults.headers.common['Authorization'] = 'Bearer '.concat(responseJson.accessToken)
        },

        authorizationFailed(store) {
            store.state.accessToken = null;
            store.state.expirationToken = new Date('01/01/0001 00:00').toUTCString()
            store.dispatch('openErrorDialog', getMessageError().ERROR_AUTHENTICATION)
        },

        isUserLogged() {
            if (localStorage.accessToken != undefined &&
                localStorage.expirationToken != undefined &&
                localStorage.expirationToken > new Date().getTime()) {
                return true;
            }
            return false;
        },

        isUserExpired() {
            if (localStorage.accessToken != undefined &&
                localStorage.expirationToken != undefined &&
                localStorage.expirationToken < new Date().getTime()) {
                return true;
            }
            return false;
        },

        async logout(store) {
            localStorage.removeItem("accessToken")
            localStorage.removeItem("expirationToken")
            await store.commit('logoutUser')
            await store.commit('clearToken')
        },
    },
}