<template>
  <ion-icon icon="menu" size="large" class="btn" @click="active = true" />
  <ion-icon name="menu" size="large" class="btn" @click="active = true" />
  <ion-icon name="menu" size="large" @click="active = true" />
  <ion-icon icon="reorder-four-outline"></ion-icon>
  <ion-icon name="reorder-three-outline"></ion-icon>
  <ion-icon src="../../public/img/icons/Stacks/C++.svg" size="large" />

  <div id="nav-container" v-if="active">
    <div id="nav-bg" @click="active = false" />
    <div id="nav" @click="() => {
        console.log('abc');
      }
      ">
      <div>plat:{{ plat }}</div>
      <div v-if="mobile">itss mobile</div>

      <div v-else>its not mobile</div>
    </div>
  </div>
</template>
<script lang="ts">
import { IonIcon, getPlatforms } from "@ionic/vue";
import { inject } from "vue";

export default {
  components: { IonIcon },
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
    // isMobile() {
    //   return: { this.mobile };
    // },
  },
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
  backdrop-filter: blur(3px);

  z-index: 5;
}

#nav {
  display: flex;
  position: fixed;
  top: 5px;
  left: 5px;
  width: 200px;
  height: 200px;
  background: rgba($color: #f00, $alpha: 1);
  color: #fff;
  z-index: 9;
}
</style>
