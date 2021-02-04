<template>
  <div class="d-flex flex-column m-4 w-100 justify-content-center align-items-md-around">
    <div class="head mb-2">
      <h5><strong>ŞUB 04,Perşembe</strong></h5>
    </div>
    <div class="d-flex justify-content-center align-items-center row">
      <app-activity-main></app-activity-main>
      <app-activity-main></app-activity-main>
    </div>
  </div>
</template>

<script>
import Activity from "../../Cards/ActivityMain";
export default {
  components: {
    appActivityMain: Activity,
  },
};
</script>

<style>
</style>