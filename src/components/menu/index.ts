/*
 * @Author: GZH
 * @Date: 2022-02-06 16:51:06
 * @LastEditors: GZH
 * @LastEditTime: 2022-02-06 17:18:45
 * @FilePath: \my-element-components\src\components\menu\index.ts
 * @Description:
 */
import { App } from 'vue';
import menu from './src/index.vue';
import infiniteMenu from './src/menu';

// 让这个组件可以通过use的形式使用
export default {
  install(app: App) {
    app.component('m-menu', menu);
    app.component('m-infinite-menu', infiniteMenu);
  },
};
