<template>
	<div id="main-menu-icon-container">
		<ion-icon :icon="menu"></ion-icon>
		<div class="a"></div>
	</div>
</template>
<script lang="ts" setup>
import { IonIcon } from "@ionic/vue";
import { menu } from "ionicons/icons";
</script>
<style lang="scss" scoped>
#main-menu-icon-container {
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 1rem;

	* {
		z-index: 2;
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
			box-shadow: inset 0 0 3px 1.5px var(--dest), 0 0 15px 10px var(--dest);
		}
	}
}
</style>
