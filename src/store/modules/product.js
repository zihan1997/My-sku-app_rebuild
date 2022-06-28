
const state = () => ({
    products: [{
        code: "3532",
        name: 'test',
        price: 123,
        quantity: 123,
        date: new Date().toISOString()
    }]
});
const mutations = {
    addNewProduct(state, payload){
        state.products.push(payload);
    }
};
const getters = {
    getProductList(state){
        return state.products;
    }
};
const actions = {
    async addNewProduct({ commit }, one) {
        commit('addNewProduct', await one)
    }
}


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
