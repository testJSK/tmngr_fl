export default http => ({
    async all(){
        let response = await http.get('products.php', {
            errorStub: {
                text: 'Не удалось загрузить товары',
                fallback: []
            }
        });

        return response.data;
    }
})

