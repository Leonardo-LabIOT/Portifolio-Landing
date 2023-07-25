<template>
  <div class="nav-container">

    <!-- <div class="nav-links-bg" v-if="active" @click="active = false" /> -->
    <div class="nav-links" v-if="media">
      <!-- abc -->
      <router-link class="route-style" v-for="(route, index) in routes" :to="{ name: route.name }">{{ route.name }}
      </router-link>
      <toggle-theme />
    </div>

    <div v-else>
      <menu-icon @click="() => active = true" />
      <transition name="nav-links-menu-bg">
        <div class="nav-links-bg" v-if="active" @click="() => { active = false }" />
      </transition>
      <transition name="nav-links-menu">
        <div v-if="active" class="nav-links-container">
          <p class="nav-links-title">Navigation</p>
          <hr class="hr1">
          <!-- abc -->
          <router-link class="route-style" v-for="(route, index) in routes" :to="{ name: route.name }">{{ route.name }}
          </router-link>
          <toggle-theme class="toggle-theme" />
        </div>
      </transition>
    </div>
  </div>
</template>
<script lang="ts">

import { IonIcon, getPlatforms } from "@ionic/vue";

import MenuIcon from "./MenuIcon.vue";
import ToggleTheme from "./ToggleTheme.vue";
import { inject } from "vue";

export default {
  components: { ToggleTheme, IonIcon, MenuIcon },
  props: { media: Boolean },
  setup() {
    const platform = inject("platform") as String;
    return { platform };
  },
  data() {
    return {
      active: false,
      mobile: this.isMobile(),
      plat: getPlatforms(),
    };
  },
  methods: {
    isMobile() {
      return <String>this.platform != "web";
    },
  },
  computed: {
    routes() {
      return this.$router.options.routes.filter(r => r.name === 'Page').flatMap(r => r.children || r);
    }
  }
};
</script>
<style scoped lang="scss">
.nav-links-bg {
  position: fixed;
  background: var(--ct);
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
}

.nav-links {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.route-style {
  display: flex;
  place-content: center;
  color: var(--c2);
  text-decoration: none;
  margin: 10px;
  padding: 5px;
  z-index: 12;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
}

.nav-links-container {
  z-index: 11;
  position: fixed;
  right: 0;
  top: 0;
  width: 66vw;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: var(--bg1);
  color: var(--c2);
  box-shadow: var(--sd1);

  .route-style {
    background: var(--bg2);
    // background: var(--gds2);
    border-radius: 10px;
    box-shadow: var(--sd2);
    border: 1px solid var(--c2);
    width: 60%;
  }
}

.nav-links-title {
  display: flex;
  place-content: center;
  color: var(--c1);
  margin: 5px;
  font-size: 1.3rem;
  font-weight: bold;
}

.hr1 {
  width: 100%;
  height: 5px;
  margin: 10px 0;
  background: var(--gds1);
  border-radius: 3px;
}
.toggle-theme {
  cursor: pointer;
  margin: 1rem;
  &:hover {
    transform: scale(1.1);
  }
}

.nav-links-menu-enter-active,
.nav-links-menu-leave-active {
  transition: all 1s ease-in-out;
}

.nav-links-menu-bg-enter-active,
.nav-links-menu-bg-leave-active {
  transition: all 0.2s ease-in-out;
}

.nav-links-menu-enter-from,
.nav-links-menu-leave-to,
.nav-links-menu-bg-enter-from,
.nav-links-menu-bg-leave-to {
  transform: translatey(-100%);
}
</style>

