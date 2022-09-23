import HomeView from '@/views/Home.vue'
import ProductView from '@/views/Product.vue'
import AuthLogin from '@/views/auth/Login.vue'
import OrdersView from "@/views/office/Orders.vue";
import DashboardView from "@/views/office/Dashboard.vue";


export default function() {
    const routes = [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/login',
            name: 'auth.login',
            component: AuthLogin,
            meta: { auth: false }

        },
        {
            path: '/office/dashboard',
            name: 'office.dashboard',
            component: DashboardView,
            meta: { auth: true }
        },
        {
            path: '/office/orders',
            name: 'office.orders',
            component: OrdersView,
            meta: { auth: true }
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
