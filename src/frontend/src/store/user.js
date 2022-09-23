export default (authApi) => ({
    namespaced: true,
    state: {
        user: null,
    },
    getters: {
        user: state => state.user,
        isLogin: state => state.user !== null,
    },
    mutations: {
        setUser(state, user){
            state.user = user;
        }
    },
    actions: {
        async init({ commit }){
            try{
                let user = await authApi.check();
                commit('setUser', user)
            }catch (e){
                console.warn(e);
            }
        }
    }
})