import axios from 'axios'
import createCartApi from '@/api/cart'
import createProductsApi from '@/api/products'

export default () => {
    const http = axios.create({
        // baseURL: 'http://localhost:8080/api/',
        baseURL: 'http://faapi/',
        timeout: 10000,
    });

    const api = {
        products: createProductsApi(http),
        cart: createCartApi(http)
    }

    return { http, api };
}