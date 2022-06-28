import {createRouter, createWebHashHistory}  from 'vue-router'
import Products from '../components/products/table_page/ProductListing'
import HomePage from "@/components/HomePage";
import ProductsManage from "@/components/products/management/Manage"

const routes = [
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

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
