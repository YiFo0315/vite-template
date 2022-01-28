<template>
  <n-page-header>
    <n-input-group>
      <n-input :style="{ width: '50%' }"  placeholder="搜索大学"/>
      <n-button type="primary" ghost>搜索</n-button>
    </n-input-group>
    <template #header>
      <n-breadcrumb>
        <n-breadcrumb-item>首页</n-breadcrumb-item>
        <n-breadcrumb-item>查大学</n-breadcrumb-item>
      </n-breadcrumb>
    </template>
    <template #footer>
      <n-text>地区：</n-text>
      <n-menu v-model:value="provinceKey" mode="horizontal" :options="province" /><br/>
      <n-text>学校层次：</n-text>
      <n-menu v-model:value="levelKey" mode="horizontal" :options="level" />
    </template>
  </n-page-header>
</template>

<script lang="ts" setup>

import { ref } from 'vue'

const provinceOption = [
  '不限',
  '山东',
  '江苏'
]
const province = []
provinceOption.forEach((item) => {
  province.push({
    label: item,
    key: item
  })
})
const provinceKey = ref<string>('不限')

const levelOption = [
  '不限', '985', '211', '双一流', '普通'
]
const level = []
levelOption.forEach((item) => {
  level.push({
    label: item,
    key: item
  })
})
const levelKey = ref<string>('不限')

</script>

<style scoped>

</style>
