export default {
    state: {
        loadingTable: false,
    },
    getters: {
        loadingTable(state){
            return state.loadingTable;
        }
    },
    mutations: {
        loadingTable(state, bool){
            state.loadingTable = bool;
        }
    },
    actions: {
    
    }
}