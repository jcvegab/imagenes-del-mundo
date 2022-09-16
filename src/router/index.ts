import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import LoginViewVue from "@/views/LoginView.vue";

import {
  ABOUT,
  ABOUT_PATH,
  HOME,
  HOME_PATH,
  LOGIN,
  LOGIN_PATH,
} from "./constants";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: HOME_PATH,
      name: HOME,
      component: HomeView,
    },
    {
      path: LOGIN_PATH,
      name: LOGIN,
      component: LoginViewVue,
    },
    {
      path: ABOUT_PATH,
      name: ABOUT,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
