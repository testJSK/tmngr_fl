export default http => ({
    async load(token){
        let response = await http.get(`cart/load.php?token=${token}`);
        return response.data;
    },
    async add(token, id){
        let response = await http.get(`cart/add.php?id=${id}&token=${token}`, {
            errorStub: {
                text: 'Не удалось добавить товар.',
                fallback: false
            }
        });
        return response.data;
    },
    async remove(token, id){
        let response = await http.get(`cart/remove.php?id=${id}&token=${token}`, {
            errorStub: {
                text: 'Не удалось удалить товар.',
                fallback: false
            }
        });
        return response.data;
    }
})