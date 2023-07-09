<template>
    <!-- <div id="footer-container"> -->
    <div class="conteudo">
        <!-- <Ion-title> -->
        <p><strong>Footer</strong></p>
        <!-- </Ion-title> -->
    </div>
    <!-- </div> -->
</template>
<script lang="ts">
import { IonTitle } from "@ionic/vue";

export default {
    components: {
        IonTitle,
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
    font-size: 3vmin;
    line-height: 8vmin;
    color: #8c8c8c;
    -webkit-box-shadow: $shadow-def;
    -moz-box-shadow: $shadow-def;
    box-shadow: $shadow-def;
}
</style>