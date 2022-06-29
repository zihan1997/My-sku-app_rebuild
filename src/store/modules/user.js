import { login } from '@/api/login'

const state = () => ({
    username: '',
    token: typeof Number,
});

const mutations = {
    setUsername(state, payload){
        state.username = payload.username;
    },
    setToken(state, payload){
        state.token = payload.token;
    }
};

const getter = {
    getUsername(state){
        return state.username;
    },
    getToken(state){
        return state.token;
    }
}

const actions = {
    async Login({ commit }, user) {
        try {
            const response = await login(user.username, user.password);
            commit('setToken', response.token);
        }catch (e) {
            console.log(e);
        }
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    getter,
    actions
}
