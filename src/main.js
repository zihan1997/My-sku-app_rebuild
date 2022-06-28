import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router/index'

createApp(App)
    .use(ElementPlus)
    .use(router)
    .use(store)
    .mount('#app')
