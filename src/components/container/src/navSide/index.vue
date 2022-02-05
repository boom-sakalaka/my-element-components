<!--
 * @Author: GZH
 * @Date: 2022-02-05 21:24:35
 * @LastEditors: GZH
 * @LastEditTime: 2022-02-05 21:29:20
 * @FilePath: \my-element-components\src\components\container\src\navSide\index.vue
 * @Description: 
-->
<template>
  <el-menu :collapse="collapse" default-active="2" class="el-menu-vertical-demo">
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
</template>

<script setup lang="ts">
const props = defineProps<{
  collapse: boolean;
}>();
</script>
<style lang="scss" scoped></style>
