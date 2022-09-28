export default (http, storage) => {
    http.interceptors.request.use(config => {
        let token = storage.getAccessToken();

        if(token !== null){
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    });

    http.interceptors.response.use(
        r => r,
        async error => {
            if(error.response?.status !== 401) {
                return Promise.reject(error);
            }
            let response;

            try {
                response = (await http.get('/auth/refresh/refresh.php')).data;
            } catch (e){
                response = { res: false }
            }

            if(response.res){
                storage.setAccessToken(response.accessToken);
                return await http.request(error.config);
            }

            // try to use refresh token
            if(!error.config.allowed401){
                storage.setAccessToken(null);
                document.location = '/login'; // tmp without DI
            }
            return Promise.reject(error);
        });
}