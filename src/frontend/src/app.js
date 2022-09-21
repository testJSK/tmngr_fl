import { createApp } from 'vue';
import App from '@/App.vue';
import createHttp from '@/plugins/http';
import createStore from '@/store';
import createRouter from '@/router';
import createStorageHelper from '@/utils/storage'
import initHttpErrorsHandler from '@/connectors/http-errors-handler'

export default () => {
    const { http, api } = createHttp();
    const storageHelper = createStorageHelper();

    const store = createStore(api, storageHelper);
    const router = createRouter(store);
    initHttpErrorsHandler(http, store, router)

    store.dispatch('cart/load');
    store.dispatch('products/load');

    const app = createApp(App).use(store).use(router)  // .mount('#app');

    app.config.globalProperties['$api'] = api;

    return app;
}