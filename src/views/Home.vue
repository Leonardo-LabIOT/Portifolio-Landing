<template>
    <div>
        <div class="home">
            HOME : {{ getPlat }}
        </div>
    </div>
</template>
<script lang="ts">
import { Capacitor } from '@capacitor/core';

export default {
    setup() {
        const devicePlatform: string = Capacitor.getPlatform() as string;
        return { devicePlatform }
    },
    data() {
        return {
            platform: this.devicePlatform,
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