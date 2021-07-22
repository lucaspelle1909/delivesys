export default {
    state: {
        item: {},
        alertDialog: false,
        alertObject: {},
        modeDialog: 0,
        showDialog: false,
    },
    getters: {
        alertDialog(state) {
            return state.alertDialog
        },
        alertObject(state) {
            return state.alertObject
        },
        getItem(state) {
            return state.item
        },
        showDialog(state){
            return state.showDialog
        },
        modeDialog(state){
            return state.modeDialog
        }
    },
    actions: {
        setItem(store, item) {
            store.state.item = item;
        },
        closeAlertDialog(store){
            store.state.alertDialog = false
        },
        openAlertDialog(store, alertObject){
            store.state.alertDialog = true
            store.state.alertObject = alertObject
        },
        showDialog(store, modeDialog){
            store.state.showDialog = true
            store.state.modeDialog = modeDialog
        },
        closeDialog(store){
            store.state.showDialog = false
        }
    }
}