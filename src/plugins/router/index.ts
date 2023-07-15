import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/home",
		redirect: { name: "Home" },
	},
	{
		path: "/",
		name: "Page",
		component: () => import("@/Pages/Template.vue"),
		children: [
			{
				path: "",
				name: "Home",
				component: () => import("@/Pages/Home.vue"),
			}, {
				path: "/about",
				name: "About",
				component: () => import("@/Pages/About.vue"),
			},
		],
	},

];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
