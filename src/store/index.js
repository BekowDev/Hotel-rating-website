import { createStore } from "vuex";
import { searchModule } from "./searchModule";
import { ratesModule } from "./ratesModule";
import { authModule } from "./authModule";
import { hotelModule } from "./hotelModule";

export default createStore({
    state: {
        darkMode: localStorage.getItem("darkMode") || "light",
        language: localStorage.getItem("lang") || "English",
    },
    getters: {},
    mutations: {
        setTheme(state, value) {
            state.darkMode = value;
            localStorage.setItem("darkMode", value);
        },
        setLanguage(state, value) {
            state.language = value;
            localStorage.setItem("lang", value);
        },
    },
    actions: {},
    modules: { searchModule, ratesModule, authModule, hotelModule },
});
