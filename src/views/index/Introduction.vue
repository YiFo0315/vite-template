<template>
  <n-card title="专业介绍" :bordered="false">
    <n-grid x-gap="16" :cols="4">
      <n-gi v-for="item in data" :key="item.id">
        <n-card class="Card" style="height: 5rem;">
          <template #header>
            {{ item.title }}<br/><n-text class="Subtitle">{{ item.subtitle }}</n-text>
          </template>
          <template #cover>
            <img :src="'/src/assets/img/' + item.logo">
          </template>
          <n-ellipsis :line-clamp="9">
            {{ item.content }}
          </n-ellipsis>
        </n-card>
      </n-gi>
    </n-grid>
  </n-card>
</template>

<script lang="ts" setup>
import axios, { AxiosResponse } from 'axios'
import { ref } from 'vue'

export interface IntroductionProps {
  content: string,
  id: number,
  logo: string,
  modifyOn: string,
  subtitle: string,
  title: string
}
const data = ref<IntroductionProps[]>([])
axios.get('http://www.haozhideng.com/hzd/sysnews').then((res:AxiosResponse) => {
  data.value = res.data.data
})
</script>

<style scoped>
.Card {
  width: 2.5rem;
}
.Subtitle {
  color: #A6A4A4;
  font-size: .1rem;
}
</style>
