<template>
  <div id="RecruitChart" :style="{ width: '300px', height: '300px' }"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'

onMounted(() => {
  const myChart = ref<HTMLElement>()
  echarts.init(document.getElementById('RecruitChart') as HTMLElement).setOption({
    title: {
      text: '招生人数和报考人数'
    },
    tooltip: {},
    legend: {
      data: ['销量']
    },
    xAxis: {
      data: ['2020', '2021', '2022']
    },
    yAxis: {},
    series: [
      {
        data: [
          100, 140, 230
        ],
        type: 'line',
        label: {
          show: true,
          position: 'bottom',
          textStyle: {
            fontSize: 12
          }
        }
      }
    ]
  })
})

</script>

<style scoped>

</style>
