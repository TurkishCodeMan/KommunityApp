<template>
  <div class="container mb-3">
    <div class="user-image">
      <img
        class="img-fluid img-thumbnail rounded-circle"
        :src="people.imageUrl"
        alt="People Image"
    
      />
    </div>
    <div class="content-info">
      <a class="header" href="#">{{people.name}}</a>
      <p class="nickname">@hsynaltklc</p>
    </div>
    <div class="subscribe">
      <button class="btn btn-secondary btn-sm">Takip Et</button>
    </div>
  </div>
</template>

<script>
export default {
  props:{people:{type:Object}}
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  box-shadow: 1px 1px 2px 2px rgb(224, 222, 222);
}
.header{
    color:#5A5D5F;
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