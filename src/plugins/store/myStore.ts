import { defineStore } from "pinia";

export const myStore = defineStore("store", {
	state: () => ({
		counter: 0,
	}),
	actions: {
		inc(p = 1) {
			this.counter += p;
		},
	},
	getters: {
		getCount() :Number{
			console.log(this.counter);
			return this.counter;
		},
	},
});
