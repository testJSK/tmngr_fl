export default http => ({
    async load(token){
        let response = await http.get(`cart/load.php?token=${token}`);
        return response.data;
    },
    // async add(token, id){
    //
    // }

})