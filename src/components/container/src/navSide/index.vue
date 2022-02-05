<!--
 * @Author: GZH
 * @Date: 2022-02-05 21:24:35
 * @LastEditors: GZH
 * @LastEditTime: 2022-02-05 21:38:14
 * @FilePath: \my-element-components\src\components\container\src\navSide\index.vue
 * @Description: 
-->
<template>
  <el-menu :collapse="collapse" default-active="2" class="el-menu-vertical-demo">
    <el-menu-item index="1">
      <i class="el-icon-menu"></i>
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span>图标选择器</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-menu"></i>
      <span>趋势标记</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
const props = defineProps<{
  collapse: boolean;
}>();
</script>
<style lang="scss" scoped></style>
