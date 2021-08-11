export default {
    state: {
        deliveryOrders:[],
    },
    getters: {
        deliveryOrders(state){
            return state.deliveryOrders;
        }
    },
    mutations: {

    },
    actions: {
        async getDeliveryOrders(store){
            store.commit('loadingTable', true)
            await this._vm.$axios.get('delivery-orders')
            .then((res) => {
                store.state.deliveryOrders = res.data
            })
            .finally(() => {
                store.commit('loadingTable', false)
            })
        },
        async addDeliveryOrder(store, deliveryOrder){
            await this._vm.$axios.post('delivery-orders', deliveryOrder)
            .then(() => {
                store.dispatch('getDeliveryOrders')
            })
            .finally(() => {
                store.dispatch("closeDialog");
            })
        },
        async updateDeliveryOrder(store, deliveryOrder){
            await this._vm.$axios.put('delivery-orders/'+ product.ItemId, deliveryOrder)
            .then(() => {
                store.dispatch('getDeliveryOrders')
            })
            .finally(() => {
                store.dispatch("closeDialog");
            })
            
        },
        async deleteDeliveryOrder(store, deliveryId){
            await this._vm.$axios.delete('delivery-orders/'+ deliveryId)
            .then(() => {
                store.dispatch('getDeliveryOrders')
            })
            .finally(() => {
                store.dispatch("closeAlertDialog");
            })
        }
    }
}