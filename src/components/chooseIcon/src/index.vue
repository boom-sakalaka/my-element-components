<!--
 * @Author: GZH
 * @Date: 2022-02-05 21:41:15
 * @LastEditors: GZH
 * @LastEditTime: 2022-02-05 22:23:36
 * @FilePath: \my-element-components\src\components\chooseIcon\src\index.vue
 * @Description: 
-->
<template>
  <el-button @click="handleClick" type="primary">
    <slot></slot>
  </el-button>
  {{ visible }}
  <el-dialog :title="title" v-model="dialogVisible">111</el-dialog>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue';
const props = defineProps<{
  // 弹出框的标题
  title: string;
  // 控制弹出框的显示与隐藏
  visible: boolean;
}>();
let emits = defineEmits(['update:visible']);

// 拷贝一份父组件传递过来的visible
let dialogVisible = ref<boolean>(props.visible);

const handleClick = () => {
  console.warn(1);

  emits('update:visible', !props.visible);
};

// 监听visible的变化 只能监听第一次的变化
watch(
  () => props.visible,
  val => {
    dialogVisible.value = val;
  }
);
// 监听组件内部的dialogVisible变化
watch(
  () => dialogVisible.value,
  val => {
    emits('update:visible', val);
  }
);
</script>
<style lang="scss" scoped></style>
