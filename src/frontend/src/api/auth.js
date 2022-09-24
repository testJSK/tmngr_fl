export default http => ({
    async login(login, password){
        let response = await http.post('auth/login.php', { login, password });
        return response.data;
    },
    async check(){
        let response = await http.get('auth/check.php?sleep' );
        return response.data;
    }
})