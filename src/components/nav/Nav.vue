<template>
  <n-grid x-gap="12" :cols="7">
    <n-gi>
      <n-text class="brand">好志灯</n-text>
    </n-gi>
    <n-gi span="3">
      <NavMenu></NavMenu>
    </n-gi>
    <n-gi class="input" span="2">
      <Searcher />
    </n-gi>
    <n-gi>
      <UserStatus v-if="isLogin" :user="user"/>
      <LoginOrRegisterSpace v-else></LoginOrRegisterSpace>
    </n-gi>
  </n-grid>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import UserStatus from '@/components/nav/UserStatus.vue'
import NavMenu from '@/components/nav/NavMenu.vue'
import LoginOrRegisterSpace from '@/components/nav/LoginOrRegisterSpace.vue'
import Searcher from '@/components/nav/Searcher.vue'

const store = useStore()
const user = store.state
const isLogin = computed(() => store.state.token)
</script>

<style>
.input {
  line-height: normal;
  display: flex;
  align-items: center;
}
.brand {
  font-size: 24px;
}
</style>
