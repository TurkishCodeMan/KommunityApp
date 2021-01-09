import axios from "axios"
import Vue from "vue"
export default ()=>{
    const axiosInstance=axios.create({
        baseURL:"/api"
    })
    Vue.use(axiosInstance);
    return axiosInstance;
}