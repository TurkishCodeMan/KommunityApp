<template>
  <div class="container p-4">
    <div class="organizators">
      <div class="head mb-3">
        <p class="text-muted mr-2">Organizatörler</p>
      </div>
      <div
        class="people"
        v-for="org in community.organizators"
        :key="org.index"
      >
        <div class="person d-flex">
          <img
            :src="org.imageUrl"
            alt=""
            width="50"
            class="rounded-circle img-thumbnail mr-1"
          />
        </div>
        <div class="info-person">
          <h5>{{ org.name }}</h5>

          <h6 class="text-muted">Organizator</h6>
        </div>
      </div>
    </div>
  
    <div class="members mt-4" v-if="community.members">
      <div class="head">
        <p class="text-muted mr-2">Üyeler</p>
        <p class="count">{{ community.members.length }}</p>
      </div>

      <div class="member-images d-flex mt-2 mr-1">
        <div
          class="image"
          v-for="member in community.members"
          :key="member.index"
        >
          <img
            :src="member.imageUrl"
            alt=""
            width="50"
            class="rounded-circle img-thumbnail mr-1"
          />
        </div>
      </div>
    </div>

    <div class="last-events mt-3">
      <div class="head mb-2">
        <p class="text-muted mr-2">Son Aktiviteler</p>
        <p class="count">{{ community.events.length }}</p>
      </div>
      <div class="events">
        <div class="event d-flex mb-2 align-items-center" v-for="e in community.events" :key="e.index">
          <img
            :src="e.userID.imageUrl"
            alt=""
            width="50"
            class="rounded-circle img-thumbnail mr-1"
          />
          <p class="name-text">{{e.userID.name}}</p>
          <p v-if="e.eventType=='subscribeCommunity'" class="text-muted event-text">bir topluluğa katıldı</p>
           <p v-if="e.eventType=='unSubscribeCommunity'" class="text-muted event-text">bu topluluktan ayrıldı</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RightMenu",
  props: { community: { type: Object } },
};
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}
.container {
  background: #1a1e21;
  width: 100%;
  min-height: 75%;
  border-radius: 8px;
  color: #fff;
  padding: 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.people {
  display: flex;
  align-items: flex-start;
}
.info-person {
  text-align: start;
}
.organizators,
.members {
  display: flex;
  flex-direction: column;
}
.head {
  display: flex;
  align-items: center;
}
.count {
  padding: 0.1rem;
  min-width: 40px;
  border-radius: 8px;
  background-color: #ffbc00;
}
.event-text{
    font-size: 0.8rem;
}
.name-text{
    font-size: 0.9rem;
    margin-right: 5px;
}
.events {
  overflow: visible;
}
</style>