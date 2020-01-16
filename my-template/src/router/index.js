import Vue from "vue";
import VueRouter from "vue-router";

import Login from "@/views/Login.vue";
import Main from "@/views/Main.vue";

import error from "./error";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Main,
    redirect: "/about",
    children: [
      {
        path: "/about",
        name: "about",
        component: function() {
          return import(/* webpackChunkName: "about" */ "../views/About.vue");
        }
      }
    ]
  },
  {
    path: "/login",
    component: Login
  },
  ...error
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
