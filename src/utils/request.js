import axios from 'axios';
import store from '@/store/index'

const service = axios.create({
    baseURL: 'http://localhost:3001/api/',
    timeout: 10000,
})
service.defaults.headers.post['Content-Type'] = 'application/json'

// intercept
service.interceptors.request.use(config => {
    if(!(config.url.includes('login') && config.url.includes('register'))){
        // todo Get token from store/user
        config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')
        console.log(store.getters.token)
    }
    return config;
});

service.interceptors.response.use(res => {
    res.headers['Content-Type'] = 'application/json'
    if(res.config.url.includes('login') || res.config.url.includes('register')){
        if(res.data.token) {
            localStorage.setItem('token', res.data.token)
            // console.log("res " + JSON.stringify(res))
            store.dispatch('user/setToken', res.data.token).then(() => console.log('token is set'))
            store.dispatch('user/setUsername', res.data.user).then(() => console.log('username is set'))
        }
    }
    return res;
})

export default service;
