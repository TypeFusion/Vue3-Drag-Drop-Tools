import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dnd",
      component: () => import("../views/dndDemo.vue"),
    },
    {
      path: "/dnd2",
      name: "dnd2",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/dndDemo2.vue"),
    },
    {
      path: "/draggable",
      name: "draggable",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Draggable/NestedDraggableExample.vue"),
    },
  ],
});

export default router;
