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
      <select name="" id="" class="form-control mb-5" v-model="community.catID">
        <option v-for="cat in categories" :key="cat.index" :value="cat._id">
          {{ cat.name }}
        </option>
      </select>
    </div>
    <div class="area-4 col-md-12">
      <select
        name=""
        id=""
        class="form-control mb-5"
        v-model="community.private"
      >
        <option value="All Open" selected>Herkese Açık</option>
        <option value="Private">Kapalı</option>
      </select>
    </div>
    <div class="area-5 col-md-12">
      <div
        class="upload-image"
        @drop.prevent="onChange($event)"
        @dragover.prevent
      >
        <div class="file-upload">
          <input
            ref="file"
            type="file"
            style="display: none"
            @change="onChange($event)"
            class="form-control"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="$refs.file.click()"
          >
            Resim Seç
          </button>
        </div>
      </div>

      <div v-if="imageAlt" class="image d-flex align-items-start bg-dark mt-4">
        <img
          width="745"
          height="500"
          style="background-size: cover"
          :src="this.imageAlt"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: { community: { type: Object } },
  // computed: mapState(["community"]),
  data() {
    return {
      imageAlt: "",
    };
  },
  methods: {
    ...mapGetters(["getCategories"]),
    async onChange(e) {
      let file = e.target.files || e.dataTransfer.files;

      this.imageAlt = URL.createObjectURL(file[0]);
      let formdata = new FormData();
      formdata.image = file[0];
      this.community.image = file[0];
    },
    getBase64(file) {
      return new Promise((resolve, reject) => {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          resolve(reader.result);
        };
        reader.onerror = function (error) {
          reject(error);
        };
      });
    },
  },
  computed: {
    categories() {
      return this.getCategories();
    },
  },
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
.upload-image {
  text-align: center;
  display: flex;
  background: url("../../../assets/dashed.jpg");
  border: 2px dashed #4689ee;
  justify-content: center;
  align-items: center;
}
.file-upload {
  padding: 2rem;
  text-align: center;
  background-size: cover;
  border-radius: 8px;
}
</style>