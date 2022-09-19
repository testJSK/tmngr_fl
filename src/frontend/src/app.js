import { createApp } from 'vue';
import App from '@/App.vue';
import createHttp from '@/plugins/http';
import createStore from '@/store';
import createRouter from '@/router';

export default () => {
    const { http, api } = createHttp();
    console.log(http );
    const store = createStore(api);
    const router = createRouter(store);

    createApp(App)
        .use(store)
        .use(router)
        .mount('#app')


    store.dispatch('products/load')
}