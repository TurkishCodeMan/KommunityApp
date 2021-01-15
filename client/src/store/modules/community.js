
import API from "../../services/API"

const state = {
    array: undefined,
    advicePeople: undefined,

}
const getters = {
    getAdvicePeople(state) {
        return state.advicePeople;
    },
    getArray(state) {
        return state.array
    }
}

const mutations = {
    setAdvicePeople(state, value) {
        state.advicePeople = value;
    },
    setArray(state, value) {
        state.array = value;
    }
}

const actions = {
    async getCommunitiesAction({ commit }) {
        try {
            const data = await API().get("/");
            commit("setArray", data.data);
            if (data.data.length <= 0) {
                commit("setArray", ["all-communities"])
            }
        } catch (error) {
            return error.message;
        }
    },
    async getActivitiesAction({ commit }) {
        try {
            const data = await API().get("/all-activity");
            commit("setArray", data.data);
            if (data.data.length <= 0) {
                commit("setArray", ["all-activity"])
            }
        } catch (error) {
            return error.message;
        }
    },
    async getUserEvents({ commit }) {
        try {
            const data = await API().get("/user-events");

            let array = data.data.reverse();
            commit("setArray", array);
            if (data.data.length <= 0) {
                commit("setArray", ["user-events"])
            }
        } catch (error) {
            return error.message;
        }
    },
    async getAdvicePeopleAction({ commit }) {
        try {
            const data = await API().get("/random-user");
            commit("setAdvicePeople", data.data);

        } catch (error) {
            return error.message;
        }
    },
    async myCommunities({ commit }) {
        try {
            const data = await API().get("/my-communities");
            commit("setArray", data.data);
            if (data.data.length <= 0) {
                commit("setArray", ["my-communities"])
            }
        } catch (error) {
            return error.message;
        }
    },
    async subscribeCommunity({ dispatch }, communityID) {
        try {
            const data = await API().get("/subscribe-community/" + communityID)
            dispatch("myCommunities")
        } catch (error) {
            return error.message;

        }
    },
    async unSubscribeCommunityAction({ dispatch }, communityID) {
        try {
            const data = await API().get("/unsubscribe-community/" + communityID)
            dispatch("myCommunities")
        } catch (error) {
            return error.message;

        }
    },
    async createCommunity({ dispatch }, community) {
        try {
            const data = await API().post("/create-community", community);
            console.log(data);
            dispatch("getCommunitiesAction")
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