/*
 * @Author: GZH
 * @Date: 2022-02-05 18:37:47
 * @LastEditors: GZH
 * @LastEditTime: 2022-02-05 18:46:34
 * @FilePath: \my-element-components\vite.config.ts
 * @Description:
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080,
  },
});
