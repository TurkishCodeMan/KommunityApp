<template>
  <div class="container pt-5">
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
</template>

<script>
import LeftMenu from "../Parts/Left-Menu";
import MainContent from "../Parts/Main-Content";
import FollowAdvice from "../Parts/Follow-Advice";


export default {
  components: {
    appFollowAdvice: FollowAdvice,
    appMainContent: MainContent,
    appLeftMenu: LeftMenu,
  },

};
</script>

<style scoped>
.container {
  max-width: 1240px;
}
</style>