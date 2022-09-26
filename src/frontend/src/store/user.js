export default authApi => {
    let userPromiseResolver;
    let userReadyPromise = new Promise( (resolve) => {
        userPromiseResolver = resolve;
    });

    return {
        namespaced: true,
        state: {
            user: null,
        },
        getters: {
            user: state => state.user,
            isLogin: state => state.user !== null, // eslint-disable-next-line
            ready: state => userReadyPromise
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
                } catch (e){
                    // console.warn(e);
                } finally {
                    userPromiseResolver()
                }
            },
            async logout( { commit }){
                let res = await authApi.logout();
console.log(res)
                if(res){
                    commit('setUser', null);
                }
                return res;
            }
        }
    }
}