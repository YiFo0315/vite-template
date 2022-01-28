<template>
  <div class="poster">
    <n-grid x-gap="12" :cols="2">
      <n-gi></n-gi>
      <n-gi class="center">
        <n-card v-if="route.name === 'login'" title="登录" class="Card">
          <n-form
            ref="formRef"
            label-width="auto"
            :model="formValue"
            :rules="rules"
          >
            <n-form-item label="账号" path="username">
              <n-input v-model:value="username" placeholder="" />
            </n-form-item>
            <n-form-item label="密码" path="password">
              <n-input v-model:value="password" placeholder="" />
            </n-form-item>
            <div style="display: flex; justify-content: flex-end;">
              <n-button
                round
                type="primary"
                @click="handleValidateButtonClick"
              >
                登录
              </n-button>
            </div>
          </n-form>
        </n-card >
      </n-gi>
    </n-grid>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useMessage } from 'naive-ui'
import { useRoute } from 'vue-router'

interface loginProps {
  username:string,
  password: string
}
const route = useRoute()

const username = ref<string>('')
const password = ref<string>('')

const formRef = ref<HTMLFormElement|null>(null)
const message = useMessage()
const formValue = ref<loginProps>({
  username: '',
  password: ''
})
const rules = {
  username: {
    type: 'number',
    required: true,
    trigger: ['blur', 'change'],
    message: '请输入账号'
  },
  password: {
    type: 'number',
    required: true,
    trigger: ['blur', 'change'],
    message: '请输入密码'
  }
}

const handleValidateButtonClick = (e:any) => {
  e.preventDefault()
  if (formRef.value === null) return
  formRef.value.validate((errors:string) => {
    if (!errors) {
      message.success('验证成功')
    } else {
      console.log(errors)
      message.error('验证失败')
    }
  })
}
</script>

<style scoped>
.poster {
  position: absolute;
  left: 0;
  right: 0;
  height: 4rem;
  background: url("../../assets/img/Banner/hero-bg.png") no-repeat;
  background-size: cover;
}
.center {
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items:center;
  background: url('/src/assets/img/Banner/hero-img.png') no-repeat;
  height: 4rem;
}
.Card {
  width: 3rem;
}
</style>
