<template>
    <div id="footer-container">
        <strong>Developed with: </strong>
        <div class="tec">
            <ion-icon src="../img/icons/Stacks/Ionic.svg" />
            <ion-icon src="../img/icons/Stacks/VueJS.svg" />
            <ion-icon src="../img/icons/Stacks/TS.svg" />
            <ion-icon src="../img/icons/Stacks/SASS.svg" />
            <ion-icon src="@/img/icons/Stacks/JS.svg" />
            <ion-icon src="@/img/icons/Stacks/HTML.svg" />
            <ion-icon src="@/img/icons/Stacks/CSS.svg" />
        </div>
    </div>
</template>
<script lang="ts">
import { IonTitle, IonIcon } from "@ionic/vue";

export default {
    components: {
        IonTitle,
        IonIcon
    },
};
</script>
<style lang="scss" scoped>
#footer-container {
    display: flex;
    z-index: 1;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    flex-direction: column;

    .strong {
        flex-wrap: nowrap;
    }

    .tec {
        * {
            padding: 3px;
        }
    }
}

@media(min-width: 500px) {
    #footer-container {
        flex-direction: row;
    }
}
</style>
