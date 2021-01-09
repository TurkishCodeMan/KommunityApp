<template>
  <div :class="a.participants?'col-md-12 mb-3 card-container':'col-md-6 mb-3'">
    <div class="card">
      <img src="../../assets/devops.jpg" alt="" class="img-fluid" />
      <div class="content">
        <h4 class="header">{{ a.name }}</h4>
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
          <button class="btn btn-warning btn-sm">Katıl</button>
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
.bg-activity{
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