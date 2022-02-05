<!--
 * @Author: GZH
 * @Date: 2022-02-05 21:46:16
 * @LastEditors: GZH
 * @LastEditTime: 2022-02-05 21:57:43
 * @FilePath: \my-element-components\src\views\chooseIcon\index.vue
 * @Description: 
-->
<template>
  <div>
    <m-choose-icon title="选择图标" v-model:visible="visible">选择图标</m-choose-icon>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

let visible = ref<boolean>(false);
</script>

<style lang="scss" scoped></style>
