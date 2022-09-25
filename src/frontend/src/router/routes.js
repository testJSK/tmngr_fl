import HomeView from '@/views/Home.vue'
import ProductView from '@/views/Product.vue'
import AuthLogin from '@/views/auth/Login.vue'

import OfficeBase from '@/views/office/Base'
import OfficeExit from '@/views/office/Exit'
import OfficeOrders from "@/views/office/Orders.vue";
import OfficeDashboard from "@/views/office/Dashboard.vue";


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
            meta: { guest: true }
        },
        {
            path: '/office',
            component: OfficeBase,
            meta: { auth: true },
            children: [
                {
                    path: 'dashboard',
                    name: 'office.dashboard',
                    component: OfficeDashboard
                },
                {
                    path: 'orders',
                    name: 'office.orders',
                    component: OfficeOrders
                },
                {
                    path: 'exit',
                    name: 'office.exit',
                    component: OfficeExit
                }
            ]
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
