import axios from 'axios'
import createAuthApi from '@/api/auth'
import createCartApi from '@/api/cart'
import createProductsApi from '@/api/products'

export default () => {
    const http = axios.create({
        baseURL: 'http:///api/',
        timeout: 10000,
    });

    const api = {
        auth: createAuthApi(http),
        cart: createCartApi(http),
        products: createProductsApi(http)
    }

    return { http, api };
}