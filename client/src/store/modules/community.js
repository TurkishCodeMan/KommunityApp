
import API from "../../services/API"

const state = {
    array: undefined,
    advicePeople: undefined,
    community: {
        events: {}
    },
    categories: undefined

}
const getters = {
    getAdvicePeople(state) {
        return state.advicePeople;
    },
    getArray(state) {
        return state.array
    },
    getCommunity(state) {
        return state.community;
    },
    getCategories(state) {
        return state.categories
    }
}

const mutations = {
    setAdvicePeople(state, value) {
        state.advicePeople = value;
    },
    setArray(state, value) {
        state.array = value;
    },
    setCommunity(state, value) {
        state.community = value;
    },
    setCategories(state, value) {
        state.categories = value
    }
}

const actions = {
    async getCommunitiesAction({ commit, dispatch }) {
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
        console.log("Burada")
        try {
            const data = await API().get("/last-events");

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
            console.log(data)
            dispatch("myCommunities");
            dispatch('getCommunityById',communityID)
        } catch (error) {
            return error.message;

        }
    },
    async unSubscribeCommunityAction({ dispatch }, communityID) {
        try {
            const data = await API().get("/unsubscribe-community/" + communityID)
            dispatch("myCommunities")
            dispatch('getCommunityById',communityID)
        } catch (error) {
            return error.message;

        }
     
    },
    async createCommunity({ dispatch }, community) {
        try {
            let formData=new FormData();
            formData.append('myfile',community.image);
            formData.append("name",community.name);
            formData.append('location',community.location);
            formData.append('catID',community.catID);
            formData.append('private',community.private);
            formData.append('description',community.description);
            const data = await API().post("/create-community", formData);
            console.log(data);
            dispatch("getCommunitiesAction")
        } catch (error) {
            return error.message;
        }

    },
    async getCommunityById({ commit, state }, id) {
        try {
            const data = await API().get("/community/" + id)
            console.log(data.data.community);
            commit("setCommunity", data.data.community);
            state.community.events = data.data.events;
        } catch (error) {
            return error.message;
        }
    },
    async getCategoriesAction({ commit }, id) {
        try {
            const data = await API().get("/all-categories")
            console.log(data.data);
            commit("setCategories", data.data)
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