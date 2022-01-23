<template>
  <n-card class="Card">
    <Head :data="data"/>
    <n-grid x-gap="12" :cols="4">
      <n-gi :span="3">
        <Content :data="data"/>
      </n-gi>
      <n-gi>
        <n-space vertical>
          <n-card title="校训">
            明义、锐思、弘毅、致远
          </n-card>
          <n-card title="推荐专业">
            <n-button text>计算机科学与技术</n-button>
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
import Content from '@/views/major/details/Content.vue'
import Head from '@/views/major/details/Head.vue'

const data = {
  id: 1,
  name: '计算机科学与技术',
  rank: 1,
  type: '工学'
}
</script>

<style lang="scss" scoped>
@import '../../../styles/mixins';

.Card{
  @include Card;
}
</style>
