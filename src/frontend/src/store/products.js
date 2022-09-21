export default  productsApi => ({
    namespaced: true,
    state: {
        items: []
    },
    getters: {
        items: state => state.items,
    },
    mutations: {
        set(state, products){
            state.items = products;
        }
    },
    actions: {
        async load({ commit }){

            const  products = await productsApi.all();
            commit('set', products);
        }
    },
})
