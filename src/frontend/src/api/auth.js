export default http => ({
    async login(){
        let response = await http.get('auth/login.php');
        return response;
    }
})