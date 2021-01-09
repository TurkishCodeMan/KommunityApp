<template>
  <div class="container">
    <div class="header d-flex">
      <i class="fas fa-users pt-1 mr-1"></i>
      <p>Takip Önerileri</p>
    </div>

    <div class="peoples">
      <app-people-card
        v-for="people in advicePeople"
        :key="people.index"
        :people="people"
      ></app-people-card>
    </div>
  </div>
</template>

<script>
import PeopleCard from "../Cards/People-Card";
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    advicePeople() {
      return this.getAdvicePeople();
    },
  },
  components: {
    appPeopleCard: PeopleCard,
  },
  methods: {
    ...mapActions(["getAdvicePeopleAction"]),
    ...mapGetters(["getAdvicePeople"])
  },
  async mounted() {
    await this.getAdvicePeopleAction();
  },
};
</script>

<style scoped>
.header p {
  font-weight: 700;
}
.header i {
  color: #ffa400;
}
</style>