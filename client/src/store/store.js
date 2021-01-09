import Vuex from "vuex"
import Vue from "vue"

//Modules
import Community from "./modules/community"
import User from "./modules/user"

Vue.use(Vuex);

const store=new Vuex.Store({
    modules:{Community,User},
    
});

export default store;