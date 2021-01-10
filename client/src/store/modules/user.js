import API from "../../services/API"

const state = {
    user: undefined,

}
const getters = {
    getUser(state) {
        return state.user;
    }
}

const mutations = {
    setUser(state, value) {
        state.user = value;
    }
}
const actions = {
    async logout({ commit }) {
        const response = await API().get("/logout");
        if (response.data.logout) 7
        commit("setUser", undefined)
    }
}

export default {
    state,
    getters,
    mutations,
    actions

}