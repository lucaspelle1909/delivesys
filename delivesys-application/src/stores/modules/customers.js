export default {
    state: {
        customers: []
    },
    getters: {
        customers(state){
            return state.customers
        }
    },
    actions: {
        async getCustomers(store){
            store.commit('loadingTable', true)
            await this._vm.$axios.get('/clients')
                .then((res) => {
                    store.state.customers = res.data
                })
                .finally(() => {
                    store.commit('loadingTable', false)
                })
        },
        async addCustomers(store, customer){
            await this._vm.$axios.post('/clients', customer)
                .then(() => {
                    store.dispatch('getCustomers')
                })
                .finally(() => {
                    store.dispatch('closeDialog')
                })
        },

        async updateCustomers(store, customer){
            await this._vm.$axios.post('/clients', customer)
                .then(() => {
                    store.dispatch('getCustomers')
                })
                .finally(() => {
                    store.dispatch('closeDialog')
                })
        },

        async deleteCustomer(store, custAccount){
            await this._vm.$axios.delete('/clients/' + custAccount)
                .then(() => {
                    store.dispatch('getDeliveryman')
                })
                .finally(() => {
                    store.dispatch("closeAlertDialog");
                })
        }
    }
}