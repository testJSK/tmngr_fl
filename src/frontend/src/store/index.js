import { createStore } from 'vuex';
import createUserStore from '@/store/user'
import createCartStore from '@/store/cart';
import createProductStore from '@/store/products'
import createAlertsStore from '@/store/alerts'


export default (api, storageHelper) => createStore({

  modules: {
    user: createUserStore(api.auth),
    cart: createCartStore(api.cart, storageHelper),
    products: createProductStore(api.products),
    alerts: createAlertsStore(api.auth)
  },

  strict: process.env.NODE_ENV !== 'production'
})
