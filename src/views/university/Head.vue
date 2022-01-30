<template>
  <n-page-header>
    <n-input-group>
      <n-input :style="{ width: '50%' }" placeholder="搜索大学" />
      <n-button type="primary" ghost>搜索</n-button>
    </n-input-group>
    <template #header>
      <n-breadcrumb>
        <n-breadcrumb-item>首页</n-breadcrumb-item>
        <n-breadcrumb-item>查大学</n-breadcrumb-item>
      </n-breadcrumb>
    </template>
    <template #footer>
      <n-space vertical>
        <n-form-item label="所在地区：" label-placement="left">
          <n-checkbox-group v-model:value="cities">
            <n-space item-style="display: flex;">
              <n-checkbox
                v-for="(item, index) in provinceOptions"
                :key="index"
                :value="item"
                :label="item"
              />
            </n-space>
          </n-checkbox-group>
        </n-form-item>
        <n-form-item label="院校类型：" label-placement="left">
          <n-checkbox-group v-model:value="cities">
            <n-space item-style="display: flex;">
              <n-checkbox
                v-for="(item, index) in typeOptions"
                :key="index"
                :value="item"
                :label="item"
              />
            </n-space>
          </n-checkbox-group>
        </n-form-item>
        <n-form-item label="学历层次：" label-placement="left">
          <n-radio-group v-model:value="value">
            <n-space>
              <n-radio value="本科">
                不限
              </n-radio>
              <n-radio value="本科">
                本科
              </n-radio>
              <n-radio value="无">
                专科
              </n-radio>
            </n-space>
          </n-radio-group>
        </n-form-item>
        <n-form-item label="院校层次：" label-placement="left">
          <n-checkbox-group v-model:value="cities">
            <n-space item-style="display: flex;">
              <n-checkbox
                value="不限"
                label="不限"
              />
              <n-checkbox
                value="985"
                label="985"
              />
              <n-checkbox
                value="211"
                label="211"
              />
              <n-checkbox
                value="双一流"
                label="双一流"
              />
            </n-space>
          </n-checkbox-group>
        </n-form-item>
        <n-form-item label="办学性质：" label-placement="left">
          <n-checkbox-group v-model:value="cities">
            <n-space item-style="display: flex;">
              <n-checkbox
                value="不限"
                label="不限"
              />
              <n-checkbox
                value="公立大学"
                label="公立大学"
              />
              <n-checkbox
                value="民办高校"
                label="民办高校"
              />
            </n-space>
          </n-checkbox-group>
        </n-form-item>
        <n-form-item label="研究生点：" label-placement="left">
          <n-radio-group v-model:value="value">
            <n-space>
              <n-radio value="all">
                不限
              </n-radio>
              <n-radio value="有">
                有
              </n-radio>
              <n-radio value="无">
                无
              </n-radio>
            </n-space>
          </n-radio-group>
        </n-form-item>
        <n-form-item label="独立学院：" label-placement="left">
          <n-radio-group v-model:value="value">
            <n-space>
              <n-radio value="all">
                不限
              </n-radio>
              <n-radio value="有">
                有
              </n-radio>
              <n-radio value="无">
                无
              </n-radio>
            </n-space>
          </n-radio-group>
        </n-form-item>
      </n-space>
    </template>
  </n-page-header>
</template>

<script lang="ts" setup>

import { ref } from 'vue'

defineProps<{
  typeOptions: string[],
  provinceOptions: string[]
}>()

const province = []

const provinceKey = ref<string>('不限')

const levelOption = [
  '不限', '985', '211', '双一流', '普通'
]
const level = []
levelOption.forEach((item) => {
  level.push({
    label: item,
    key: item
  })
})
const levelKey = ref<string>('不限')

</script>

<style scoped>

</style>
