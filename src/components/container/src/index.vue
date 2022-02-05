<!--
 * @Author: GZH
 * @Date: 2022-02-05 19:49:08
 * @LastEditors: GZH
 * @LastEditTime: 2022-02-05 20:21:39
 * @FilePath: \my-element-components\src\components\container\src\index.vue
 * @Description: 
-->
<template>
  <el-container>
    <el-aside width="auto">
      <el-menu :collapse="isCollapse" default-active="2" class="el-menu-vertical-demo">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span>导航一</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span>导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-menu"></i>
          <span>导航三</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <span @click="toggle">
          <el-icon-expand v-if="isCollapse" style="margin-right: 10px"></el-icon-expand>
          <el-icon-fold v-else style="margin-right: 10px"></el-icon-fold>
        </span>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isCollapse = ref(false);
const toggle = () => {
  isCollapse.value = !isCollapse.value;
};
</script>
<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
