export default () => ({

    getCartToken(){
        return localStorage.getItem('CART_TOKEN');
    },
    setCartToken(token){
        return localStorage.setItem('CART_TOKEN', token);
    }
});