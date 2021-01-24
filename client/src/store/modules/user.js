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
        if (response.data.logout) {
            commit("setUser", undefined)
    
            commit("setAdvicePeople",undefined);
            commit("setArray",undefined)
        }
       

    },
    async getFollowingUser({ dispatch }, id) {
        try {
            const data = await API().get("/following-user/" + id)
            console.log(data.data);
            dispatch("getUserEvents");
            dispatch("getAdvicePeopleAction")
        } catch (error) {
            return error.message;
        }
    },
    async unFollowingUser({ dispatch }, id) {
        try {
            const data = await API().get("/unfollowing-user/" + id)
            console.log(data.data);
            dispatch("getUserEvents");
            dispatch("getAdvicePeopleAction")
        } catch (error) {
            return error.message;
        }
    }


}

export default {
    state,
    getters,
    mutations,
    actions

}