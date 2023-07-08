<template>
  <div id="nav-container">
    <div>
      <div v-if="_mobile" @click="mobile(false)">Hello World!</div>
      <div v-else @click="mobile(true)">Olá Mundo!</div>
    </div>
    <div @click="myst.inc()">{{ myst.getCount }}</div>
  </div>
</template>
<script lang="ts">
import { useMyStore } from "@/plugins/store";
import { IonIcon } from "@ionic/vue";

export default {
  components: { IonIcon },
  setup() {
    const myst = useMyStore();
    return { myst };
  },
  data() {
    return {
      _mobile: false,
    };
  },
  methods: {
    mobile(aux: boolean) {
      this._mobile = aux;
    },
  },
};
</script>
<style scoped lang="scss">
#nav-container {
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  background: red;
  // z-index: 10;
}
</style>
