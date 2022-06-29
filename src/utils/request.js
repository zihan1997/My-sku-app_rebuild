import axios from 'axios';

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
    }
    return config;
});

service.interceptors.response.use(config => {
    config.headers['Content-Type'] = 'application/json'
    return config;
})

export default service;
