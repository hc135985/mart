/*
 * @Author: heinan
 * @Date: 2020-09-29 10:12:53
 * @Last Modified by: heinan
 * @Last Modified time: 2020-09-29 10:55:53
 */
import { RouteConfig } from 'vue-router';

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/containers/user/login.vue'),
  },
  {
    path: '/notFound',
    name: 'notFound',
    component: () => import('@/components/status/404.vue'),
  },
  {
    path: '*',
    redirect: '/notFound',
  },
];
export default routes;
