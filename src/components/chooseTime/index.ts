/*
 * @Author: GZH
 * @Date: 2022-02-07 15:19:03
 * @LastEditors: GZH
 * @LastEditTime: 2022-02-07 15:19:04
 * @FilePath: \my-element-components\src\components\chooseTime\index.ts
 * @Description:
 */
import { App } from 'vue';
import chooseTime from './src/index.vue';

// 让这个组件可以通过use的形式使用
export default {
  install(app: App) {
    app.component('m-choose-time', chooseTime);
  },
};
