import { createRouter, createWebHistory } from "vue-router";
import MainToday from "@/components/MainToday.vue";
import FiveDays from "@/components/FiveDays.vue";
import AboutUs from "@/components/AboutUs.vue";

const routes = [
    {
        path: '/',
        name: 'MainToday',
        component: MainToday
    },
     {
        path: '/week',
        name: 'Week',
        component: FiveDays
    },
      {
        path: '/about',
        name: 'AboutUs',
        component: AboutUs
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router