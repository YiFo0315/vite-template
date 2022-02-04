<template>
  <n-grid x-gap="12" :cols="3" class="head-grid">
    <n-gi>
      <n-card :bordered="false">
        <n-text style="font-size: 28px; color: #101010;">
          好志灯
        </n-text>
        <br />
        <n-text style="font-size: 20px; color: #A6A4A4;">
          高考志愿填报专家
        </n-text>
      </n-card>
    </n-gi>
    <n-gi class="input">
      <Searcher />
    </n-gi>
    <n-gi>
      <LoginOrRegisterSpace />
    </n-gi>
  </n-grid>
  <n-tabs type="line" style="padding-left: .2rem;" :on-update:value="handleUpdate">
    <n-tab name="index" class="table-card">首页</n-tab>
    <n-tab name="university" class="table-card">科学选科</n-tab>
    <n-tab name="university" class="table-card">志愿填报</n-tab>
    <n-tab name="university" class="table-card">个人评测</n-tab>
    <n-tab name="university" class="table-card">查大学</n-tab>
    <n-tab name="major" class="table-card">查专业</n-tab>
  </n-tabs>
</template>

<script setup lang="ts">
import Searcher from '@/components/nav/Searcher.vue'
import LoginOrRegisterSpace from '@/components/nav/LoginOrRegisterSpace.vue'
import router from '@/router'

const handleUpdate = (value: string) => {
  router.push({ name: value })
}
</script>

<style lang="scss" scoped>
.input {
  line-height: normal;
  display: flex;
  align-items: center;
}
:deep(.head-grid){
  min-width: 1600px;
}
</style>
