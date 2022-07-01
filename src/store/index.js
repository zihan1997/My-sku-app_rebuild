import { createStore, createLogger } from 'vuex';
import user from "@/store/modules/user";
import getters from './getters'

const debug = process.env.NODE_ENV !== 'production';

const store = createStore({
    modules: {
        user
    },
    getters,
    strict: debug,
    plugins: [createLogger()]
})
export default store;
