<!--
 * @Author: GZH
 * @Date: 2022-02-06 14:52:44
 * @LastEditors: GZH
 * @LastEditTime: 2022-02-06 15:05:41
 * @FilePath: \my-element-components\src\components\notification\src\index.vue
 * @Description: 
-->
<template>
  <el-badge :value="value" :max="max" :is-dot="isDot">
    <component :is="`el-icon-${toLine(icon)}`" />
  </el-badge>
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
