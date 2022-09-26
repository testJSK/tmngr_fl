export default http => ({
    async login(login, password){
        let response = await http.post('auth/login.php', { login, password });
        return response.data;
    },
    async check(){
        let response = await http.get('auth/check.php?' , {
            allowed401: true
        });
        return response.data;
    },
    async logout(){
        let response = await http.get('auth/logout.php' , {
            errorStub: {
                text: 'Не удалось выйти с сайта.',
                fallback: false ,
            }
        });
        return response.data;
    }
})