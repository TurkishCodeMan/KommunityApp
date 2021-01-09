import VueRouter from "vue-router";
import Vue from "vue";
import store from "../store/store"
import API from "../services/API"
//Components
import Main from "../components/Other/Main"

Vue.use(VueRouter);

const routes = [
    { path: "/", component: Main, name: "home" }
]

const router = new VueRouter({
    routes,
})
//Her bir rotaya girişte sunucudaki req useri alıyoruz
router.beforeEach(async (to, from, next) => {
    //Her istekte User Kontrol
    let res = await API().get("/session")

    store.commit("setUser", res.data.user);
    next();

})
export default router;