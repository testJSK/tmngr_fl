export default () => ({

    getCartToken(){
        return localStorage.getItem('CART_TOKEN');
    },
    setCartToken(token){
        return localStorage.setItem('CART_TOKEN', token);
    },
    getAccessToken(){
        return localStorage.getItem('ACCESS_TOKEN')
    },
    setAccessToken(token){
        return localStorage.setItem('ACCESS_TOKEN', token)
    },
});