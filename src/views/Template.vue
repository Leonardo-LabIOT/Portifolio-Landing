<template>
	<ion-page>
		<!-- <nav-bar /> -->
		<ion-header :translucent="true">
			<MyHeader class="bar header" />
		</ion-header>

		<ion-content id="container">
			
			<!-- :fullscreen="true"> -->
			<!-- <div > -->

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
		<p>Icons by <a target="_blank" href="https://icons8.com">Icons8</a></p>
		<ion-footer :translucent="true">
			<MyFooter class="bar footer" />
		</ion-footer>
	</ion-page>
</template>
<script lang="ts" setup>
import {
	IonContent,
	IonHeader,
	IonFooter,
	IonPage,
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
import { IonIcon } from "@ionic/vue";
// import { useMyStore } from "../plugins/store";

export default {
	components: { NavBar, Focusable, VueIcon, SideL, SideR, Menu, MyFooter, MyHeader, IonIcon },
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
	background: #000;
	font-size: 50px;
}


ion-page {
	background: #ff0;
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

$shadow-def: 0 0 10px 5px rgba($color: #f33, $alpha: 0.5);

.bar {
	display: flex;
	align-items: center;
	justify-content: space-around;
	position: relative;
	height: 100%;
	width: 100%;
	margin: 0;
	padding: 1.25rem;
	font-size: 1.25em;
	line-height: 1.5;

	&.footer {
		font-size: 1.25rem;
		padding: 1rem;
	}

	color: #8c8c8c;
	-webkit-box-shadow: $shadow-def;
	-moz-box-shadow: $shadow-def;
	box-shadow: $shadow-def;
}
</style>
