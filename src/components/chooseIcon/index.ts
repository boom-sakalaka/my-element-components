/*
 * @Author: GZH
 * @Date: 2022-02-05 21:41:55
 * @LastEditors: GZH
 * @LastEditTime: 2022-02-05 21:48:04
 * @FilePath: \my-element-components\src\components\chooseIcon\index.ts
 * @Description:
 */
import { App } from 'vue';
import chooseIcon from './src/index.vue';

// 让这个组件可以通过use的形式使用
export default {
  install(app: App) {
    app.component('m-choose-icon', chooseIcon);
  },
};
