import { defineStore } from "pinia";

export const myKnow = defineStore("knowStore", {
	state: () => ({
		knowledges: [
			{
				name: "VueJS",
				nv: { study: 3, pro: 0 },
				projects: [],
				icon: ""
			}
		]

	}),
	actions: {
	},
	getters: {
		getIcon: (state) => (n: any) => {
			return `../../public/img/icons/Stacks/${state.knowledges[n].name}.svg`

		}
	},
});
