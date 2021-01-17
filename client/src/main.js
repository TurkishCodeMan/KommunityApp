import Vue from 'vue'
import App from './App.vue'

import store from "./store/store";
import router from "./router/router"
import VueSocketIO from "vue-socket.io"
import io from "socket.io-client";

Vue.config.productionTip = false

Vue.use(new VueSocketIO({
  connection: io("http://localhost:3000", { transports: ['websocket'] })
}))

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
