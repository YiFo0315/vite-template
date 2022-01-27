<template>
  <n-grid x-gap="12" :cols="3">
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
</template>

<script setup lang="ts">
import Searcher from '@/components/nav/Searcher.vue'
import LoginOrRegisterSpace from '@/components/nav/LoginOrRegisterSpace.vue'
</script>

<style lang="scss" scoped>
.input {
  line-height: normal;
  display: flex;
  align-items: center;
}
</style>
