<template>
  <div class="icon-container">
    <ion-icon :icon="menu" />
  </div>
</template>
<script lang="ts" setup>
import { menu } from "ionicons/icons";
</script>
<style lang="scss" scoped>
.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0 1rem;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.9);
  }
}
</style>
