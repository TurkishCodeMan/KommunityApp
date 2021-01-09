<template>
  <ul class="d-flex flex-column justify-content-start">
    <li class="nav-item active d-flex">
      <i class="fab fa-reddit-alien"></i>
      <a class="nav-link" @click="clickDiscover">Keşfet</a>
    </li>
    <li class="nav-item d-flex">
      <i class="fas fa-fan"></i>
      <a class="nav-link" @click.prevent="clickLastActivity" href="">Son Aktiviteler</a>
      <div class="count">1</div>
    </li>

    <li class="nav-item d-flex">
      <i class="fas fa-american-sign-language-interpreting"></i>
      <a class="nav-link" @click.prevent="clickMyCommunities" href="">Topluluklarım</a>
    </li>

    <li class="nav-item d-flex">
      <i class="fas fa-chart-line"></i>
      <a class="nav-link" href="">Etkinliklerim</a>
    </li>
    <li class="nav-item d-flex">
      <i class="fas fa-ticket-alt"></i>
      <a class="nav-link" href="">Biletlerim</a>
    </li>
  </ul>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    ...mapActions(["getActivitiesAction", "getUserEvents","myCommunities"]),
    ...mapMutations(["setArray"]),
    ...mapGetters(["getUser","getArray"]),
    async clickDiscover() {
      await this.getActivitiesAction();
    },
    async clickLastActivity() {
      await this.getUserEvents();
    },
    async clickMyCommunities(){
      await this.myCommunities();
    }
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
.nav-item {
  padding: 0.3rem;
}
.nav-item i {
  padding-top: 0.5rem;
  font-size: 1.4rem;
  color: #adadad;
}
.nav-link {
  color: #1a1e21;
  font-weight: 700;
  font-size: 1.1rem;
}

.nav-item.active i {
  color: #ffa400;
}
.nav-item.active {
  background-color: #fbfbfb;
}

.count {
  margin-top: 0.5rem;
  text-align: center;
  border-radius: 20%;
  max-height: 1.2rem;
  min-width: 1.3rem;
  color: rgb(235, 235, 235);
  background: red;
  font-weight: 700;
  font-size: 0.6rem;
}
</style>