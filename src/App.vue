<template>
	<ion-app>
		<router-view />
	</ion-app>
</template>

<script setup lang="ts">
import { IonApp } from "@ionic/vue";
</script>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	list-style: none;
	-webkit-box-sizing: border-box !important;
	-moz-box-sizing: border-box !important;
	box-sizing: border-box !important;
	flex-wrap: wrap;
}
</style>
