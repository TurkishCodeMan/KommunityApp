
const state={
    user:undefined,
    
}
const getters={
    getUser(state){
        return state.user;
    }
}

const mutations={
    setUser(state,value){
        state.user=value;
    }
}

export default {
    state,
    getters,
    mutations,

}