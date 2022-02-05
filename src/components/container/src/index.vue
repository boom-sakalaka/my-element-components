<!--
 * @Author: GZH
 * @Date: 2022-02-05 19:49:08
 * @LastEditors: GZH
 * @LastEditTime: 2022-02-05 21:35:28
 * @FilePath: \my-element-components\src\components\container\src\index.vue
 * @Description: 
-->
<template>
  <el-container>
    <el-aside width="auto">
      <nav-side v-model:collapse="isCollapse" />
    </el-aside>
    <el-container>
      <el-header>
        <nav-header v-model:collapse="isCollapse" />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NavHeader from './navHeader/index.vue';
import NavSide from './navSide/index.vue';

const isCollapse = ref(false);
</script>
<style lang="scss" scoped>
.el-header {
  padding: 0;
  border-bottom: 1px solid #eee;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
