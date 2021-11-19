import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Projects from "@/views/Project.vue";
import ProjectDetail from "@/views/ProjectDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/project",
    name: "Project",
    component: Projects,
  },
  {
    path: "/projects/:id",
    name: "ProjectDetail",
    component: ProjectDetail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
