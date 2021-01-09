import { getUserEvents } from "../../../../server/controller/community";
import API from "../../services/API"

const state = {
    array: undefined,
    advicePeople: undefined
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

        } catch (error) {
            return error.message;
        }
    },
    async getActivitiesAction({ commit }) {
        try {
            const data = await API().get("/all-activity");
            commit("setArray", data.data);

        } catch (error) {
            return error.message;
        }
    },
    async getUserEvents({commit}){
        try {
            const data = await API().get("/user-events");
            commit("setArray", data.data);
            console.log(data.data)
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
    async myCommunities({commit}){
        try {
            const data = await API().get("/my-communities");
            commit("setArray", data.data);

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