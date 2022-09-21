export default () => ({
    namespaced: true,
    state: {
        alerts: [],
        ai: 0,
    },
    getters: {
        all: state => state.alerts,
    },
    mutations: {
        add(state, alert) {
            state.alerts.push( {id: ++state.ai, ...alert } );
        },
        remove(state, id) {
            state.alerts = state.alerts.filter(alert => alert.id !== id);
        }
    },
    actions: {
        async add( { commit, dispatch, state }, { text, closeable } ){
            commit('add', { text, closeable } );
            let id = state.ai;

            if(closeable){
                setTimeout( () => {
                    dispatch('remove', id);
                }, 3000);
            }
        },
        async remove( { commit }, id ){
            commit('remove', id);
        }
    }
})