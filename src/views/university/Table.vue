<template>
  <n-list>
    <n-list-item v-for="item in data" :key="item.id">
      <template #prefix>
        <n-image
          width="100"
          height="100"
          src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        />
      </template>
      <template #suffix>
        <router-link :to="'/university/'+item.id">
          <n-button>查看详情</n-button>
        </router-link>
      </template>
      <n-thing :title="item.name" title-extra="extra" :description="item.chargeDepart + item.city">
        <n-space>
          <n-tag>{{ item.type }}</n-tag>
          <n-tag v-if="item.isDoublefirstclass" type="primary">双一流</n-tag>
          <n-tag v-if="item.isSmall211" type="info">211</n-tag>
          <n-tag v-if="item.isSmall985" type="error">985</n-tag>
          <n-tag v-if="item.hasGraduateschool" type="warning">研究生点</n-tag>
        </n-space>
      </n-thing>
    </n-list-item>
  </n-list>
  <n-pagination
    :page="pageQuery.page"
    :page-count="pageQuery.pageNum"
    :on-update:page="handleUpdate"
    style="justify-content: flex-end;"
  />
</template>

<script lang="ts" setup>

import { PropType, reactive } from 'vue'

export interface CollegeInfoProps {
  'alias': string,
  'area': string,
  'begindateOfFound': number,
  'begindateOfPresentname': number,
  'category': string,
  'characteristic': string,
  'chargeDepart': string,
  'city': string,
  'graduateschool': string,
  'hasExempt': number,
  'hasGraduateschool': number,
  'id': number,
  'is2011': number,
  'is88': number,
  'isCharacteristic': number,
  'isDoublefirstclass': number,
  'isProvinceMinistry': number,
  'isSmall211': number,
  'isSmall985': number,
  'name': string,
  'position': string,
  'postgraduateDiscipline': string,
  'province': string,
  'provinceMinistry': string,
  'rank': number,
  'runningDepart': string,
  'specialmajor': string,
  'studentRecomend': string,
  'type': string,
  'url': string
}

defineProps({
  data: {
    type: Object as PropType<CollegeInfoProps[]>,
    required: true,
    default() {
      return []
    }
  }
})

const emit = defineEmits(['change'])

const pageQuery = reactive({
  page: 1,
  pageNum: 100
})

const handleUpdate = (newPage:number) => {
  emit('change')
  pageQuery.page = newPage
}
</script>
