import { defineStore } from "pinia";

export const myPrefs = defineStore("prefs", {
    state: () => ({
        theme: "dark" as string
    }),
    actions: {
        set_Theme() {
            this.theme = this.get_Theme() == "dark" ? "light" : "dark"
        }
    },
    getters: {
        get_Theme: (state) => () => {
            return state.theme as string
        }
    },
});
