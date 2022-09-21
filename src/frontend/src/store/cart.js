export default (cartApi, storageHelper) => ({
    namespaced: true,
    state: {
        token: null,
        products: [  ],
        cart: null,
        // products: [ { id: 100, cnt: 2}, { id: 100, cnt: 2}  ]
    },
    getters: {
        inCart: state => id => state.products.some(product => product.id === id)

    },
    mutations: {
        load(state, { token, cart  }){
            state.token = token;
            state.products = cart;
        },
        add(state, id) {
            state.products.push( {id, cnt: 1} );
        },
        remove(state, id) {
            state.products = state.products.filter(pr => pr.id !== id);
        }
    },
    actions: {
        async load({ commit } ){
            const oldToken = storageHelper.getCartToken();
            let { token, cart, needUpdate } = await cartApi.load(oldToken);

            if(needUpdate) {
                storageHelper.setCartToken(token);
            }
            commit('load', { token, cart} );
        },
        async add( { commit, state }, id ) {
            let result = await cartApi.add(state.token, id);
            if(result) {
                commit('add', id);
            }
            return result;
        },
        async remove( { commit, state }, id ) {
            let result = await cartApi.remove(state.token, id);
            if(result) {
                commit('remove', id);
            }
            return result;
        }
    }
})
