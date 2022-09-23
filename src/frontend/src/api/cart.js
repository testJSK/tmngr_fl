export default http => ({
    async load(token){
        let response = await http.get(`cart.php?token=${token}`, {
        // let response = await http.get(`cart/load.php?token=${token}`, {
            errorStub: {
                text: 'Не удалось загрузить корзину.',
                fallback: { token: null, cart: [], needUpdate: false },
                critical: true
            }
        });
        return response.data;
    },
    async add(token, id){
        let response = await http.post(`cart.php`, { id, token }, {
            errorStub: {
                text: 'Не удалось добавить товар.',
                fallback: false
            }
        });
        return response.data;
    },
    async remove(token, id){
        let response = await http.delete(`cart.php?id=${id}&token=${token}`, {
            errorStub: {
                text: 'Не удалось удалить товар.',
                fallback: false
            }
        });
        return response.data;
    }
})