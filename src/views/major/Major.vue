<template>
  <n-card class="Card">
    <n-page-header>
      <template #title>
        <n-tabs default-value="Undergraduate">
          <n-tab-pane name="Undergraduate" tab="本科专业">
            <n-card
              v-for="item in UndergraduateData"
              :key="item.sid"
              :bordered="false"
            >
              <template #header>
                <n-divider />
                {{ item.sname }}
              </template>
              <n-space vertical size="large">
                <n-grid v-for="item in item.categories" :key="item.cid" x-gap="12" :cols="4">
                  <n-gi :span="1">
                    <n-text>{{ item.cname }}</n-text>
                  </n-gi>
                  <n-gi :span="3">
                    <n-space>
                      <n-button v-for="item in item.majors" :key="item.mid" text>
                        {{ item.mname }}
                      </n-button>
                    </n-space>
                  </n-gi>
                </n-grid>
              </n-space>
            </n-card>
          </n-tab-pane>
          <n-tab-pane name="Junior" tab="专科专业">
          </n-tab-pane>
        </n-tabs>
      </template>
      <template #header>
        <n-breadcrumb>
          <n-breadcrumb-item>首页</n-breadcrumb-item>
          <n-breadcrumb-item>查专业</n-breadcrumb-item>
        </n-breadcrumb>
      </template>
    </n-page-header>
  </n-card>
</template>

<script lang="ts" setup>

import axios, { AxiosResponse } from 'axios'
import { ref } from 'vue'

const UndergraduateData = ref()
const handleEnter = () => {
  axios.get('https://www.fastmock.site/mock/ad09370256b46b63e2f4c02c6f609032/hzd/getmajor').then((res:AxiosResponse) => {
    UndergraduateData.value = res.data.data.subjects
  })
}
handleEnter()
</script>

<style lang="scss" scoped>
@import '../../styles/mixins';

.Card{
  @include Card
}
</style>
