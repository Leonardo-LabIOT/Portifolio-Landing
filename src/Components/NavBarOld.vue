<template>
  <div id="nav-bar-container">
    <MenuIcon @click="active = true" />
    <div id="nav-bg" v-if="active" @click="active = false" />
    <transition name="menu">
      <div id="nav-container" v-if="active">
        <div id="nav">
          <div>{{ plat }}</div>
          <div v-if="mobile">itss mobile</div>
          <div v-else>its not mobile</div>
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
  width: 67vw;
  max-width: 450px;
  height: 100vh;
  background: rgba($color: #f0f, $alpha: 1);
  color: #fff;
  z-index: 2;
}


#nav-container {
  display: flex;
  position: fixed;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 2;
}

.menu-enter-active,
.menu-leave-active {
  transition: all 0.33s ease-in-out;
}

.menu-enter-from,
.menu-leave-to {
  // transform: translateX(-100%);
  transform: translatex(-100%);
  // opacity: 0;
}
</style>
