import { createRouter, createWebHistory } from "vue-router";
import TheSignIn from '@/views/TheSignIn'
import TheSignUp from '@/views/TheSignUp'



const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  {
    path:'/signIn',
    name:'signIn',
    component: () => import(/* webpackChunkName: "signin" */ "@/views/TheSignIn.vue"),
  },
  {
    path:'/signUp',
    name:'signUp',
    component: () => import(/* webpackChunkName: "signup" */ "@/views/TheSignUp.vue"),
  }
  // {
  //   path: "/about",
  //   name: "about",
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
