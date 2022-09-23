export default (http, storage) => {
    http.interceptors.request.use(config => {
        let token = storage.getAccessToken();

        if(token !== null){
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    })
}