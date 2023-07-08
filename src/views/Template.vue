<template>
	<ion-page>
		<!-- <nav-bar /> -->
		<ion-header :translucent="true">
			<ion-toolbar>
				<ion-title>
					<p><strong> Leonardo Pereira </strong> | Front-End Developer</p>
				</ion-title>
			</ion-toolbar>
		</ion-header>

		<ion-content :fullscreen="true">
			<!-- <div id="container"> -->

			<!-- <VueIcon class="icons" /> -->
			<!-- <Focusable><div v-for="item in 13" :tabindex="item" :key="item">Hello : {{ item }}</div></Focusable> -->
			<!-- <div id="content">
				<Side-L />
				<Side-R />
			</div> -->
			<!-- <Menu /> -->

			<!-- <div > -->
			<router-view id="main_router" />
			<!-- </div> -->
			<!-- </div> -->
		</ion-content>
		<ion-page>
			<myFooter />
		</ion-page>
	</ion-page>
</template>
<script lang="ts" setup>
import {
	IonContent,
	IonHeader,
	IonFooter,
	IonPage,
	IonTitle,
	IonToolbar,
	IonIcon,
} from "@ionic/vue";
</script>
<script lang="ts">
import NavBar from "@/Components/NavBar.vue";
import Focusable from "@/Components/Focusable.vue";
import VueIcon from "@/Components/VueIcon.vue";
import SideR from "../Components/SideR.vue";
import SideL from "@/Components/SideL.vue";
import Menu from "@/Components/Menu.vue";
// import { useMyStore } from "../plugins/store";

export default {
	components: { NavBar, Focusable, VueIcon, SideL, SideR, Menu },
};
</script>

<style lang="scss" scoped>
#container {
	text-align: center;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #303;
	color: #ff0;


	p {
		font-size: 1.5rem;
		line-height: 5rem;
		color: #8c8c8c;
		margin: 0;
		-webkit-box-shadow: 0 4px 4px -2px black;
		-moz-box-shadow: 0 4px 4px -2px black;
		box-shadow: 0 4px 4px -2px black;
	}
}

ion-content {
	position: relative;
	// width: 100vw;
}

#main_router {
	// width: 100%;
	// padding: 25px;
	background: #a55;
	// color: #333;
	position: absolute;
	top: 20px;
	left: 10px;
	right: 10px;
	bottom: 20px;
	// justify-content: center;
	// align-items: center;
	// font-size: 3vmax;
	// font-weight: bold;
}
</style>
