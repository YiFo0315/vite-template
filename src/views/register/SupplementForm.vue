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
      <n-form-item label="高中选课" path="course">
        <n-checkbox-group v-model:value="formValue.course" :max="3">
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
            <n-input-number v-model:value="formValue.height" placeholder="">
              <template #suffix>cm</template>
            </n-input-number>
          </n-form-item>
        </n-gi>
        <n-gi>
          <n-form-item label="体重" path="weight">
            <n-input-number v-model:value="formValue.weight" placeholder="" >
              <template #suffix>kg</template>
            </n-input-number>
          </n-form-item>
        </n-gi>
      </n-grid>
      <n-grid x-gap="12" :cols="4">
        <n-gi>
          <n-form-item label="左眼视力" path="leftEye">
            <n-input-number :show-button="false" v-model:value="formValue.leftEye" placeholder="" />
          </n-form-item>
        </n-gi>
        <n-gi>
          <n-form-item label="右眼视力" path="rightEye">
            <n-input-number :show-button="false" v-model:value="formValue.rightEye" placeholder="" />
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
            <n-input-number :show-button="false" v-model:value="formValue.chinese" placeholder="">
              <template #suffix>分</template>
            </n-input-number>
          </n-form-item>
        </n-gi>
        <n-gi>
          <n-form-item label="数学" path="mathematics">
            <n-input-number v-model:value="formValue.mathematics" :show-button="false" placeholder="">
              <template #suffix>分</template>
            </n-input-number>
          </n-form-item>
        </n-gi>
        <n-gi>
          <n-form-item label="英语" path="english">
            <n-input-number v-model:value="formValue.english" :show-button="false" placeholder="">
              <template #suffix>分</template>
            </n-input-number>
          </n-form-item>
        </n-gi>
        <n-gi v-for="(item, index) in formValue.course" :key="index">
          <n-form-item :label="item" path="english">
            <n-input-number v-model:value="formValue[courseMap[item]]" :show-button="false" placeholder="">
              <template #suffix>分</template>
            </n-input-number>
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
  course: string[],
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
  biology: number|null,
  history: number|null,
  politics: number|null,
  geography: number|null
}

const courseMap = {
  物理: 'physics',
  化学: 'chemistry',
  生物: 'biology',
  历史: 'history',
  政治: 'politics',
  地理: 'geography'
}
const formRef = ref<HTMLFormElement|null>(null)
const message = useMessage()
const formValue = ref<RegisterProps2>({
  course: [],
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
  biology: null,
  history: null,
  politics: null,
  geography: null
})
const rules = {
  senior: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入毕业高中'
  },
  course: {
    required: true,
    trigger: ['blur', 'input'],
    validator(rule:string, value: string[]) {
      if (value.length !== 3) {
        return new Error('请选三门课程！')
      }
      return true
    }
  },
  nation: {
    required: true,
    message: '请选择民族情况'
  }
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
