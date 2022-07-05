import { login } from '@/api/login'

const state = () => ({
    username: '',
    token: '',
});

const mutations = {
    setUsername(state, payload){
        state.username = payload.user;
    },
    setToken(state, payload){
        state.token = payload.token;
        localStorage.token = payload.token
    }
};

const actions = {
    async Login({ commit }, user) {
        try {
            const response = await login(user.username, user.password);
            if(response.status !== 200) throw new DOMException();
            commit("setUsername", {user: user.username})

        }catch (e) {
            console.log(e);
        }
    },
    async setToken({ commit }, token) {
        try{
            await commit('setToken', {token})
        }catch (e) {
            console.log(e);
        }
    },
    async setUsername({ commit }, username){
        try{
            await commit('setUsername', {username})
        }catch (e) {
            console.log(e)
        }
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
