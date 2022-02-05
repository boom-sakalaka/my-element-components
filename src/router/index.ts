/*
 * @Author: GZH
 * @Date: 2022-02-05 18:59:58
 * @LastEditors: GZH
 * @LastEditTime: 2022-02-05 19:09:01
 * @FilePath: \my-element-components\src\router\index.ts
 * @Description:
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
