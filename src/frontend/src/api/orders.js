export default http => ({
    async all(){
        let response = await http.get('orders.php', {
            errorStub: {
                text: 'Не удалось загрузить историю заказов.',
                fallback: []
            }
        });
        return response.data;
    }
})

