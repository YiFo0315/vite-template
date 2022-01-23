<template>
  <n-space justify="end">
    <n-icon size="25" class="headFactor">
      <Bell />
    </n-icon>
    <n-dropdown trigger="click" :options="headOptions" @select="handleSelect">
      <n-button :keyboard="false" text>
        <span>
          <n-avatar v-if="user.avatar !== null" class="headImg" circle size="medium" :src="user.avatar"></n-avatar>
          <n-avatar v-else class="headImg" circle size="medium">{{ user.username }}</n-avatar>
          {{ user.username }}
        </span>
      </n-button>
    </n-dropdown>
  </n-space>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { BellFilled as Bell } from '@vicons/antd'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useMessage } from 'naive-ui'

const useDropMenuEffect = () => {
  const store = useStore()
  const router = useRouter()
  const message = useMessage()
  const headOptions = [
    {
      label: '个人中心',
      key: 'selfCenter'
    },
    {
      label: '切换主题',
      key: 'shiftTheme'
    },
    {
      label: '退出登录',
      key: 'exit'
    }
  ]
  const handleSelect = (key: string) => {
    switch (key) {
      case 'exit':
        localStorage.clear()
        sessionStorage.clear()
        store.commit('setUser', null)
        store.commit('setIsLogin', false)
        message.info('已退出登录')
        setTimeout(() => {
          router.push({ name: 'Index' })
        }, 1000)
        break
      case 'selfCenter':
        router.push({ name: 'Home' })
        break
    }
  }
  return {
    headOptions,
    handleSelect
  }
}
export default defineComponent({
  name: 'UserStatus',
  components: { Bell },
  props: ['user'],
  setup() {
    const { headOptions, handleSelect } = useDropMenuEffect()
    return {
      headOptions,
      handleSelect
    }
  }
})
</script>

<style scoped>
.headFactor {
  vertical-align: middle;
  margin-bottom: 2px;
}
.headImg {
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>
