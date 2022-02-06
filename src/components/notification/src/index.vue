<!--
 * @Author: GZH
 * @Date: 2022-02-06 14:52:44
 * @LastEditors: GZH
 * @LastEditTime: 2022-02-06 15:17:56
 * @FilePath: \my-element-components\src\components\notification\src\index.vue
 * @Description: 
-->
<template>
  <el-popover placement="bottom" :width="300" trigger="click">
    <template #default>
      <slot></slot>
    </template>
    <template #reference>
      <el-badge :value="value" :max="max" :is-dot="isDot">
        <component :is="`el-icon-${toLine(icon)}`" />
      </el-badge>
    </template>
  </el-popover>
</template>

<script setup lang="ts">
import { toLine } from '../../../utils';

const props = defineProps({
  // 显示的图标
  icon: {
    type: String,
    default: 'Bell',
  },
  //  通知数量
  value: {
    type: [String, Number],
    default: '',
  },
  // 最大值
  max: {
    type: Number,
  },
  // 是否显示小圆点
  isDot: {
    type: Boolean,
    default: false,
  },
});
</script>
<style lang="scss" scoped>
svg {
  width: 1.5em;
  height: 1.5em;
}
</style>
