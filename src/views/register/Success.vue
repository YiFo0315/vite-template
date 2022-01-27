<template>
  <n-result status="success" title="注册成功" description="2秒后自动跳转回首页">
    <template #footer>
      <n-button @click="handleClick">手动跳转</n-button>
    </template>
  </n-result>
</template>

<script lang="ts" setup>
import router from '@/router'

const handleClick = (e:PointerEvent) => {
  e.preventDefault()
  router.push({ name: 'index' })
}
</script>

<style scoped>

</style>
