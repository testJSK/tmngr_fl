// export default (http, store, router) => {
export default (http, store) => {
    http.interceptors.response.use(
        r => r,
        error => {
            if('errorStub' in error.config) {
                let { errorStub } = error.config;

                store.dispatch('alerts/add', {
                    text: errorStub.text,
                    closeable: true
                });

                return { data: errorStub.fallback };
            }

            Promise.reject(error);
        }
    )
}

// if(error.status === 401) {
//     router.push( { name: 'login' });
// }
// else {
// }