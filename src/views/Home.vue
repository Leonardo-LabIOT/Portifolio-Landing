<template>
    <div>
        <div class="home">
            HOME : {{ platform.toUpperCase() }}
        </div>
    </div>
</template>
<script lang="ts">
import { Capacitor } from '@capacitor/core';

export default {
    setup() {
        const _platform = <string>Capacitor.getPlatform();
        return { _platform }
    },
    data() {
        return {
            platform: this._platform,
        }
    },
    async mounted() {
        // this.platform = Capacitor.getPlatform();
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