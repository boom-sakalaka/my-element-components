/*
 * @Author: GZH
 * @Date: 2022-02-05 18:59:58
 * @LastEditors: GZH
 * @LastEditTime: 2022-02-05 21:46:19
 * @FilePath: \my-element-components\src\router\index.ts
 * @Description:
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Container from '../components/container/src/index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Container,
    children: [
      {
        path: '/',
        component: Home,
      },
      {
        path: '/chooseIcon',
        component: () => import('../views/chooseIcon/index.vue'),
      },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
