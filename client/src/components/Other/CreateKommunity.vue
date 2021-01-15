<template>
  <div class="row d-flex flex-column">
    <div class="photo-info">
      <app-profile></app-profile>
      <router-link tag="button" to="/" class="btn btn-secondary btn-sm">
        <i class="fas fa-arrow-left back"></i> Geri
      </router-link>
      <div class="text-center info">
        <h2 class="header">Kendi Topluluğunu Oluştur</h2>
        <p class="subText">Bunu Gerçekleştirecek İnsanları Bulun!</p>
      </div>
      <img class="img-fluid" src="../../assets/kommunity.jpg" alt="" />
    </div>

    <div class="row">
      <div class="col-md-4 d-flex flex-column community-info p-4">
        <div class="part-1 mb-5 p-3">
          <i class="fas fa-american-sign-language-interpreting mr-3 fa-2x"></i>
          <h5 class="d-inline">Topluluk Aktiviteleri</h5>
          <p class="text-muted">
            Tüm üyeler topluluk faaliyetlerini izleyebilir ve birbirleriyle
            etkileşime girebilir.
          </p>
        </div>
        <div class="part-2 mb-5 p-3">
          <i class="fas fa-calendar-alt mr-3 fa-2x"></i>
          <h5 class="d-inline">Etkinlikler Düzenleyin</h5>
          <p class="text-muted">
            Etkinlik yönetirken sorun mu yaşıyorsunuz? Etkinlik araçlarımız her
            zaman başarıya ulaşmanıza yardımcı olacaktır.
          </p>
        </div>
        <div class="part-3 mb-5 p-3">
          <i class="fas fa-calendar-alt mr-3 fa-2x"></i>
          <h5 class="d-inline">Kommunity'yi seviyorum</h5>
          <p class="text-muted">
            Kommunity, tarafımca günden güne geliştirilmektedir. Yeni özellikler
            ve iyileştirmeler her an gelebilir. Haberlerimiz için güncel kalın.
          </p>
        </div>
      </div>
      <div class="col-md-8 p-5">
        <component :is="selectedComponent" :community="community"> </component>
        <div class="end col-md-10">
          <div class="right float-right">
            <button
              class="btn btn-warning"
              @click="
                selectedComponent == 'appAciklama'
                  ? createCom()
                  : (selectedComponent = 'appAciklama')
              "
            >
              İleri
            </button>
          </div>
          <div class="left float-left">
            <button
              class="btn btn-secondary"
              @click="selectedComponent = 'appDefault'"
            >
              Geri
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserProfile from "../Parts/UserProfile";
import Default from "../SubParts/CreateCommunity/Default";
import Aciklama from "../SubParts/CreateCommunity/Aciklama";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      community: {},
      selectedComponent: "appDefault",
    };
  },
  methods: {
    ...mapActions(["createCommunity"]),
    async createCom() {
      if (Object.keys(this.community).length > 0) {
        await this.createCommunity(this.community);
        this.$router.push({ name: "home" });
      }
    },
  },
  components: {
    appProfile: UserProfile,
    appDefault: Default,
    appAciklama: Aciklama,
  },
};
</script>

<style scoped>
.community-info {
  background-color: #f4f6f9;
}
.fas {
  color: #ffa400;
}
.back {
  color: white;
}
.info {
  color: white;
  width: 15rem;
  background: #000;
  position: absolute;
  right: 45%;
  left: 45%;
  top: 40%;
  bottom: 60%;
}

@media screen and (max-width: 760px) {
  .info {
    right: 15%;
    left: 15%;
  }
  .nav-item {
    right: 10px;
  }
}

.header {
  font-size: 2.5rem;
  font-weight: 800;
}
.photo-info {
  position: relative;
}
.btn {
  position: absolute;
  margin: 2rem;
}
.img-fluid {
  height: 35rem;
  width: 100%;
}
.nav-item {
  position: absolute;
  margin: 2rem;
  right: 25px;
}
</style>