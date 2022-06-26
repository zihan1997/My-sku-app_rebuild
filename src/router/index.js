import {createRouter, createWebHashHistory}  from 'vue-router'
import Products from '../components/products/table/ProductListing'
import HomePage from "@/components/HomePage";
import ProductsManage from "@/components/products/Manage"

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
