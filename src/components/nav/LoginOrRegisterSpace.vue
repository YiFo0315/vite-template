<template>
  <n-space justify="end">
    <router-link :to="{ name:'index' }">
      <n-button type="primary" ghost round>登录</n-button>
    </router-link>
    <router-link :to="{ name:'register' }">
      <n-button type="success" round>注册</n-button>
    </router-link>
  </n-space>
</template>

<script>
export default {
  name: 'LoginOrRegisterSpace'
}
</script>

<style scoped>

.router-link-active {
  text-decoration: none;
}
</style>
