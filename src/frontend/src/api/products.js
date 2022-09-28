export default http => ({
    async all(){
        let response = await http.get('products.php', {
            errorStub: {
                text: 'Не удалось загрузить товары',
                fallback: []
            }
        });
        return response.data;
    },
    async getRating(id){
        let response = await http.get('ratings.php', {
           params: { id },
           errorStub: {
               text: 'Не удалось загрузить рейтинг товара',
               fallback: { count: 0, average: 0, your: null }
           }
        });

        return response.data;
    },
    async setRating(id, mark){

    }
})

