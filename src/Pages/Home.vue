<template>
  <div>
    <div class="home">HOME : {{ getPlat }}</div>

    <div @click="teste">click</div>
  </div>
</template>
<script lang="ts">
import { inject } from "vue";
export default {
  setup() {
    const platform = inject("platform");
    return { platform };
  },
  data() {
    return {
      platform: this.platform,
    };
  },
  computed: {
    getPlat() {
      return this.platform.toString().toUpperCase() || "";
    },
  },
  methods: {
    teste() {
      console.log("=> -> <> >> == ===");
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  border: dashed silver 3px;
  background: #055;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  justify-content: center;
  align-items: center;
  text-align: justify;
}
</style>
