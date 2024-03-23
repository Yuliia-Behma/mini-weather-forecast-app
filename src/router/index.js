import { createRouter, createWebHistory } from "vue-router";
import MainToday from "@/components/MainToday.vue";
import Week from "@/components/Week.vue";
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
        component: Week
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