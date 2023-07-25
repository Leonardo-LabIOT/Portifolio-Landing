<template>
    <div>
        <div class="themeMenu" :class="theme.get_Theme()" @click="theme.set_Theme()">
            <!-- <ion-icon :icon="contrastOutline"></ion-icon> -->
            <ion-icon :icon="moon" v-if="theme.get_Theme() === 'light'"></ion-icon>
            <ion-icon :icon="sunny" v-else></ion-icon>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useMyPrefs } from '@/plugins/store';
import { contrastOutline, moonOutline, sunny, moon } from "ionicons/icons";
const theme = useMyPrefs();

</script>
<style lang="scss" >
.themeMenu {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 2rem;
    padding: 0;
    color: var(--primary-color);

    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
}
</style>