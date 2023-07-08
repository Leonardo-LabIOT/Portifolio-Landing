<template>
  <div id="nav-container">
    <div>
      <div v-if="_mobile" @click="mobile(false)">Hello World!</div>
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
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: red;
  z-index: 100;
}
</style>
