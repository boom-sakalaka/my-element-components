<!--
 * @Author: GZH
 * @Date: 2022-02-06 14:53:19
 * @LastEditors: GZH
 * @LastEditTime: 2022-02-06 15:47:53
 * @FilePath: \my-element-components\src\views\notification\index.vue
 * @Description: 
-->
<template>
  <div>
    <!-- <m-notification :value="50"></m-notification>
    <br />
    <br />
    <m-notification :value="50" :max="30"></m-notification>
    <br />
    <br />
    <m-notification :value="50" isDot></m-notification>
    <br />
    <br />
    <m-notification icon="ChatRound" :value="50"></m-notification>-->
    <m-notification :value="50">
      <template #default>
        <m-list @clickItem="clickItem" @clickAction="clickAction" :list="list" :actions="actions"></m-list>
      </template>
    </m-notification>
  </div>
</template>

<script lang="ts" setup>
import { list, actions } from './data';

let clickItem = (val: any) => {
  console.log(val);
};
let clickAction = (val: any) => {
  console.log(val);
};
</script>

<style lang="scss" scoped></style>
