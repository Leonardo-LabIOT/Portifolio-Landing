<template>
    <div class="teste-C">
        <div id="teste-container" style="display: flex; place-content: center; ">
            *** Testes ***
        </div>
        <chip-card>HELLO</chip-card>

        <div class="teste" :class="theme.get_Theme()" @click="theme.set_Theme()">{{
            theme.get_Theme()?.toString().toUpperCase() }}
        </div>
        <div class="teste2">
            <p>
                asd
            </p>
            <div class="a"></div>
        </div>
        <ion-icon src="img/icons/star.svg" />
    </div>
</template>
<script lang="ts">
import { useMyPrefs } from '@/plugins/store';
import { IonIcon } from '@ionic/vue';
import ChipCard from '@/Components/ChipCard.vue';

export default {
    components: { IonIcon, ChipCard },
    setup() {
        const theme = useMyPrefs();
        return { theme }
    },
    data() {
        return {
        }
    },

}
</script>
<style lang="scss" >
#teste-container {
    font-weight: 500;
    font-size: 3rem;
    display: flex;
}

.teste-C {
    display: flex;
    place-content: center;

    * {
        margin: 25px;
    }
}

.teste {
    width: 33vw;
    height: 33vw;
    display: flex;
    align-items: center;
    justify-content: center;
    border: gold solid 2px;
    color: var(--primary-color);
    background: var(--bg-primary-color);
    background-image: var(--grad-primary);
}

.teste2 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 1px gold solid;
    background: #000;
    color: wheat;

    * {
        z-index: 2;
    }

    .a {
        color: #000;
        z-index: 1;
        position: absolute;
        border-radius: 50%;
        width: 5px;
        height: 5px;
        box-shadow: inset 0 0 3px 1.5px #0ff, 0 0 15px 13px #0ff;
    }

    &:hover {
        cursor: pointer;
        transform: scale(1.1);

        .a {
            z-index: 1;
            position: absolute;
            border-radius: 50%;
            width: 5px;
            height: 5px;
        }

    }

}

.chip {
    $x : 250px;
    width: $x;
    height: $x;
}

.teste:hover {
    cursor: pointer;
}
</style>