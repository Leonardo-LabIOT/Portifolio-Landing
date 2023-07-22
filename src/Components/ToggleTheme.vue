<template>
    <div>
        <div class="themeMenu" :class="theme.get_Theme()" @click="theme.set_Theme()">
            <ion-icon :icon="contrastOutline"></ion-icon>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useMyPrefs } from '@/plugins/store';
import { contrastOutline } from "ionicons/icons";
const theme = useMyPrefs();

</script>
<style lang="scss" >
.themeMenu {
    display: flex;
    align-items: end;
    justify-content: center;
    margin: 0 0 0 2rem;
    padding: 0;
    color: var(--primary-color);

    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
}
</style>