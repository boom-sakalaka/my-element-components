<!--
 * @Author: GZH
 * @Date: 2022-02-05 21:24:30
 * @LastEditors: GZH
 * @LastEditTime: 2022-02-05 21:35:01
 * @FilePath: \my-element-components\src\components\container\src\navHeader\index.vue
 * @Description: 
-->
<template>
  <div class="header">
    <span @click="toggle">
      <el-icon-expand v-if="collapse" style="margin-right: 10px"></el-icon-expand>
      <el-icon-fold v-else style="margin-right: 10px"></el-icon-fold>
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  collapse: boolean;
}>();

const emits = defineEmits(['update:collapse']);
const toggle = () => {
  emits('update:collapse', !props.collapse);
};
</script>
<style lang="scss" scoped>
.header {
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
</style>
