import {createRouter, createWebHistory} from 'vue-router'
import HomePage from "@/components/HomePage";
import ProductsManage from "@/components/ProductPage/ManagementPage/Manage"
import Products from '../components/ProductPage/TablePage/ProductListing'
import LogInPage from "@/components/LogInPage";
import AfterLoginFrame from '@/components/framework/Index'

const routes = [
    {
        path: '/login',
        component: LogInPage
    },
    {
        path: '/',
        component: AfterLoginFrame,
        children: [
            {
                path: '/',
                component: HomePage
            },
            {
                path: '/products',
                component: Products
            },
            {
                path: '/manage',
                component: ProductsManage
            }
        ]
    },
    // {
    //     path: '/',
    //     component: HomePage,
    // },
    // {
    //     path: '/products',
    //     component: Products
    // },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
