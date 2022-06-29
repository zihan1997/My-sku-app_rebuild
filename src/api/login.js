import request from '@/utils/request';

export function register(username, password){
    return request({
        url: '/register',
        method: 'post',
        data: { username, password }
    })
}

export function login(username, password) {
    return request({
        url: 'login',
        method: 'post',
        data:{ username, password}
    })
}

export function logout(){
    localStorage.clear();
}
