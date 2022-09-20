import { createStore } from 'vuex';
import createCartStore from '@/store/cart';
import createProductStore from '@/store/products'


export default (api, storageHelper) => createStore({

  modules: {
    cart: createCartStore(api.cart, storageHelper),
    products: createProductStore(api.products),
  },

  strict: process.env.NODE_ENV !== 'production'
})
