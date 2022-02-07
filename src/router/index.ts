/*
 * @Author: GZH
 * @Date: 2022-02-05 18:59:58
 * @LastEditors: GZH
 * @LastEditTime: 2022-02-07 21:52:53
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
      {
        path: '/chooseArea',
        component: () => import('../views/chooseArea/index.vue'),
      },
      {
        path: '/trend',
        component: () => import('../views/trend/index.vue'),
      },
      {
        path: '/notification',
        component: () => import('../views/notification/index.vue'),
      },
      {
        path: '/menu',
        component: () => import('../views/menu/index.vue'),
      },
      {
        path: '/progress',
        component: () => import('../views/progress/index.vue'),
      },
      {
        path: '/chooseTime',
        component: () => import('../views/chooseTime/index.vue'),
      },
      {
        path: '/chooseCity',
        component: () => import('../views/chooseCity/index.vue'),
      },
      {
        path: '/form',
        component: () => import('../views/form/index.vue'),
      },
      {
        path: '/modalForm',
        component: () => import('../views/modalForm/index.vue'),
      },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
