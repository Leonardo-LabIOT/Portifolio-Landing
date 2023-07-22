<template>
    <transition name="main-menu-transition">
        <div class="main-menu-container" v-if="act" @click="tgAct()" />
    </transition>
    <transition name=" main-menu-content-transition">
        <div class="main-menu-content" v-if="act">
            <p v-for="item in 5">Lorem ipsum dolor sit amet.</p>
            <p>
                <slot />
            </p>
        </div>
    </transition>
</template>
<script lang="ts" setup>
import { useMyPrefs } from '@/plugins/store';
const theme = useMyPrefs();
</script>
<script lang="ts">
export default {
    props: { act: Boolean },
    methods: {
        tgAct() {
            this.$emit("onAct", this.act);
        },
    }
}
</script>
<style lang="scss" scoped>
.main-menu-container {
    display: flex;
    background: var(--ct);
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 10;
}

.main-menu-content {
    position: absolute;
    z-index: 11;
    top: 0;
    bottom: 0;
    color: var(--c1);
    background: var(--bg1);
    box-shadow: var(--sd1);
    -moz-box-shadow: var(--sd1);
    -webkit-box-shadow: var(--sd1);
    opacity: 1;
    width: 70%;
    max-width: 350px;
    display: flex;
    justify-content: center;
    align-items: start;

    p {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 15px;
        width: 100%;
        padding: 10px;
        background: var(--bg2);
        border: #ff0 solid 2px;
        border-radius: 3px;
    }
}

.main-menu-transition-enter-active,
.main-menu-transition-leave-active {
    transition: all 0.3s ease-in-out;
}

.main-menu-content-transition-enter-active,
.main-menu-content-transition-leave-active {
    /* Estilos de transição ativos para o conteúdo interno */
    transition: all 1.3s ease-in-out;
}

.main-menu-transition-enter-from,
.main-menu-transition-leave-to,
.main-menu-content-transition-enter-from,
.main-menu-content-transition-leave-to {
    transform: translatex(-100%);
}
</style>