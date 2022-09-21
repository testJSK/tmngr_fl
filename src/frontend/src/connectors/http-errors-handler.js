export default (http, store, router) => {
    http.interceptors.response.use(
        r => r,
        error => {
            // if(error.status === 401) {
            //     router.push( { name: 'login' });
            // }
            // else {
                store.dispatch('alerts/add', {
                    text: "Ошибка ответа от сервера.",
                    closeable: true
                });
            console.log(router);

            Promise.reject(error);

            // }
        }
    )
}