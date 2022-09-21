import HomeView from '@/views/Home.vue'
import ProductView from '@/views/Product.vue'


export default function() {
    const routes = [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/product/:id',
            name: 'product',
            component: ProductView
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            // component: () => import(/* webpackChunkName: "about" */ '../views/Product.vue')
        }
    ]

    return routes;
}
