<template>
  <n-page-header>
    <n-grid x-gap="12" :cols="8">
      <n-gi :span="3">
        <n-carousel autoplay show-arrow>
          <img
            class="carousel-img"
            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
          />
          <img
            class="carousel-img"
            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
          />
          <img
            class="carousel-img"
            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
          />
          <img
            class="carousel-img"
            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
          />
        </n-carousel>
      </n-gi>
      <n-gi :span="3">
        <n-list>
          <n-list-item>
            <template #suffix>

            </template>
            <n-thing :title="data.name" :description="data.type">
              <br /><br />
              <n-space size="large">
                <n-button
                  strong
                  secondary
                  type="primary"
                >
                  本科
                </n-button>
                <n-button
                  strong
                  secondary
                  type="info"
                >
                  工学
                </n-button>
                <n-button
                  strong
                  secondary
                  type="error"
                >
                  计算机类
                </n-button>
                <n-button
                  strong
                  secondary
                  type="warning"
                >
                  四年
                </n-button>
                <n-button
                  strong
                  secondary
                  type="warning"
                >
                  物理
                </n-button>
              </n-space>
              <br /><br />
            </n-thing>
          </n-list-item>
        </n-list>
      </n-gi>
      <n-gi :span="2">
        <RecruitChart />
      </n-gi>
    </n-grid>
    <template #header>
      <n-breadcrumb>
        <n-breadcrumb-item>首页</n-breadcrumb-item>
        <n-breadcrumb-item>查大学</n-breadcrumb-item>
        <n-breadcrumb-item>{{ data.name }}</n-breadcrumb-item>
      </n-breadcrumb>
    </template>
  </n-page-header>
</template>

<script lang="ts" setup>
import RecruitChart from '@/views/major/details/RecruitChart.vue'

defineProps(['data'])
</script>

<style scoped>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>
