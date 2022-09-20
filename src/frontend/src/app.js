import { createApp } from 'vue';
import App from '@/App.vue';
import createHttp from '@/plugins/http';
import createStore from '@/store';
import createRouter from '@/router';
import createStorageHelper from '@/utils/storage'

export default () => {
    const { http, api } = createHttp();
    console.log(http );
    const storageHelper = createStorageHelper();

    const store = createStore(api, storageHelper);
    const router = createRouter(store);

    store.dispatch('products/load');
    store.dispatch('cart/load');

    createApp(App)
        .use(store)
        .use(router)
        .mount('#app');
}