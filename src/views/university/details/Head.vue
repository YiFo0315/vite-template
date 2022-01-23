<template>
  <n-page-header>
    <n-grid x-gap="12" :cols="5">
      <n-gi :span="2">
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
              <n-space>
                <n-button>分享</n-button>
                <n-button>收藏</n-button>
              </n-space>
              <br/><br/>
              <n-progress type="circle" :percentage="percentage" style="margin-right: 50px;"/>
            </template>
            <n-thing :title="data.name" :description="data.city">
              <br /><br />
              <n-space size="large">
                <n-button strong secondary>{{ data.type }}</n-button>
                <n-button strong secondary v-if="data.is_doublefirstclass" type="primary">双一流</n-button>
                <n-button strong secondary v-if="data.is211" type="info">211</n-button>
                <n-button strong secondary v-if="data.is985" type="error">985</n-button>
                <n-button strong secondary v-if="data.has_graduateschool" type="warning">研究生点</n-button>
              </n-space>
              <br /><br />
              <n-button size="large" type="warning" style="width: 150px; margin-right: 20px;">官网</n-button>
              <n-gradient-text type="danger" size="15"> 电话: 12345 </n-gradient-text>
            </n-thing>
          </n-list-item>
        </n-list>
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
defineProps(['data'])
</script>

<style scoped>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>
