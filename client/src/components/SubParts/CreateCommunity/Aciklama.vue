<template>
  <div class="row">
    <textarea class="form-control" v-model="community.description" name="aciklama" id="aciklama" cols="30" rows="10" placeholder="Topluluk Açıklaması..."></textarea>
  </div>
</template>

<script>
export default {
      props:{community:{type:Object}},
};
</script>

<style scoped>
.row{
    text-align: center;
}
#aciklama {
  border: none;
  background-color: #f4f6f9;
  width: 90%;

}
#aciklama:focus{
    outline:none
}
</style>