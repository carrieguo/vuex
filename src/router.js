import Vue from 'vue'
import VueRouter from 'vue-router'
//import login from './pages/login.vue'
//import index from './pages/index.vue'
import store from './store'

Vue.use(VueRouter)

const vueRouter = new VueRouter({
    mode: "history",
    base: "/",
    routes: [
        {
            path: "/login",
            name: "login",
            component: () => import("./pages/login.vue")
        },
        {
            path: "/",
            name: "index",
            component: () => import("./pages/index.vue")
        },
        {
            path: "/userCenter",
            name: "userCenter",
            component: () => import("./pages/userCenter.vue")
        },
        {
            path: "/course/:id",
            name: "course",
            component: () => import("./pages/course.vue")
        }
    ]
});

vueRouter.beforeEach((to, from, next) => {
  if (store.state.userInfo || to.path === "/login") {
      next()
  } else {
      next({
          path: "/login"
      })
  }
})

export default vueRouter;