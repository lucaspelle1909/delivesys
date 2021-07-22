export default {
    state: {
        products:[],
    },
    getters: {
        products(state){
            return state.products;
        }
    },
    mutations: {

    },
    actions: {
        async getProducts(store){
            store.commit('loadingTable', true)
            await this._vm.$axios.get('products')
            .then((res) => {
                store.state.products = res.data.products
            })
            .finally(() => {
                store.commit('loadingTable', false)
            })
        },
        async addProduct(store, product){
            await this._vm.$axios.post('products', product)
            .then((res) => {
                store.state.products = res.data.products
                store.dispatch(getProducts)
            })
            .finally(() => {
                store.dispatch("closeDialog");
            })
        },
        async updateProduct(store, product){
            await this._vm.$axios.put('products', product)
            .then((res) => {
                store.state.products = res.data.products
                store.dispatch(getProducts)
            })
            .finally(() => {
                store.dispatch("closeDialog");
            })
            
        },
        async deleteProduct(store, productId){
            await this._vm.$axios.delete('products', productId)
            .then((res) => {
                store.state.products = res.data.products
                store.dispatch(getProducts)
            })
            .finally(() => {
                store.dispatch("closeAlertDialog");
            })
        }
    }
}