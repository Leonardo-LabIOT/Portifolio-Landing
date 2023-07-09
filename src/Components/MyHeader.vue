<template>
    <!-- <div id="footer-container"> -->
    <!-- <ion-toolbar class="conteudo">
            <p><strong> Leonardo Pereira </strong> | Front-End Developer</p>
    </ion-toolbar> -->
    <!-- </div> -->
    <div class="conteudo">
        <!-- <ion-title> -->
        <p><strong> Leonardo Pereira </strong> | Front-End Developer</p>
        <!-- </ion-title> -->
    </div>
</template>
<script lang="ts">
import {
    IonTitle,
    IonToolbar,
} from "@ionic/vue";

export default {
    components: {
        IonTitle,
        IonToolbar,
    }
}
</script>
<style lang="scss" scoped>
$shadow-def: 0 0 10px 5px rgba($color: #033, $alpha: 0.5);

.conteudo {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: 4.5vmin;
    line-height: 9vmin;
    color: #8c8c8c;
    -webkit-box-shadow: $shadow-def;
    -moz-box-shadow: $shadow-def;
    box-shadow: $shadow-def;
}
</style>