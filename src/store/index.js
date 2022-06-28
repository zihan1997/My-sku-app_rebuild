import { createStore, createLogger } from 'vuex';
import products from './modules/product'

const debug = process.env.NODE_ENV !== 'production';

const store = createStore({
    modules: {
        products
    },
    strict: debug,
    plugins: [createLogger()]
})
export default store;
