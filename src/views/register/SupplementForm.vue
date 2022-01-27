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
    <n-card title="选课信息" :bordered="false">
      <n-form-item label="高中选课" path="class">
        <n-checkbox-group v-model:value="formValue.class">
          <n-space>
            <n-checkbox value="物理">物理</n-checkbox>
            <n-checkbox value="生物">生物</n-checkbox>
            <n-checkbox value="地理">地理</n-checkbox>
            <n-checkbox value="化学">化学</n-checkbox>
            <n-checkbox value="历史">历史</n-checkbox>
            <n-checkbox value="政治">政治</n-checkbox>
          </n-space>
        </n-checkbox-group>
      </n-form-item>
    </n-card>
    <n-card title="身体指标" :bordered="false">
      <n-grid x-gap="12" :cols="2">
        <n-gi>
          <n-form-item label="身高" path="height">
            <n-input v-model:value="formValue.height" placeholder="" />
          </n-form-item>
        </n-gi>
        <n-gi>
          <n-form-item label="体重" path="weight">
            <n-input v-model:value="formValue.weight" placeholder="" />
          </n-form-item>
        </n-gi>
      </n-grid>
      <n-grid x-gap="12" :cols="4">
        <n-gi>
          <n-form-item label="左眼视力" path="leftEye">
            <n-input v-model:value="formValue.leftEye" placeholder="" />
          </n-form-item>
        </n-gi>
        <n-gi>
          <n-form-item label="右眼视力" path="rightEye">
            <n-input v-model:value="formValue.rightEye" placeholder="" />
          </n-form-item>
        </n-gi>
        <n-gi>
          <n-checkbox v-model:value="formValue.blindness">有色盲</n-checkbox>
        </n-gi>
        <n-gi>
          <n-checkbox v-model:value="formValue.weakness">有色弱</n-checkbox>
        </n-gi>
      </n-grid>
      <n-form-item label="其他疾病">
        <n-grid x-gap="12" :cols="3">
          <n-gi>
            <n-checkbox v-model:value="formValue.disability">残疾</n-checkbox>
          </n-gi>
          <n-gi>
            <n-checkbox v-model:value="formValue.generic">遗传病</n-checkbox>
          </n-gi>
          <n-gi>
            <n-input v-model:value="formValue.others" placeholder="其他疾病" />
          </n-gi>
        </n-grid>
      </n-form-item>
    </n-card>
    <n-card title="高考成绩" :bordered="false">
      <template #header-extra> 总分：570 </template>
      <n-grid x-gap="12" :cols="3">
        <n-gi>
          <n-form-item label="语文" path="chinese">
            <n-input v-model:value="formValue.chinese" placeholder="" />
          </n-form-item>
        </n-gi>
        <n-gi>
          <n-form-item label="数学" path="mathematics">
            <n-input v-model:value="formValue.mathematics" placeholder="" />
          </n-form-item>
        </n-gi>
        <n-gi>
          <n-form-item label="英语" path="english">
            <n-input v-model:value="formValue.english" placeholder="" />
          </n-form-item>
        </n-gi>
      </n-grid>
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

<script lang="ts" setup>
import { ref } from 'vue'
import { useMessage } from 'naive-ui'

export interface RegisterProps2 {
  class: string[],
  height: number|null,
  weight: number|null,
  leftEye: number|null,
  rightEye: number|null,
  blindness: boolean,
  weakness: boolean,
  disability: boolean,
  others: string,
  generic: boolean,
  chinese: number|null,
  mathematics: number|null,
  english: number|null,
  physics: number|null,
  chemistry: number|null,
  biology: number|null
}

const formRef = ref<HTMLFormElement|null>(null)
const message = useMessage()
const formValue:RegisterProps2 = {
  class: [],
  height: null,
  weight: null,
  leftEye: null,
  rightEye: null,
  blindness: false,
  weakness: false,
  disability: false,
  others: '',
  generic: false,
  chinese: null,
  mathematics: null,
  english: null,
  physics: null,
  chemistry: null,
  biology: null
}
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
  year: {
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
