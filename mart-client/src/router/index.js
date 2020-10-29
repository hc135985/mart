/*
 * @Author: heinan 
 * @Date: 2020-10-29 09:10:15 
 * @Last Modified by:   heinan 
 * @Last Modified time: 2020-10-29 09:10:15 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && to.path !== '/register' && to.path !== '/forgetpwd') {
    if (localStorage.getItem('vtoken')) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})
export default router
