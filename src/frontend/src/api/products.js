export default http => ({
    async all(){
        console.log('api')
        let response = await http.get('products/all');
        console.log(response)
        // let response = await http.get('products/all.php');
        return response.data;
    }
})

