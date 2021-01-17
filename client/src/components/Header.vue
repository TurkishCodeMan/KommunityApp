<template>
  <div class="nav d-flex pt-3 shadow bg-white rounded">
    <nav class="text-center w-100 m-auto">
      <ul class="d-flex navbar container">
        <li class="nav-item">
          <a href="#" class="navbar-brand">Kommunity</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Ana Sayfa</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Etkinlikler</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" @click.prevent="clickAllCommunity"
            >Topluluklar</a
          >
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Etkinlik Kayıtları</a>
        </li>
        <li class="nav-item">
          <input
            type="text"
            class="form-control search"
            placeholder="Kommunity'de Ara"
          />
        </li>
        <li class="nav-item mr-2">
          <router-link tag="button" to="/create-community"  class="btn btn-success">Topluluk Oluştur</router-link>
        </li>
        <li class="nav-item d-flex" v-if="user != undefined">
          <div class="dropdown">
            <img
              :src="user.imageUrl"
              alt=""
              class="img-thumbnail rounded-circle mr-2"
              width="60"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            />

            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Profil</a>
              <a class="dropdown-item" href="#">Bildirimler</a>
              <a class="dropdown-item" href="#">Ayarlar</a>
              <a @click.prevent="logoutApp" class="dropdown-item" href="#"
                >Çıkış</a
              >
            </div>
          </div>
          <i class="far fa-bell mt-3"></i>
        </li>
        <li class="nav-item" v-if="user == undefined">
          <a href="#" class="text-dark" @click="login">Login</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
//import API from "../services/API"
export default {
  methods: {
    ...mapGetters(["getUser"]),
    ...mapActions(["getCommunitiesAction", "getActivitiesAction", "logout","getAdvicePeopleAction"]),
    ...mapMutations(["setUser", "setArray"]),
    login() {
      window.open(
        "/api/login",
        "mywindow",
        "location=1,status=1,scrollbars=1, width=800,height=800"
      );
      window.addEventListener("message", this.myCallBack);
    },
    async myCallBack(message) {
      if (message.data.user) {
        console.log(message.data);
        this.setUser(message.data.user);
        window.removeEventListener("message", this.myCallBack);
        await this.getAdvicePeopleAction();
        this.$router.push({ name: "home" });

      }
    },

    async clickAllCommunity() {
      await this.getCommunitiesAction();
      this.$router.push({ name: "all-communities" });
    },
    async clickAllActivity() {
      await this.getActivitiesAction();
      this.$router.push({ name: "all-activities" });
    },
    async logoutApp() {
      await this.logout();
    },
  },
  computed: {
    user() {
      return this.getUser();
    },
  },
};
</script>

<style scoped>
.nav {
  font-family: "Work Sans", sans-serif;
  box-shadow: 2px 0px 5px 2px rgba(0, 0, 0, 0.2);
}
.navbar {
  list-style-type: none;
}
.nav-item .nav-link {
  text-decoration: none;
  color: #adadad;
  font-size: 0.9rem;
}
.nav-item .nav-link:hover {
  color: #343a44;
}

.navbar-brand {
  color: #333333;
  font-size: 1.4rem;
  font-weight: 900;
}
.btn {
  text-align: center;
}

ul:last-child {
  font-size: 1.6rem;
  color: #adadad;
}
</style>