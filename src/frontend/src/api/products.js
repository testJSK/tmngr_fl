export default http => ({
    async all(){
        let response = await http.get('products/all.php');
        return response.data;
    }
})

