<template>
  <n-card class="Card">
    <Head :province-options="provinceOptions" :type-options="typeOptions" />
    <n-divider />
    <Table />
  </n-card>
</template>

<script lang="ts" setup>
import Head from '@/views/university/Head.vue'
import Table from '@/views/university/Table.vue'

const provinceOptions = ['不限',
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

const typeOptions = ['不限', '综合', '工科', '农业', '林业', '医药', '师范', '语言', '财经', '政法', '体育', '艺术', '民族']
</script>

<style lang="scss" scoped>
@import '../../styles/mixins';

.Card{
  @include Card
}
</style>
