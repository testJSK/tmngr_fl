import { createStore } from 'vuex';
import createCartStore from '@/store/cart';
import createProductStore from '@/store/products'


export default api => createStore({

  modules: {
    cart: createCartStore(api.cart),
    products: createProductStore(api.products),
  },

  strict: process.env.NODE_ENV !== 'production'
})
