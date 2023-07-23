<template>
  <div class="header-container" :class="{ center: !media }">
    <main-menu-icon @click="tgAct()" />

    <router-link class="title" :style="{ justifyContent: media ? 'flex-start' : 'center' }" :to="{ name: 'Home' }">
      <strong>Leonardo Pereira</strong>
      <div v-if="media" class="subTitle">|</div>
      <div v-if="media" class="subTitle">Front-End Developer</div>
    </router-link>
    <NavBarLinks id="routes-style" v-if="media" :media="media">
      <router-link class="route-style" v-for="(route, index) in routes" :to="{ name: route.name }">{{ route.name }}
      </router-link>
      <Toggle-theme />
    </NavBarLinks>
  </div>
</template>
<script lang="ts">
import { IonTitle, IonToolbar } from "@ionic/vue";
import NavBar from "./NavBar.vue";
import NavBarLinks from "./NavBarLinks.vue";
import ToggleTheme from "./ToggleTheme.vue";
import MainMenuIcon from "./MainMenuIcon.vue";
import { RouteRecordRaw } from "vue-router";

export default {
  components: {
    IonTitle,
    IonToolbar,
    NavBarLinks,
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
}

#routes-style {
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: right;


}

.route-style {
  font-weight: 300;
  font-size: 0.75 * $fon;
  padding: 0 1rem;
  text-decoration: none;
  color: var(--c2);

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    font-weight: 600;
  }
}

.main-head {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  font-size: $fon;
}

.title {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  color: var(--c2);

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

.center {
  font-size: 1.3rem;
  justify-content: space-evenly;
  // background: #ff0;
}

@media (max-width: 400px) {
  .center {
    font-size: 5vw;
  }
}</style>
