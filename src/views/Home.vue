<template>
    <div>
        <div class="home">
            HOME : {{ getPlat }}
        </div>
        <div class="icc">
            <div v-for="icon in icons" :key="icon.id">
                {{ icon.name }}
            </div>
            <!-- <ion-icon src="../../public/img/icons/icons8-figma.gif" size="large"></ion-icon> -->
        </div>
    </div>
</template>
<script lang="ts">
import { Capacitor } from '@capacitor/core';
import { IonIcon } from "@ionic/vue";


export default {
    components: { IonIcon },
    setup() {
        const devicePlatform: string = Capacitor.getPlatform() as string;

        // icones.js
        // const arquivos = require.context('../../public/img/icons/Stacks/', false, /\.svg$/);
        // let icones = [];

        // arquivos.keys().forEach(arquivo => {
        //     const nomeIcone = arquivo.match(/([^\/]+)\.svg$/)[1];
        //     const icone = arquivos(arquivo).default;

        //     icones.push({
        //         name: nomeIcone,
        //         path: icone
        //     });
        // });


        return { devicePlatform }
    },
    data() {
        return {
            platform: this.devicePlatform,
            icons: this.icones
        }
    },
    computed: {
        getPlat() {
            return this.platform.toString().toUpperCase()
                || ""
        }
    },
    async mounted() {
        // this.platform = await Capacitor.getPlatform().toString;
    },
}
</script>

<style scoped lang="scss">
.icc {
    width: 300px;
    height: 300px;
    display: flex;
    position: relative;
    z-index: 100;
    align-items: center;
    align-content: center;
    background: #0cc;
}

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