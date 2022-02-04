<template>
  <n-card class="Card">
    <Head @change="handleUpdate" />
    <n-divider />
    <Table @change="handleUpdate" :data="data"/>
  </n-card>
</template>

<script lang="ts" setup>
import axios, { AxiosError, AxiosResponse } from 'axios'
import { reactive, ref } from 'vue'
import { useMessage } from 'naive-ui'
import Table, { CollegeInfoProps } from '@/views/university/Table.vue'
import Head, { filterSelectedProps } from '@/views/university/Head.vue'

const message = useMessage()
const data = ref<CollegeInfoProps[]>([])
const pageQuery = reactive({
  page: 1,
  pageNum: 1,
  hasGraduateschool: ''

})
const getPageNum = () => {
  axios.get('http://www.haozhideng.com/hzd/college/findAllBy').then((res:AxiosResponse) => {
    pageQuery.pageNum = Math.ceil(res.data.data.length / 10)
  }, (err: AxiosError) => {
    console.log(err)
    message.error(err.message)
  })
}
getPageNum()
const handleUpdate = (page:number, params?: filterSelectedProps) => {
  axios.get('http://www.haozhideng.com/hzd/college/findAllBy', { params: {
    pageSize: 10,
    pageNo: page
  } }).then((res:AxiosResponse) => {
    data.value = res.data.data
  }, (err: AxiosError) => {
    console.log(err)
    message.error(err.message)
  })
}
handleUpdate(pageQuery.page)

</script>

<style lang="scss" scoped>
@import '../../styles/mixins';

.Card{
  @include Card
}
</style>
