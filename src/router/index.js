import { createRouter, createWebHistory } from "vue-router";
import Tips from "@/pages/Tips.vue";
import Profile from "@/pages/Profile.vue";
import Rates from "@/pages/Rates.vue";
import Settings from "@/pages/Settings.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: Tips,
        },
        {
            path: "/Profile",
            component: Profile,
        },
        {
            path: "/Rates",
            component: Rates,
        },
        {
            path: "/Settings",
            component: Settings,
        },
    ],
});

export default router;
