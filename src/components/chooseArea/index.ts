/*
 * @Author: GZH
 * @Date: 2022-02-06 11:39:01
 * @LastEditors: GZH
 * @LastEditTime: 2022-02-06 11:39:02
 * @FilePath: \my-element-components\src\components\chooseArea\index.ts
 * @Description:
 */
import { App } from 'vue';
import chooseArea from './src/index.vue';

// 让这个组件可以通过use的形式使用
export default {
  install(app: App) {
    app.component('m-choose-area', chooseArea);
  },
};
