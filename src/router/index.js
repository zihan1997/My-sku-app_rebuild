import {createRouter, createWebHashHistory}  from 'vue-router'
import HomePage from "@/components/HomePage";
import ProductsManage from "@/components/ProductPage/ManagementPage/Manage"
import Products from '../components/ProductPage/TablePage/ProductListing'

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
