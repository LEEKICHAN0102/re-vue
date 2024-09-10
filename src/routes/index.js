import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/pages/Home.vue";

export default createRouter({
  history: createWebHashHistory(),
  
  // pages
  routes: [
    {
      path: "/",
      name: Home,
      component: Home,
    }
  ]
})