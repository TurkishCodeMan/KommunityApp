import VueRouter from "vue-router";
import Vue from "vue";
import store from "../store/store"
import API from "../services/API"
//Components
import Main from "../components/Other/Main"
import CreateCommunity from "../components/Other/CreateKommunity"
import CommunityDetails from "../components/Other/CommunityDetails"


Vue.use(VueRouter);

const routes = [
    { path: "/", component: Main, name: "home" },
    { path: "/my-communities", component: Main, name: "my-communities" },
    { path: "/last-events", component: Main, name: "last-events" },
    { path: "/all-communities", component: Main, name: "all-communities" },
    { path: "/all-activites", component: Main, name: "all-activities" },
    { path: "/create-community", component: CreateCommunity, name: "create-community" },
    { path: "/community/:id", component: CommunityDetails, name: "community-details" }

    // {
    //     path: "/create", name: "createCommunity",
    //     children: [
    //         { path: "community", component: CreateCommunity }
    //     ]   
    // },

]
const router = new VueRouter({
    routes,
})
//Her bir rotaya girişte sunucudaki req useri alıyoruz
router.beforeEach(async (to, from, next) => {
    //Her istekte User Kontrol
    let res = await API().get("/session")

    //Her istekte Event Toplama

    if (to.name == 'last-events') {
        console.log("last-events")
    }

    store.commit("setUser", res.data.user);
    next();

})
export default router;