/*
 * @Author: GZH
 * @Date: 2022-02-06 14:52:49
 * @LastEditors: GZH
 * @LastEditTime: 2022-02-06 14:52:50
 * @FilePath: \my-element-components\src\components\notification\index.ts
 * @Description:
 */
import { App } from 'vue';
import notification from './src/index.vue';

// 让这个组件可以通过use的形式使用
export default {
  install(app: App) {
    app.component('m-notification', notification);
  },
};
