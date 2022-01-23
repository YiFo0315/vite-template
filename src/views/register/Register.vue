<template>
  <n-card class="Card">
    <n-steps :current="currentRef" :status="currentStatus">
      <n-step
        title="资料设置"
        description="完善个人资料是别人的第一步！"
      />
      <n-step
        title="完善资料"
        description="完善个人资料让填报更精准！"
      />
      <n-step
        title="完成"
        description="完成注册！"
      />
    </n-steps>
    <RegisterForm />
  </n-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import RegisterForm from '@/views/register/RegisterForm.vue'

const currentRef = ref<number | null>(1)
const next = () => {
  if (currentRef.value === null) currentRef.value = 1
  else if (currentRef.value >= 3) currentRef.value = null
  else currentRef.value++
}
const prev = () => {
  if (currentRef.value === 0) currentRef.value = null
  else if (currentRef.value === null) currentRef.value = 3
  else currentRef.value--
}
</script>

<style lang="scss" scoped>
@import '../../styles/mixins';

.Card{
  @include CenterCard
}
</style>
