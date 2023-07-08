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
		component: () => import("@/views/Template.vue"),
		children: [
			{
				path: "",
				name: "Home",
				component: () => import("@/views/Home.vue"),
			}, {
				path: "/about",
				name: "About",
				component: () => import("@/views/About.vue"),
			},
		],
	},

];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
