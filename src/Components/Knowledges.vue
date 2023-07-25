<template>
    <div>
        <p>escrevendo aqui:</p>
        <!-- <p>myKnow: {{ myKnow.getIcon(0) }}</p> -->
        <p>knowledges: {{ knowledges }}</p>
        <p>NAME: {{ knowledges[0].name }}</p>
        <p>UUS: {{ uus }}</p>
        <p>UUI: {{ uui }}</p>
        <div>
            <!-- <ion-icon :src="uui" size="large" /> -->
            <ion-icon :src="`../../public/img/icons/Stacks/${knowledges[0].name}.svg`" size="large" />
            <ion-icon src="../../public/img/icons/Stacks/C++.svg" size="large" />
            <ion-icon src="../../public/img/icons/Stacks/C++.svg" size="large" />
            <ion-icon src="../../public/img/icons/Stacks/C++.svg" size="large" />
            <ion-icon src="../../public/img/icons/Stacks/C++.svg" size="large" />
        </div>
        <p>Icons by <a target="_blank" href="https://icons8.com">Icons8</a></p>
    </div>
</template>
<script lang="ts">
import { IonIcon } from "@ionic/vue";
import { useMyKnow } from "@/plugins/store";
export default {
    components: { IonIcon },
    setup() {
        const myKnow = useMyKnow();
        const knowledges = myKnow.knowledges;
        const uus = myKnow.knowledges[0].icon;
        const uui = myKnow.getIcon(0);
        return { uus, uui, knowledges };
    },
};
</script>
