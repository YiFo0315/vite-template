<template>
  <n-card class="Card">
    <Head :data="data" />
    <n-grid x-gap="12" :cols="4">
      <n-gi :span="3">
        <Content :data="data" />
      </n-gi>
      <n-gi>
        <n-space vertical>
          <n-card title="校训">
            明义、锐思、弘毅、致远
          </n-card>
          <n-card title="推荐专业">
            {{ data.studentRecomend }}
          </n-card>
          <n-card title="优秀校友">
            空
          </n-card>
        </n-space>
      </n-gi>
    </n-grid>
  </n-card>
</template>

<script lang="ts" setup>
import axios, { AxiosResponse } from 'axios'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import Content from '@/views/university/details/Content.vue'
import Head from '@/views/university/details/Head.vue'
import { CollegeInfoProps } from '@/views/university/Table.vue'

const data = ref<CollegeInfoProps>({
  alias: '',
  area: '',
  begindateOfFound: 0,
  begindateOfPresentname: 0,
  category: '',
  characteristic: '',
  chargeDepart: '',
  city: '',
  graduateschool: '',
  hasExempt: 0,
  hasGraduateschool: 0,
  id: 0,
  is2011: 0,
  is88: 0,
  isCharacteristic: 0,
  isDoublefirstclass: 0,
  isProvinceMinistry: 0,
  isSmall211: 0,
  isSmall985: 0,
  name: '',
  position: '',
  postgraduateDiscipline: '',
  province: '',
  provinceMinistry: '',
  rank: 0,
  runningDepart: '',
  specialmajor: '',
  studentRecomend: '',
  type: '',
  url: ''
})

const route = useRoute()
const handleEnter = () => {
  const id = route.params.id
  console.log(id)
  axios.get('http://www.haozhideng.com/hzd/college/findOneBy?', { params: {
    id
  } }).then((res:AxiosResponse) => {
    data.value = res.data.data
  })
}
handleEnter()
</script>

<style lang="scss" scoped>
@import '../../../styles/mixins';

.Card{
  @include Card;
}
</style>
