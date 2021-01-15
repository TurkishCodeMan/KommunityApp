<template>
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
        <a @click.prevent="logoutApp" class="dropdown-item" href="#">Çıkış</a>
      </div>
    </div>
  </li>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: {
    ...mapGetters(["getUser"]),
    ...mapActions(["logout"]),
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

<style>
</style>