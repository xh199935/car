import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import Home from '@/views/home'
import  Layout  from "@/layouts/default/index.vue";
import Dashbord from '@/views/dashbord'

// import { pageEnum } from '@/enums/pageEnum.ts'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: "Root",
    redirect: 'dashbord',
    meta: {
      title: 'Root',
    },
  },
  {
    path: '/dashbord',
    component: Layout,
    children: [
      {
        path: '',
        component: Dashbord
      }
    ]
  },
  {
    path: '/home',
    component: Home
  }
]
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes: routes, // short for `routes: routes`
})
// router.beforeEach((to, form, next) => {
//   const token = window.localStorage.getItem('token')
//   // const token = sessionStorage.getItem('isLogin')
//   if (to.path === '/login') {
//     token ? next('/') : next()
//   } else {
//     token ? next() : next('/login?redirect=' + to.path)
//   }
// })
export default router