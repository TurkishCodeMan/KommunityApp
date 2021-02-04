<template>
  <section class="details">
    <app-header></app-header>
    <div class="title mt-1">
      <div class="container d-flex p-4 position-relative title-container">
        <div class="community-image mr-4">
          <img
            class="img-fluid rounded"
            width="100"
            :src="
              community.imageUrl != undefined
                ? require(`../../../../server/uploads/${community.imageUrl}`)
                : require('../../assets/devops.jpg')
            "
            alt=""
          />
        </div>

        <div class="community-info">
          <h2>{{ community.name }}</h2>
          <div class="area-1">
            <i class="fas fa-map-marker-alt float-left mr-1 mt-1"></i>
            <span class="float-left">{{ community.location }}</span>
          </div>

          <div class="area-2" v-if="community.members!=undefined">
            <i class="fas fa-user-friends mr-1"></i>
            <span class="mr-3">{{ community.members.length }} Üyeler</span>
          </div>

          <div class="area-3 d-flex">
            <span v-if="community.type"
              ><img src="../../assets/pro.png" alt="" width="60"
            /></span>
            <span v-if="!community.type"
              ><img src="../../assets/base.png" alt="" width="60"
            /></span>
          </div>
        </div>
        <div class="davet">
          <button
            class="btn btn-info"
            :class="community.subscribe==true ? 'btn btn-warning' : ''"
            @click="clickButton"
          >
            {{ community.subscribe==true ? "Ayrıl" : "Katıl" }}
          </button>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="container">
        <div class="container content-container d-flex">
          <div class="menu p-3">
            <div class="options d-flex">
              <a class="opt about-button mr-3" href="#">Hakkında</a>

              <a class="opt event-button mr-3" href="#">Etkinlikler</a>

              <a class="opt member-button mr-3" href="#">Üyeler</a>
            </div>
            <div class="cizgi d-flex">
              <hr class="about" />
              <hr class="activity" />
              <hr class="members" />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-8 p-1 d-flex flex-column">
            <div class="title-content col-md-12">
              <h4 class="float-left mb-4">Topluluk Hakkında</h4>
              <img
                :src="
                  community.imageUrl != undefined
                    ? require(`../../../../server/uploads/${community.imageUrl}`)
                    : require('../../assets/devops.jpg')
                "
                class="img-fluid rounded mb-3"
                :alt="'./' + community.imageUrl"
                height="100"
              />
              <p class="float-left">{{ community.description }}</p>
            </div>

            <div class="activities d-flex">
              <div class="header-activity col-md-12">
                <h4 class="float-left">Etkinlikler</h4>
                <a href="#" class="btn btn-secondary float-right">Geçmiş</a>
                <a href="#" class="btn btn-info mr-2 float-right">Yaklaşan</a>
              </div>
            </div>

            <div
              class="activity-card col-md-12 p-3 mb-5"
              v-for="activity in community.activities"
              :key="activity.index"
            >
              <div class="row">
                <div class="col-md-8">
                  <h5 class="float-left">{{ activity.name }}</h5>
                  <p class="text-muted">{{ activity.endTime }}</p>
                  <p class="text-muted">Kimden : {{ community.name }}</p>
                  <p v-if="activity.participants!=undefined">{{ activity.participants.length }} kişi Katılıyor</p>
                </div>
                <div class="col-md-4">
                  <img src="../../assets/devops.jpg" class="img-fluid" alt="" />
                </div>
              </div>
            </div>

            <div class="tartismalar d-flex mb-4">
              <div class="header-tartisma col-md-12">
                <h4 class="float-left mt-3 mb-3">Tartışma Başlat</h4>
                <textarea
                  name=""
                  id=""
                  cols="20"
                  rows="5"
                  class="form-control"
                ></textarea>
              </div>
            </div>
            <div class="tartisma-cards d-flex">
              <div class="tartisma-card p-3 d-flex">
                <div class="author p-3">
                  <img
                    src="../../assets/devops.jpg"
                    class="img- rounded"
                    width="50"
                    alt=""
                  />
                  <h5>Mehmet TV</h5>
                  <p class="text-muted">1 Ay Önce</p>
                </div>
                <div class="tartisma-text bg-white p-4">
                  <p>
                    Merhabalar, İş fırsatlarını değerlendiren Full Stack, Mid ve
                    Senior Back-end Developer'lar ; Microsoft web
                    teknolojilerinde deneyimliysen , Asp.Net MVC- .Net Core -
                    Entity Framework -Rest Web Api - MsSQL , MongoDB,
                    ,Nativescript gibi teknolojileriyle projelerde yer aldıysan
                    , Dinamik ve yenilikçi bir çalışma ortamında çalışmak
                    istiyorsanız Sizinle tanışmayı çok isteriz.
                    osman.yalvac@konusarakogren.com üzerinden özgeçmişinizi
                    paylaşabilir, bilgi alabilirsiniz
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4"><RightMenu :community="community" /></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Header from "../Header";
import RightMenu from "../SubParts/CommunityDetails/RightMenu";

import { mapActions, mapGetters } from "vuex";
export default {

  methods: {
    ...mapActions([
      "getCommunityById",
      "unSubscribeCommunityAction",
      "subscribeCommunity",
    ]),
    ...mapGetters(["getCommunity", "getUser"]),

    async clickButton() {
      if (this.community.subscribe) {
        await this.unSubscribeCommunityAction(this.community._id);
      } else {
        await this.subscribeCommunity(this.community._id);
      }
    },
  },

  computed: {
    community() {
      return this.getCommunity();
    },
    user() {
      return this.getUser();
    },
  },
  components: {
    RightMenu,
    appHeader: Header,
  },
  async mounted() {
    await this.getCommunityById(this.$route.params.id);
  },
};
</script>

<style scoped>
.tartisma-text {
  border-radius: 10px;
}
.tartisma-cards {
  background-color: #f4f6f9;
}
.form-control {
  background-color: #f4f6f9;
}
.activity-card {
  background-color: #f4f6f9;
}
.header-activity {
  padding: 1rem;
}
.opt {
  color: #727272;
  text-decoration: none;
  box-shadow: 2px 5px 1px 0.1px 0.5 black;
  border-radius: 5px;
}
.about-button:hover,
.about {
  border: none;
  border-bottom: 2px solid #ffa400;
}
.event-button:hover,
.activity {
  border: none;
  border-bottom: 2px solid #ffa400;
}

.member-button:hover,
.member {
  border: none;
  border-bottom: 2px solid #ffa400;
}

.davet {
  position: absolute;
  right: 0;
  top: 30%;
}
.title {
  width: 100%;
  background-color: #f4f6f9;
}
@media screen and (max-width: 768px) {
  .title-container {
    flex-direction: column;
    text-align: center;
  }
  .community-info {
    text-align: center;
  }
  .davet {
    position: relative;
  }
}
</style>