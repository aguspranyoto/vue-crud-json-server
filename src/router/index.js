import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import StudentView from "../views/students/View.vue";
import StudentCreate from "../views/students/Create.vue";
import StudentEdit from "../views/students/Edit.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/students",
      name: "students",
      component: StudentView,
    },
    {
      path: "/students/create",
      name: "studentCreate",
      component: StudentCreate,
    },
    {
      path: "/students/:id",
      name: "studentEdit",
      component: StudentEdit,
    },
  ],
});

export default router;
