<template>
  <section class="">


    <router-view></router-view>
  </section>
</template>

<script>
import Header from "./Header";

export default {
  components: {
    appHeader: Header,
  },
};
</script>

<style scoped>
.container {
  font-family: "Work Sans", sans-serif;
}
</style>