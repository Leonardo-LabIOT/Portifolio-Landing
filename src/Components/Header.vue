<template>
  <div class="header-container" :class="{ 'center-header': !media }">
    <main-menu-icon @click="tgAct()" />

    <router-link class="title" :to="{ name: 'Home' }">
      <strong>Leonardo Pereira</strong>
      <div v-if="media" class="subTitle">|</div>
      <div v-if="media" class="subTitle">Front-End Developer</div>
    </router-link>

    <nav-bar :media="media" />
  </div>
</template>
<script lang="ts">
import { IonTitle, IonToolbar } from "@ionic/vue";
import NavBar from "./NavBar.vue";
import ToggleTheme from "./ToggleTheme.vue";
import MainMenuIcon from "./MainMenuIcon.vue";
import { RouteRecordRaw } from "vue-router";

export default {
  components: {
    IonTitle,
    IonToolbar,
    NavBar,
    ToggleTheme,
    MainMenuIcon,
  },
  props: { act: Boolean },
  data() {
    return { media: true, _act: this.act };
  },
  computed: {
    media_lim() {
      return 900;
    },
    routes(): RouteRecordRaw[] {
      return this.$router.options.routes
        .filter(r => r?.name === "Page")
        .flatMap(r => r?.children || r);
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },

  methods: {
    handleResize() {
      this.media = window.matchMedia(`(min-width:${this.media_lim}px)`).matches;
    },
    tgAct() {
      this.$emit("onAct", this.act);
    },
  },
  watch: {
    media(newMedia, { immediate }) {
      immediate ? this.handleResize : console.log("Nova propriedade media:", newMedia);
    },
  },
};
</script>
<style lang="scss" scoped>
$fon: 1.5rem;

.header-container {
  display: flex;
  flex-direction: row;
  padding: 1.3rem;
  font-size: $fon;
  justify-content: space-between;
  align-items: center;

}

.title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  color: var(--c2);
  margin-right: auto;

  * {
    padding: 0 0.5rem;
  }

  strong {
    color: var(--c1);
  }

  &:hover {
    cursor: pointer;
  }
}

.center-header {
  font-size: 1.3rem;

  .title {
    justify-content: center;
    margin-right: 0;
  }
}

@media (max-width: 400px) {
  .center {
    font-size: 5vw;
  }
}
</style>
