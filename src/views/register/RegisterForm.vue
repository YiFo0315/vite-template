<template>
  <n-form
    ref="formRef"
    :model="formValue"
    :rules="rules"
    label-placement="left"
    label-width="auto"
    require-mark-placement="right-hanging"
    :style="{
      maxWidth: '640px'
    }"
  >
    <n-card title="基本信息" :bordered="false">
      <n-form-item label="昵称" path="username">
        <n-input v-model:value="formValue.username" placeholder="" />
      </n-form-item>

      <n-form-item label="头像" path="avatar">
        <n-upload
          action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
          :headers="{
            'naive-info': 'hello!'
          }"
          :data="{
            'naive-data': 'cool! naive!'
          }"
        >
          <n-button>上传文件</n-button>
        </n-upload>
      </n-form-item>

      <n-form-item label="性别" path="sex">
        <n-radio-group v-model:value="formValue.sex" name="sex">
          <n-space>
            <n-radio value="男">男</n-radio>
            <n-radio value="女">女</n-radio>
          </n-space>
        </n-radio-group>
      </n-form-item>

      <n-form-item label="真实姓名" path="name">
        <n-input v-model:value="formValue.name" placeholder="" />
      </n-form-item>

      <n-form-item label="手机号" path="phone">
        <n-input v-model:value="formValue.phone" placeholder="" />
      </n-form-item>

      <n-grid :cols="24" :x-gap="24">
        <n-form-item-gi :span="8" label="毕业高中" path="senior">
          <n-input v-model:value="formValue.senior" placeholder="" />
        </n-form-item-gi>
        <n-form-item-gi :span="8" label="毕业年份" path="graduationYear">
          <n-input v-model:value="formValue.graduationYear" placeholder="" />
        </n-form-item-gi>
        <n-form-item-gi :span="8" label="班级" path="class">
          <n-input v-model:value="formValue.class" placeholder="" />
        </n-form-item-gi>
      </n-grid>

      <n-form-item label="民族" path="nation">
        <n-radio-group v-model:value="formValue.nation" name="sex">
          <n-space>
            <n-radio value="0">无资格报考</n-radio>
            <n-radio value="1">有资格，不考虑报考</n-radio>
            <n-radio value="2">有资格，考虑报考</n-radio>
          </n-space>
        </n-radio-group>
      </n-form-item>
    </n-card>
    <n-card title="联系信息" :bordered="false">
      <n-form-item label="邮箱" path="email">
        <n-input v-model:value="formValue.email" placeholder="" />
      </n-form-item>

      <n-form-item label="QQ号码" path="qq">
        <n-input v-model:value="formValue.qq" placeholder="" />
      </n-form-item>

      <n-form-item label="微信号码" path="wechat">
        <n-input v-model:value="formValue.wechat" placeholder="" />
      </n-form-item>
    </n-card>
    <div style="display: flex; justify-content: flex-end;">
      <n-button
        round
        type="primary"
        @click="handleValidateButtonClick"
      >
        验证
      </n-button>
    </div>
  </n-form>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue'
import { useMessage } from 'naive-ui'

export interface RegisterProps1{
  email: string,
  username: string,
  name: string,
  sex: string,
  phone: number | null,
  senior: string,
  graduationYear: number | null,
  nation: string,
  qq: number | null,
  wechat: string,
  avator: string,
  class: string
}

const formRef = ref<HTMLFormElement|null>(null)
const message = useMessage()
const formValue = ref<RegisterProps1>({
  email: '',
  username: '',
  name: '',
  sex: '',
  phone: null,
  senior: '',
  graduationYear: null,
  nation: '',
  qq: null,
  wechat: '',
  avator: '',
  class: ''
})
const rules = {
  email: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入电子邮箱'
  },
  username: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入昵称'
  },
  sex: {
    required: true,
    message: '请选择性别'
  },
  phone: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入手机号进行验证！'
  },
  senior: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入毕业高中'
  },
  graduationYear: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请毕业年份'
  },
  class: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入班级'
  },
  nation: {
    required: true,
    message: '请选择民族情况'
  },
  avator: ''
}
const emit = defineEmits(['next'])
const handleValidateButtonClick = (e:any) => {
  e.preventDefault()
  emit('next')
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

</style>
