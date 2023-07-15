<template>
    <!-- <div id="footer-container"> -->
    <!-- <ion-toolbar class="conteudo">
            <p><strong> Leonardo Pereira </strong> | Front-End Developer</p>
    </ion-toolbar> -->
    <!-- </div> -->
    <div class="conteudo">
        <!-- <ion-title> -->
        <NavBar />

        <p class="title"><strong> Leonardo Pereira </strong>
        <p class="subTitle">
            | Front-End Developer
        </p>
        </p>
        <!-- </ion-title> -->
    </div>
</template>
<script lang="ts">
import {
    IonTitle,
    IonToolbar,
} from "@ionic/vue";
import NavBar from "./NavBar.vue";
export default {
    components: {
        IonTitle,
        IonToolbar,
        NavBar
    }
}
</script>
<style lang="scss" scoped>
$shadow-def: 0 0 10px 5px rgba($color: #033, $alpha: 0.5);

.title {
    display: flex;
    flex-direction: row;
    background: #000;
}

.subTitle {
    @media (width<680px) {
        background: red;
    }
}
</style>