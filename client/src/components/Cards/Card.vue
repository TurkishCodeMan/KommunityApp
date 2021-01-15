<template>
  <div
    :class="a.participants ? 'col-md-12 mb-3 card-container' : 'col-md-6 mb-3'"
  >
    <div class="card">
      <img src="../../assets/devops.jpg" alt="" class="img-fluid" />
      <div class="content">
        <h4 class="header"><router-link class="text-white" tag="a" :to="`/community/${a._id}`">{{ a.name }} </router-link></h4>
        <div class="foot">
          <img
            src="../../assets/bg.jpg"
            alt=""
            width="20"
            class="img-fluid rounded-circle pb-2"
          />
          <h6 v-if="a.members" class="member">{{ a.members.length }} Üye</h6>
          <h6 v-if="a.participants" class="member">
            {{ a.participants.length }} Katılımcı
          </h6>
          <button @click.prevent="subscribeACommunity(a._id)" v-if="!memberrControl && a.members" class="btn btn-warning btn-sm">
            Katıl
          </button>
            <button v-if="a.participants" class="btn btn-warning btn-sm">
            Etkinliğe git
          </button>
          <button @click.prevent="unSubscribeCommunity(a._id)" v-if="!a.participants && memberrControl" class="btn btn-secondary btn-sm">
            Ayrıl
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: { a: { type: Object } },
  data() {
    return {
      memberrControl: false,
    };
  },
  methods: {
    ...mapGetters(["getUser"]),
    ...mapActions(["subscribeCommunity","unSubscribeCommunityAction"]),
    memberControl() {
      if (this.a.members) {
        this.a.members.forEach((element) => {
          if (element == this.getUser()._id) {
            this.memberrControl = true;
          }
        });
      }
    },
    async subscribeACommunity(communityID){
      await this.subscribeCommunity(communityID);
    },
    async unSubscribeCommunity(communityID){
      await this.unSubscribeCommunityAction(communityID);
    }
  },

  async created() {
    await this.memberControl();
  },
};
</script>

<style scoped>
.bg-activity {
  background-color: #fbfbfb;
}
.card {
  font-family: "Work-Sans", sans-serif;
}
.img-fluid {
  opacity: 0.5;
  background-position: cover;
}
.content {
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  right: 20px;
  bottom: 3px;
  font-weight: 700;
  padding: 0.5rem;
}

.header:hover {
  text-decoration: rgb(0, 0, 0);
}

.foot {
  display: flex;
}
.member {
  margin-right: 1rem;
}
.btn {
  color: #fff;
}
</style>