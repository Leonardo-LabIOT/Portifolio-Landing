<template>
  <div id="nav-bar-container">
    <slot />
    <!-- comentado para teste retirar linha acima -->
    <!-- <slot v-if="media" /> -->
    <!-- <MenuIcon @click="active = true" v-else /> -->
    <div id="nav-bg" v-if="active" @click="active = false" />
    <transition name="menu">
      <div id="nav-container" @click="() => active = false" v-if="active">
        <div id="nav">
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>
<script lang="ts">
import { IonIcon, getPlatforms } from "@ionic/vue";

import MenuIcon from "./MenuIcon.vue";
import { inject } from "vue";

export default {
  components: { IonIcon, MenuIcon },
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
  computed: {},
};
</script>
<style scoped lang="scss">
#nav-bg {
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba($color: #000, $alpha: 0.5);
  backdrop-filter: blur(2px);
  z-index: 2;
}

#nav {
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 60vw;
  max-width: 450px;
  height: 100%;
  background: rgba($color: #fff, $alpha: 1);
  color: #fff;
  z-index: 2;
  align-items: center;
  justify-content: space-between;
}

#nav-container {
  display: flex;
  position: fixed;
  align-items: center;
  top: 0;
  right: 0;
  z-index: 2;
}

.menu-enter-active,
.menu-leave-active {
  transition: all 0.33s ease-in-out;
}

.menu-enter-from,
.menu-leave-to {
  // transform: translateX(-100%);
  transform: translatex(100%);
  // opacity: 0;
}
</style>
