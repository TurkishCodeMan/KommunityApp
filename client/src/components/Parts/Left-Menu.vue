<template>
  <ul class="d-flex flex-column justify-content-start">
    <li class="nav-item active d-flex" @click="clickDiscover($event)">
      <i class="fab fa-reddit-alien"></i>
      <a class="nav-link">Keşfet</a>
    </li>

    <li class="nav-item d-flex" @click.prevent="clickLastActivity($event)">
      <i class="fas fa-fan"></i>
      <a class="nav-link" href="">Son Aktiviteler</a>
      <div class="count">{{ eventSize }}</div>
    </li>

    <li class="nav-item d-flex" @click.prevent="clickMyCommunities($event)">
      <i class="fas fa-american-sign-language-interpreting"></i>
      <a class="nav-link" href="">Topluluklarım</a>
    </li>

    <li class="nav-item d-flex">
      <i class="fas fa-chart-line"></i>
      <a class="nav-link" href="">Etkinliklerim</a>
    </li>
    <li class="nav-item d-flex">
      <i class="fas fa-ticket-alt"></i>
      <a class="nav-link" href="">Biletlerim</a>
    </li>
  
  </ul>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      eventSize: 0,
    };
  },
  methods: {
    ...mapActions(["getActivitiesAction", "getUserEvents", "myCommunities"]),
    ...mapMutations(["setArray"]),
    ...mapGetters(["getUser", "getArray"]),
    async clickDiscover(e) {
      await this.getActivitiesAction();

      if (this.$route.name != "home") {
        this.$router.push({ name: "home" });
      }

      this.classControl(e.target);
    },
    async clickLastActivity(e) {
      await this.getUserEvents();
      if (this.$route.name != "last-events") {
        this.$router.push({ name: "last-events" });
      }
      this.eventSize = this.getArray().length;
      this.classControl(e.target);
    },
    async clickMyCommunities(e) {
      await this.myCommunities();
      if (this.$route.name != "my-communities") {
        this.$router.push({ name: "my-communities" });
      }

      this.classControl(e.target);
    },

    classControl(element) {
      let elements = document.querySelectorAll(".nav-item");
      elements.forEach((e) => {
        e.classList.remove("active");
      });

      if (element.classList[0] == "nav-link") {
        element.parentElement.classList.forEach((Class) => {
          if (Class == "active") {
            return element.parentElement.classList.remove("active");
          } else {
            return element.parentElement.classList.add("active");
          }
        });
      } else {
        element.classList.forEach((Class) => {
          if (Class == "active") {
            return element.classList.remove("active");
          } else {
            return element.classList.add("active");
          }
        });
      }
    },
  },


};
</script>

<style scoped>
ul {
  list-style-type: none;
}
.nav-item {
  cursor: pointer;
  padding: 0.3rem;
}
.nav-item i {
  padding-top: 0.5rem;
  font-size: 1.4rem;
  color: #adadad;
}
.nav-link {
  color: #1a1e21;
  font-weight: 700;
  font-size: 1.1rem;
}

.nav-item.active i {
  color: #ffa400;
}
.nav-item.active {
  background-color: #fbfbfb;
}

.count {
  margin-top: 0.5rem;
  text-align: center;
  border-radius: 20%;
  max-height: 1.2rem;
  min-width: 1.3rem;
  color: rgb(235, 235, 235);
  background: red;
  font-weight: 700;
  font-size: 0.6rem;
}
</style>