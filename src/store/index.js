import { createStore, createLogger } from 'vuex';
import products from './modules/product'
import user from "@/store/modules/user";

const debug = process.env.NODE_ENV !== 'production';

const store = createStore({
    modules: {
        products,
        user
    },
    strict: debug,
    plugins: [createLogger()]
})
export default store;
