<template>
  <div id="container">
    <div class="inner">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis maiores
      similique labore, incidunt dolorum nobis dicta quia quasi sint, laborum dolores sit
      quo asperiores, amet quibusdam ad minus unde cumque?
    </div>
  </div>
</template>
<script lang="ts">
export default {};
</script>
<style lang="scss" scoped>
#container {
  float: left;
  background: rgba(#aaa, 0.5);
  // opacity: 0.3;
  height: 100%;
  width: 100vw;
  position: absolute;
  left: 0;
  z-index: 30;
  backdrop-filter: blur(3px);
}

.inner {
  width: 75%;
  height: 100%;
  font-size: 2rem;
  background-color: #0ff;
}
</style>
