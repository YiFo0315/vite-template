<template>
  <n-space justify="end">
    <n-button
      type="primary"
      ghost
      round
      @click="isShow = !isShow"
    >
      登录
    </n-button>
    <router-link :to="{ name:'register' }">
      <n-button type="success" round>注册</n-button>
    </router-link>
  </n-space>
  <n-modal
    v-model:show="isShow"
    class="Card"
    preset="card"
    style="width: 4rem;"
    title="登录"
    :bordered="false"
  >
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
      <div style="display: flex; justify-content: flex-end">
        <n-button
          round
          type="primary"
          @click="handleValidateButtonClick"
        >
          登录
        </n-button>
      </div>
    </n-form>
  </n-modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useMessage } from 'naive-ui'

const isShow = ref<boolean>(false)

interface loginProps {
  username:string,
  password: string
}

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

<style lang="scss" scoped>
.router-link-active {
  text-decoration: none;
}
</style>
