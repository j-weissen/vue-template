import { createRouter, createWebHistory } from "vue-router";
import Hello from "../components/Hello.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/hello",
      name: "Hello",
      component: Hello,
    },
  ],
});

export default router;
