<template>
  <section class="w-100">
    <app-header></app-header>
    <div class="container mb-5" v-if="user">
      <div class="row">
        <div class="col-md-3">
          <app-left-menu></app-left-menu>
        </div>
        <div class="col-md-6">
          <app-main-content></app-main-content>
        </div>
        <div class="col-md-3">
          <app-follow-advice></app-follow-advice>
        </div>
      </div>
    </div>

    <div class="row w-100 m-0 d-flex" v-if="!user">
      <div class="main-image position-relative">
        <img src="../../assets/nousermain.jpg" alt="" class="img-fluid" />
        <div class="content">
          <h2 class="text-dark">Birlikte Paylaşalım</h2>
        </div>
      </div>

      <div
        class="d-flex w-100 justify-content-md-between align-items-md-between pt-4 m-4"
      >
        <div class="d-flex">
          <h2 class="">Kommunity Keşfet</h2>
        </div>
        <div class="d-flex position-relative">
          <i class="fas fa-search search-icon"></i>
          <input
            type="text"
            class="form-control bg-light pl-4"
            placeholder="Kommunity'de Ara"
          />
        </div>
      </div>

      <div
        class="d-flex w-100 justify-content-md-between align-items-md-between pt-2 m-4"
      >
        <div class="d-flex">
          <h3 class="text-muted">
            <strong>Türkçe</strong> Online <strong>Etkinlikler</strong> Arıyorum
          </h3>
        </div>
        <div class="d-flex position-relative btn-group">
          <a href="" class="btn btn-secondary text-center"
            ><i class="fas fa-globe-asia"></i> Online</a
          >
          <a href="" class="btn btn-secondary text-center"
            ><i class="fas fa-map-marker-alt"></i> Malatya</a
          >
        </div>
      </div>

      <div class="row m-4">
        <app-day></app-day>
        <app-day></app-day>
      </div>
    </div>

    <app-special></app-special>
    <app-footer></app-footer>
  </section>
</template>

<script>
import Day from "../SubParts/MainSubParts/Day";
import LeftMenu from "../Parts/Left-Menu";
import MainContent from "../Parts/Main-Content";
import FollowAdvice from "../Parts/Follow-Advice";

import Header from "../Header";
import Special from "../SubParts/MainSubParts/Special";
import Footer from "../Footer";
import { mapGetters } from "vuex";

export default {
  components: {
    appFollowAdvice: FollowAdvice,
    appMainContent: MainContent,
    appLeftMenu: LeftMenu,
    appHeader: Header,
    appFooter: Footer,
    appDay: Day,
    appSpecial: Special,
  },

  methods: {
    ...mapGetters(["getUser"]),
  },
  computed: {
    user() {
      return this.getUser();
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1240px;
  margin-top: 1.5rem;
}
.search-icon::placeholder {
  color: #d1d2d3;
}

.search-icon {
  position: absolute;
  top: 30%;
  left: 5px;
}
.main-image{
  background-color: rgba(83, 83, 83, 0.4) !important;
}
.content{
  position: absolute;
  top: 50%;
  right: 50%;
  left: 50%;
}
</style>