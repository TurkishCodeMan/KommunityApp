<template>
  <div class="container mb-3" v-if="people._id != user._id">
    <div class="user-image">
 
    
      <img
        class="img-fluid img-thumbnail rounded-circle"
        :src="people.imageUrl"
        alt="People Image"
      />
    </div>
    <div class="content-info">
      <a class="header" href="#">{{ people.name }}</a>
      <p class="nickname">@{{ people.tag }}</p>
    </div>
    <div class="subscribe">

      <button
        class="btn btn-secondary btn-sm"
        v-if="!people.follow"
        @click="followUser"
      >
        Takip Et
      </button>
      <button class="btn btn-success btn-sm" v-if="people.follow" @click="unFollowUser">
        Takip Ediliyor
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {

  props: { people: { type: Object } },
  methods: {
    ...mapGetters(["getUser"]),
    ...mapActions(["getFollowingUser","unFollowingUser"]),
    async followUser() {
      await this.getFollowingUser(this.people._id);
     
    },
    async unFollowUser(){
      await this.unFollowingUser(this.people._id);
    }

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
  display: flex;
  align-items: center;
  box-shadow: 1px 1px 2px 2px rgb(224, 222, 222);
}
.header {
  color: #5a5d5f;
  text-decoration: none;
}
.user-image {
  flex: 1;
}
.content-info {
  flex: 2;
  font-size: 0.9rem;
}
.subscribe {
  justify-content: flex-end;
  flex: 1;
}
</style>