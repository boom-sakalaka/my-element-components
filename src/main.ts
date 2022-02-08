/*
 * @Author: GZH
 * @Date: 2022-02-05 18:37:47
 * @LastEditors: GZH
 * @LastEditTime: 2022-02-08 21:25:20
 * @FilePath: \my-element-components\src\main.ts
 * @Description:
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as Icons from '@element-plus/icons';
import { toLine } from './utils';
import mUI from './components';
import './mock';

const app = createApp(App);

// 全局注册图标 牺牲一点性能
// el-icon-xxx
for (let i in Icons) {
  // 注册全部组件
  app.component(`el-icon-${toLine(i)}`, (Icons as any)[i]);
}

app.use(router);
app.use(ElementPlus).use(mUI);
app.mount('#app');
