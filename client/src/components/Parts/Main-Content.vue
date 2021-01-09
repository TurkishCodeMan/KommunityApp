<template>
  <div class="container" v-if="array != undefined">
    <div class="search">
      <h5 v-if="array[0].eventType == undefined">
        <select id="" class="select">
          <option value="1">Malatya</option>
        </select>
        <span>şehrinde</span>
        <select id="" class="select">
          <option value="1">Topluluklar</option>
          <option value="1">Etkinlikler</option>
        </select>
        <span>arıyorum</span>
      </h5>
      <h4 v-if="array[0].eventType != undefined">Son Aktiviteler</h4>
    </div>
    <div v-if="array.length > 0">
      <div class="row" v-if="array[0].location != undefined">
        <app-card
          v-for="a in array"
          :key="a.index"
          :a="a"
       
        ></app-card>
      </div>
      <div class="row" v-if="array[0].eventType != undefined">
        <app-event-card
          v-for="a in array"
          :key="a.index"
          :a="a"
        ></app-event-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Card from "../Cards/Card";
import EventCard from "../Cards/EventCard";
export default {
  data() {
    return {};
  },
  components: {
    appCard: Card,
    appEventCard: EventCard,
  },
  methods: {
    ...mapActions(["getCommunitiesAction"]),
    ...mapGetters(["getArray"]),
  },
  computed: {
    array() {
      return this.getArray();
    },
  },
  async created() {
    this.getCommunitiesAction();
  },
};
</script>

<style scoped>
.search span {
  color: #adadad;
}
.search .select {
  border: none;
  color: #ffa400;
}
.search {
  text-align: left;
}
</style>