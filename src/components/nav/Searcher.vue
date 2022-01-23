<template>
  <n-button text style="padding-right: 30px;">
    <n-icon size="24">
      <Gift />
    </n-icon>
    下载APP
  </n-button>
  <n-input-group>
    <n-select v-model:value="type" :options="options" style="width: 72px;" />
    <n-input :style="{ width: '50%' }" placeholder=""/>
    <n-button type="primary">搜索</n-button>
  </n-input-group>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import { GiftFilled as Gift } from '@vicons/antd'

const type = ref<string>('university')
const options = [
  {
    label: '大学',
    value: 'university'
  },
  {
    label: '专业',
    value: 'song0'
  }
]
</script>

<style scoped>

</style>
