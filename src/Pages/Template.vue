<template>
  <ion-page :class="theme">
    <ion-header :translucent="true">
      <Header :act='act' @onAct="tgAct" />
    </ion-header>
    <ion-content :translucent="true">
      <router-view />
    </ion-content>
    <ion-footer :translucent="true">
      <MyFooter />
    </ion-footer>
    <MainMenu :act='act' @onAct="tgAct">
      <p @click="tgAct()"> menu1</p>
    </MainMenu>
  </ion-page>
</template>
<script lang="ts" setup>
import { IonContent, IonHeader, IonFooter, IonPage } from "@ionic/vue";

</script>
<script lang="ts">
import VueIcon from "@/Components/VueIcon.vue";
import MyFooter from "@/Components/MyFooter.vue";
import Header from "@/Components/Header.vue";
import MainMenu from "@/Components/MainMenu.vue";
import { useMyPrefs } from "@/plugins/store"
import { inject } from "vue";

export default {
  components: {
    VueIcon,
    MyFooter,
    Header,
    MainMenu,
  },
  data() {
    return { act: false }
  },
  computed: {
    theme() {
      const myTheme = useMyPrefs();
      return myTheme.get_Theme();
    }
  }
  , methods: {
    tgAct() {
      this.act = !this.act
    }
  }
};
</script>

<style lang="scss" scoped>
ion-page {
  background: var(--bg1);
}

ion-content {
  overflow: hidden;
  --background: var(--bg2);
}

ion-header,
ion-footer {
  color: var(--c1);
  background: var(--bg1);
  -webkit-box-shadow: var(--sd1);
  -moz-box-shadow: var(--sd1);
  box-shadow: var(--sd1);
}
</style>
