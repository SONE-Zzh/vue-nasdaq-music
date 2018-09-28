import Vue from "vue";
import Router from "vue-router";
import Index from "./views/index.vue";
import recommend from "./views/indexCommend.vue";
import radio from "./views/indexRadio.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/index",
      name: "home",
      redirect: "/index/recommend",
      component: Index,
      children: [
        {
          path: "recommend",
          name: "recommend",
          component: recommend
        },
        {
          path: "radio",
          name: "radio",
          component: radio
        }
      ]
    }
  ]
});
