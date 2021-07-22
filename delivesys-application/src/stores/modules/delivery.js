export default {
    state: {
        deliveryman: []
    },
    getters: {
        deliveryman(state){
            return state.deliveryman
        }
    },
    mutations: {

    },
    actions: {
        async getDeliveryman(store){
            store.commit('loadingTable', true)
            await this._vm.$axios.get('/sysusers/deliveryman')
                .then((res) => {
                    store.state.deliveryman = res.data
                })
                .finally(() => {
                    store.commit('loadingTable', false)
                })
        },
        async addDeliveryman(store, deliveryman){
            await this._vm.$axios.post('/sysusers', deliveryman)
                .then(() => {
                    store.dispatch('getDeliveryman')
                })
        },
        async updateDeliveryman(store, deliveryman){
            await this._vm.$axios.put('/sysusers/'+ deliveryman.UserId, deliveryman)
                .then((res) => {
                    store.state.deliveryman = res.data.deliveryman
                    store.dispatch('getDeliveryman')
                })
        },
        async deleteDeliveryman(store, deliveryId){
            await this._vm.$axios.delete('/sysusers/'+ deliveryId)
                .then(() => {
                    store.dispatch('getDeliveryman')
                })
        }
    }
}