<template>
  <div class="row input-area">
    <div class="area-1 col-md-12">
      <h4 class="float-left d-block mb-5">Temel Bilgiler</h4>
      <input
        type="text"
        class="form-control mb-5"
        placeholder="Topluluğun Adı"
        v-model="community.name"
        required
      />
    </div>
    <div class="area-2 col-md-12">
      <input
        type="text"
        class="form-control mb-5"
        placeholder="Lokasyon"
        required
        v-model="community.location"
      />
    </div>
    <div class="area-3 col-md-12">
      <select name="" id="" class="form-control mb-5">
        <option value="1">Yazılım</option>
      </select>
    </div>
    <div class="area-4 col-md-12">
      <select name="" id="" class="form-control mb-5">
        <option value="1">Herkese Açık</option>
        <option value="1">Kapalı</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: { community: { type: Object } },
  // computed: mapState(["community"]),
  watch: {
    community(oldValue, newValue) {
      console.log(newValue);
    },
  },
};
</script>

<style scoped>
.form-control {
  background-color: #f4f6f9;
}
</style>