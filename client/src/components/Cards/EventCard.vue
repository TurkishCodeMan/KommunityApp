<template>
  <div class="col-md-12 mb-3">
    <div class="header mr-2">
      <div class="card w-100 ml-4 p-4">
        <div class="row">
          <img
            :src="a.userID.imageUrl"
            alt=""
            class="rounded-circle"
            width="60"
          />
          <p class="font-weight-bold mr-1">{{ a.userID.name }}</p>
          <div v-if="a.eventType == 'createCommunity'" class="d-flex">
            <p class="text-muted mr-1">bir topluluk oluşturdu</p>
            <p class="font-weight-bold mr-1">{{ a.community.name }}</p>
          </div>
          <div v-if="a.eventType == 'createActivity'" class="d-flex">
            <p class="text-muted mr-1">bir etkinliğe gidiyor</p>
            <p class="font-weight-bold mr-1">{{ a.activity.name }}</p>
          </div>
          <div v-if="a.eventType == 'subscribeCommunity'" class="d-flex">
            <p class="text-muted mr-1">bir topluluğa katıldı</p>
            <p class="font-weight-bold mr-1">{{ a.community.name }}</p>
          </div>
          <div v-if="a.eventType == 'unSubscribeCommunity'" class="d-flex">
            <p class="text-muted mr-1">bir topluluktan ayrıldı</p>
            <p class="font-weight-bold mr-1">{{ a.community.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { a: { type: Object } },
};
</script>

<style scoped>
.card {
  border: none;
}
</style>