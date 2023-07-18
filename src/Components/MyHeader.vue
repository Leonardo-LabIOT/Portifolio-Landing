<template>
  <div class="header-container" :class="{ 'center': !media }">
    <NavBar />
    <div class="title" :style="{ justifyContent: media ? 'flex-start' : 'center' }">
      <strong>Leonardo Pereira </strong>
      <div v-if="media" class="subTitle">|</div>
      <div v-if="media" class="subTitle">Front-End Developer</div>
    </div>

    <NavBarLinks id="routes-style" :media="media">
      <router-link class="route-style" :to="{ name: 'Home' }">Home</router-link>
      <router-link class="route-style" :to="{ name: 'About' }">About</router-link>
      <router-link class="route-style" :to="{ name: 'Home' }">Home</router-link>
      <router-link class="route-style" :to="{ name: 'About' }">About</router-link>
    </NavBarLinks>
  </div>
</template>
<script lang="ts">
import { IonTitle, IonToolbar } from "@ionic/vue";
import NavBar from "./NavBar.vue";
import NavBarLinks from "./NavBarLinks.vue";
export default {
  components: {
    IonTitle,
    IonToolbar,
    NavBar,
    NavBarLinks
  },
  data() {
    return { media: window.matchMedia(`(min-width:${this.media_lim}px)`).matches };
  },
  computed: { media_lim() { return 900 } },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.media = window.matchMedia(`(min-width:${this.media_lim}px)`).matches;
    },
  },
  watch: {
    media(newMedia) {
      // Executar ações quando a propriedade 'media' for modificada
      console.log("Nova propriedade media:", newMedia);
    },
  },
};
</script>
<style lang="scss" scoped>
$shadow-def: 0 0 10px 5px rgba($color: #033,
    $alpha: 0.5,
  );

.header-container {
  display: flex;
  flex-direction: row;
  padding: 1.3rem;
  font-size: 1.25em;
  font-size: 1.55em; //teste
}

.main-head {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
}

#routes-style {
  background: #ff0;
}

.route-style {
  color: #000;
  font-weight: 300;
  font-size: 1.3rem;
  padding: 0 1rem;

  text-decoration: none;
}

.title {
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;

  * {
    padding: 0 0.5rem;
  }
}

.center {
  justify-content: space-evenly;
  background: #ff0;
}
</style>
