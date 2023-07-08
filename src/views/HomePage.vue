<template>
	<ion-page id="container">
		<ion-header :translucent="true">
			<ion-toolbar>
				<ion-title
					><p><strong> Leonardo Pereira </strong> | Front-End Developer</p>
				</ion-title>
			</ion-toolbar>
		</ion-header>
		<nav-bar />

		<ion-content :fullscreen="true">
			<ion-header collapse="condense">
				<ion-toolbar>
					<ion-title size="large">asdfghjklç</ion-title>
				</ion-toolbar>
			</ion-header>
			<!-- <VueIcon class="icons" /> -->

			<!-- <Focusable><div v-for="item in 13" :tabindex="item" :key="item">Hello : {{ item }}</div></Focusable> -->
			<div id="content">
				<Side-L />
				<router-view />
				<Side-R />
			</div>
		</ion-content>
	</ion-page>
</template>
<script lang="ts" setup>
	import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from "@ionic/vue";
</script>
<script lang="ts">
	import NavBar from "../Components/NavBar.vue";
	import Focusable from "@/Components/Focusable.vue";
	import VueIcon from "@/Components/VueIcon.vue";
	import SideR from "../Components/SideR.vue";
	import SideL from "@/Components/SideL.vue";
	// import { useMyStore } from "../plugins/store";

	export default {
		components: { NavBar, Focusable, VueIcon, SideL, SideR },
	};
</script>

<style lang="scss" scoped>
	#container {
		text-align: center;
		max-width: 100vw;
		height: 100vh;

		p {
			font-size: 1.5rem;
			line-height: 5rem;
			color: #8c8c8c;
			margin: 0;
			-webkit-box-shadow: 0 4px 4px -2px black;
			-moz-box-shadow: 0 4px 4px -2px black;
			box-shadow: 0 4px 4px -2px black;
			text-repl strong {
				font-size: 1.1em;
			}
		}
	}
	.icons {
		display: flex;
	}
	#content {
		width: 100vw;

	}
</style>
