/*
 * @Author: GZH
 * @Date: 2022-02-05 18:59:58
 * @LastEditors: GZH
 * @LastEditTime: 2022-02-05 19:52:11
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
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
