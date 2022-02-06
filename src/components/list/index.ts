/*
 * @Author: GZH
 * @Date: 2022-02-06 15:20:27
 * @LastEditors: GZH
 * @LastEditTime: 2022-02-06 15:20:27
 * @FilePath: \my-element-components\src\components\list\index.ts
 * @Description:
 */
import { App } from 'vue';
import list from './src/index.vue';

// 让这个组件可以通过use的形式使用
export default {
  install(app: App) {
    app.component('m-list', list);
  },
};
