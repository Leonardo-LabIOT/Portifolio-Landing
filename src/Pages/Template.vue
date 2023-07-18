<template>
  <ion-page>
    <ion-header :translucent="true">
      <MyHeader class="bar header" />
    </ion-header>

    <ion-content id="container">
      <router-view id="main_router" />
    </ion-content>
    <ion-footer :translucent="true">
      <MyFooter class="bar footer" />
    </ion-footer>
  </ion-page>
</template>
<script lang="ts" setup>
import { IonContent, IonHeader, IonFooter, IonPage } from "@ionic/vue";
</script>
<script lang="ts">
import Focusable from "@/Components/Focusable.vue";
import VueIcon from "@/Components/VueIcon.vue";
import SideR from "../Components/SideR.vue";
import SideL from "@/Components/SideL.vue";
import Menu from "@/Components/Menu.vue";
import MyFooter from "@/Components/MyFooter.vue";
import MyHeader from "@/Components/MyHeader.vue";

export default {
  components: {
    VueIcon,
    SideL,
    SideR,
    Menu,
    MyFooter,
    MyHeader,
  },
};
</script>

<style lang="scss" scoped>
$shadow-def: 0 0 10px 5px rgba($color: #333,
    $alpha: 0.5,
  );

#container {
  text-align: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #000;
  font-size: 50px;
}

ion-page {
  background: #000;
}

ion-content {
  position: relative;
}

ion-footer {
  position: relative;
}

#main_router {
  background: #033;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
}

.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 100%;
  width: 100%;


  &.footer {
    font-size: 1.25rem;
    background: #fff;
    padding: 1rem;
  }

  color: #8c8c8c;
  -webkit-box-shadow: $shadow-def;
  -moz-box-shadow: $shadow-def;
  box-shadow: $shadow-def;
}
</style>
