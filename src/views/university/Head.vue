<template>
  <n-page-header>
    <template #title>
      <n-input-group>
        <n-input placeholder="搜索大学" />
        <n-button type="primary" ghost>搜索</n-button>
      </n-input-group>
    </template>

    <template #header>
      <n-breadcrumb>
        <n-breadcrumb-item>首页</n-breadcrumb-item>
        <n-breadcrumb-item>查大学</n-breadcrumb-item>
      </n-breadcrumb>
    </template>
    <template #footer>
      <n-space vertical>
        <n-form-item label="所在地区：" label-placement="left">
          <UnlimitedCheckBoxGroup v-model:value="selectedValue.province" :options="provinceOptions" />
        </n-form-item>
        <n-form-item label="院校类型：" label-placement="left">
          <UnlimitedCheckBoxGroup v-model:value="selectedValue.category" :options="categoryOptions" />
        </n-form-item>
        <n-collapse-transition :show="AllShow">
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
            <n-checkbox-group v-model:value="CcOptions" @update:value="handleCcUpdateValue">
              <n-space item-style="display: flex;">
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
            <n-radio-group v-model:value="selectedValue.type">
              <n-space item-style="display: flex;">
                <n-radio
                  :value="null"
                >
                  不限
                </n-radio>
                <n-radio
                  value="公立大学"
                >
                  公立大学
                </n-radio>
                <n-radio
                  value="民办高校"
                >
                  民办高校
                </n-radio>
              </n-space>
            </n-radio-group>
          </n-form-item>
          <n-form-item label="研究生点：" label-placement="left">
            <n-radio-group v-model:value="value">
              <n-space>
                <n-radio :value="null">
                  不限
                </n-radio>
                <n-radio :value="true">
                  有
                </n-radio>
                <n-radio :value="false">
                  无
                </n-radio>
              </n-space>
            </n-radio-group>
          </n-form-item>
          <n-form-item label="独立学院：" label-placement="left">
            <n-radio-group v-model:value="selectedValue.hasGraduateschool">
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
        </n-collapse-transition>
        <n-button
          text
          type="primary"
          @click="AllShow = !AllShow"
        >
          {{ AllShow? '▲折叠筛选条件':'▼展开筛选条件' }}
        </n-button>
      </n-space>
      <pre>
        {{ JSON.stringify(selectedValue, 0, 2) }}
      </pre>
    </template>
  </n-page-header>
</template>

<script lang="ts" setup>

import { reactive, ref } from 'vue'
import UnlimitedCheckBoxGroup from '@/components/UnlimitedCheckBoxGroup.vue'

export interface filterSelectedProps{
  province: string[] | null,
  category: string[] | null,
  type: string | null,
  isSmall211: boolean | null,
  isSmall985: boolean | null,
  isDoublefirstclass: boolean | null,
  hasGraduateschool: boolean | null
}

//  静态选项
const provinceOptions = [
  '北京',
  '天津',
  '河北',
  '山西',
  '内蒙古',
  '辽宁',
  '吉林',
  '黑龙江',
  '上海',
  '江苏',
  '浙江',
  '安徽',
  '福建',
  '江西',
  '山东',
  '河南',
  '湖北',
  '湖南',
  '广东',
  '广西',
  '海南',
  '重庆',
  '四川',
  '贵州',
  '云南',
  '西藏',
  '陕西',
  '甘肃',
  '青海',
  '宁夏',
  '新疆',
  '台湾',
  '香港',
  '澳门']
const categoryOptions = ['综合', '工科', '农业', '林业', '医药', '师范', '语言', '财经', '政法', '体育', '艺术', '民族']

const selectedValue = reactive<filterSelectedProps>({
  province: null,
  category: null,
  type: null,
  isSmall211: null,
  isSmall985: null,
  isDoublefirstclass: null,
  hasGraduateschool: null
})

const AllShow = ref<boolean>(false)

const CcOptions = ref<string[]>([])
const handleCcUpdateValue = (value:string[]) => {
  selectedValue.isSmall985 = value.includes('985') ? true : null
  selectedValue.isSmall211 = value.includes('211') ? true : null
  selectedValue.isDoublefirstclass = value.includes('双一流') ? true : null
}
</script>
