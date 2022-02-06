/*
 * @Author: GZH
 * @Date: 2022-02-05 18:37:47
 * @LastEditors: GZH
 * @LastEditTime: 2022-02-06 17:20:12
 * @FilePath: \my-element-components\vite.config.ts
 * @Description:
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  server: {
    port: 8080,
  },
});
