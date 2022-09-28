export default () => ({

    getCartToken(){
        return localStorage.getItem('CART_TOKEN');
    },
    setCartToken(token){
        localStorage.setItem('CART_TOKEN', token);
    },
    getAccessToken(){
        return localStorage.getItem('ACCESS_TOKEN');
    },
    setAccessToken(token){
        localStorage.setItem('ACCESS_TOKEN', token);
    },
    removeAccessToken(){
        localStorage.removeItem('ACCESS_TOKEN');
    }
});