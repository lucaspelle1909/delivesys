import router from "@/config/router";
import { getMessageError } from "@/config/utils";

export default {
    state: {
        user: {},
        errorOnLogin: false,
        isUserLogged: false,
        accessToken: null,
        expirationToken: new Date('01/01/0001 00:00').getTime()
    },
    getters: {
        user(state){
            return state.user
        },
        fullName(state){
            return state.user.firstName+' '+state.user.lastName
        },
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
        initialiseStore(state) {
            if(localStorage.getItem('userStore')) {
				this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem('userStore')))
				)
			}
		},
        clearToken(state) {
            state.accessToken = null
        },
        logoutUser(state) {
            state.isUserLogged = false
        },
        saveUserDataInStore(state) {
            localStorage.setItem('userStore', JSON.stringify(state));
        }
    },
    actions: {
        async submitLogin(store, user) {
            store.state.errorOnLogin = false
            await this._vm.$axios.post('auth', user)
                .then((res) => {
                    store.dispatch("loginSucessuful", res)
                })
                .catch(() => {
                    store.state.errorOnLogin = true
                })
        },

        loginSucessuful(store, response) {
            if (!response.data.token) {
                store.state.errorOnLogin = true
                return;
            }
            store.state.isUserLogged = true
            response.data.user.FullName = response.data.user.FirstName +' '+ response.data.user.LastName
            store.state.user = response.data.user
            store.state.accessToken = response.data.token
            localStorage.setItem('accessToken', response.data.token)
            this._vm.$axios.defaults.headers.common['Authorization'] = 'Bearer '.concat(response.data.token)
            router.push("/Home")
            return
        },

        async authorizationSuccessful(store, response) {
            if (!response.data.token) {
                store.dispatch('authorizationFailed')
                return;
            }
            store.state.accessToken = response.data.token;
            localStorage.setItem('accessToken', response.data.token)
            this._vm.$axios.defaults.headers.common['Authorization'] = 'Bearer '.concat(response.data.token)
        },

        authorizationFailed(store) {
            store.state.accessToken = null;
            store.dispatch('openErrorDialog', getMessageError().ERROR_AUTHENTICATION)
        },

        isUserLogged() {
            if (localStorage.accessToken != undefined) {
                return true
            }
            return false
        },

        isUserExpired() {
            if (localStorage.accessToken != undefined) {
                return true
            }
            return false
        },

        async logout(store) {
            localStorage.removeItem("accessToken")
            await store.commit('logoutUser')
            await store.commit('clearToken')
        },
    },
}
