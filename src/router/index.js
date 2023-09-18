import { createRouter, createWebHashHistory } from "vue-router";
// const Home = () => import("../views/home.vue");
import Home from "../views/Home.vue";
import User from "../views/user/User.vue";
import Index from "../views/index/Index.vue";
import Category from "../views/category/Category.vue";
import Questions from "../views/questions/Questions.vue";
const history = createWebHashHistory();

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    children: [
      {
        path: "/",
        name: "index",
        component: Index,
      },
      {
        path: "/user",
        name: "user",
        component: User,
      },
      {
        path: "/category",
        name: "category",
        component: Category,
      },
      {
        path: "/questions",
        name: "questions",
        component: Questions,
      },
    ],
  },
];
const router = createRouter({
  history,
  routes,
});

export default router;
