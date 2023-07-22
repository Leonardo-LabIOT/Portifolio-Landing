<template>
  <div>
    <div id="home" :class="theme">HOME : {{ getPlat }}</div>
  </div>
</template>
<script lang="ts">
import { useMyPrefs } from "@/plugins/store";
import { inject } from "vue";
export default {
  setup() {
    const platform = inject("platform");
    const theme = useMyPrefs()
    return { platform, theme };
  },
  data() {
    return {
      platform: this.platform,
      theme: this.theme,
    };
  },
  computed: {
    getPlat() {
      return this.platform.toString().toUpperCase() || "";
    },
  },
};
</script>

<style scoped lang="scss">
#home {
  display: flex;
  flex-direction: column;
  border: dashed var(--c3) 3px;
  background-image: var(--gd1);
  font-size: 1.5rem;
  font-weight: bold;
  text-align: justify;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin: 10px;
  box-shadow: var(--sd1);

}


.teste {
  width: 250px;
  height: 250px;
  box-shadow: 0px 0px 10px 10px red;
  background: #ff0;
  color: #000;
}
</style>
