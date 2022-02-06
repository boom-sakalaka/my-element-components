<!--
 * @Author: GZH
 * @Date: 2022-02-06 11:39:40
 * @LastEditors: GZH
 * @LastEditTime: 2022-02-06 12:01:51
 * @FilePath: \my-element-components\src\views\chooseArea\index.vue
 * @Description: 
-->
<template>
  <m-choose-area @change="changeArea"></m-choose-area>
</template>

<script lang="ts" setup>
let changeArea = (val: any) => {
  console.log(val);
};
</script>

<style lang="scss" scoped></style>
