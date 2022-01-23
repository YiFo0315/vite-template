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
      <n-thing :title="item.name" title-extra="extra" :description="item.city">
        <n-space>
          <n-tag>{{ item.type }}</n-tag>
          <n-tag v-if="item.is_doublefirstclass" type="primary">双一流</n-tag>
          <n-tag v-if="item.is211" type="info">211</n-tag>
          <n-tag v-if="item.is985" type="error">985</n-tag>
          <n-tag v-if="item.has_graduateschool" type="warning">研究生点</n-tag>
        </n-space>
      </n-thing>
    </n-list-item>
  </n-list>
  <n-pagination
    :page="page"
    :page-count="100"
    :on-update:page="handleUpdate"
    style="justify-content: flex-end;"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import UniversityItem from '@/views/university/UniversityItem.vue'

const data = [
  {
    id: 1,
    name: '临沂大学',
    rank: 1,
    province: '山东',
    city: '临沂',
    is_doublefirstclass: false,
    type: '公办',
    is985: false,
    is211: false,
    has_graduateschool: true
  },
  {
    id: 2,
    name: '学校名称',
    rank: 2,
    province: '省份',
    city: '城市',
    is_doublefirstclass: true,
    type: '公办',
    is985: true,
    is211: true,
    has_graduateschool: true
  }
]
const page = ref<number>(1)
const handleUpdate = (page:number) => {
}
</script>

<style scoped>

</style>
