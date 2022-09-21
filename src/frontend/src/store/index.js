import { createStore } from 'vuex';
import createCartStore from '@/store/cart';
import createProductStore from '@/store/products'
import createAlertsStore from '@/store/alerts'


export default (api, storageHelper) => createStore({

  modules: {
    cart: createCartStore(api.cart, storageHelper),
    products: createProductStore(api.products),
    alerts: createAlertsStore(),
  },

  strict: process.env.NODE_ENV !== 'production'
})
