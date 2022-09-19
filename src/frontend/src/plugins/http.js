import axios from 'axios'
import createCartApi from '@/api/cart'
import createProductsApi from '@/api/products'

export default () => {
    const http = axios.create({
        baseURL: 'http://localhost:8080/api/',
        // baseURL: 'http://faceprog.ru/reactcourseapi/',
        timeout: 10000,
    });

    const api = {

        products: createProductsApi(http),
        cart: createCartApi(http)
    }

    return { http, api };
}


// import axios from 'axios'
// import createProductsApi from '@/api/products'
// import createCartApi from '@/api/cart'
//
// export default () => {
//     const http = axios.create({
//         baseURL: 'http://faceprog.ru/reactcourseapi/',
//         timeout: 10000,
//     });
//
//     const api = {
//         products: createProductsApi(http),
//         cart: createCartApi(http)
//     }
//
//     return { http, api };
// }
