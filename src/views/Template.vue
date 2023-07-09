<template>
	<ion-page>
		<!-- <nav-bar /> -->
		<ion-header :translucent="true">
			<MyHeader />
		</ion-header>

		<ion-content>
			<!-- :fullscreen="true"> -->
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
		<ion-footer :translucent="true">
			<MyFooter />
		</ion-footer>
	</ion-page>
</template>
<script lang="ts" setup>
import {
	IonContent,
	IonHeader,
	IonFooter,
	IonPage,

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
import MyFooter from "@/Components/MyFooter.vue"
import MyHeader from "@/Components/MyHeader.vue"
// import { useMyStore } from "../plugins/store";

export default {
	components: { NavBar, Focusable, VueIcon, SideL, SideR, Menu, MyFooter, MyHeader },
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

	p {
		font-size: 1.5rem;
		line-height: 5rem;
		color: #8c8c8c;
		margin: 0;
		// -webkit-box-shadow: $shadow-def;
		// -moz-box-shadow: $shadow-def;
		// box-shadow: $shadow-def;
	}
}

ion-content {
	position: relative;
}

#main_router {
	background: #033;
	position: absolute;
	top: 10px;
	left: 10px;
	right: 10px;
	bottom: 10px;
}

ion-footer {
	position: relative;
}
</style>
