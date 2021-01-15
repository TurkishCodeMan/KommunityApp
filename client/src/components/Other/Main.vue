<template>
  <section class="text-center">
    <app-header></app-header>
    <div class="container mb-5">
      <div class="row mt-4">
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
  </section>
</template>

<script>
import LeftMenu from "../Parts/Left-Menu";
import MainContent from "../Parts/Main-Content";
import FollowAdvice from "../Parts/Follow-Advice";

import Header from "../Header";
export default {
  components: {
    appFollowAdvice: FollowAdvice,
    appMainContent: MainContent,
    appLeftMenu: LeftMenu,
    appHeader: Header,
  },
};
</script>

<style scoped>
.container {
  max-width: 1240px;
}
</style>