export default (cartApi, storageHelper) => ({
    namespaced: true,
    state: {
        token: null,
        products: [  ]
        // products: [ { id: 100, cnt: 2}, { id: 100, cnt: 2}  ]
    },
    getters: {
        inCart: state => id => state.products.some(product => product.id === id)
    },
    mutations: {
        load(state, { token, cart }){
            state.token = token;
            state.cart = cart;
        }
    },
    actions: {
        async load({ commit } ){
            const oldToken = storageHelper.getCartToken();
            console.log(oldToken);

            let { token, cart, needUpdate } = await cartApi.load(oldToken);

            if(needUpdate) {
                storageHelper.setCartToken(token);
            }

            commit('load', { token, cart} );
        }
    },
})
