<!--
 * @Author: GZH
 * @Date: 2022-02-06 14:53:19
 * @LastEditors: GZH
 * @LastEditTime: 2022-02-06 15:07:43
 * @FilePath: \my-element-components\src\views\notification\index.vue
 * @Description: 
-->
<template>
  <m-notification :value="50" />
  <br />
  <br />
  <m-notification :value="50" max="30" />
  <br />
  <br />
  <m-notification :value="50" :isDot="true" />
  <br />
  <br />
  <m-notification icon="ChatRound" :value="50" />
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped></style>
