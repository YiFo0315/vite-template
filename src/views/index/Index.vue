<template>
  <n-layout class="container">
    <n-layout-header class="nav">
      <Head />
    </n-layout-header>
    <n-layout-content class="content">
      <n-card content-style="padding: 0 84px;" :bordered="false">
        <n-tabs
          type="line"
          size="large"
          :tabs-padding="20"
          pane-style="padding: 20px;"
        >
          <n-tab-pane name="首页">
            <Content />
          </n-tab-pane>
          <n-tab-pane name="科学选科">科学选科</n-tab-pane>
          <n-tab-pane name="志愿填报">志愿填报</n-tab-pane>
          <n-tab-pane name="个人评测">个人评测</n-tab-pane>
          <n-tab-pane name="查大学">查大学</n-tab-pane>
          <n-tab-pane name="查专业">查专业</n-tab-pane>
        </n-tabs>
      </n-card>
      <Footer class="footer"/>
    </n-layout-content>
  </n-layout>
</template>

<script setup lang="ts">
import Head from '@/views/index/Head.vue'
import Content from '@/views/index/Content.vue'
import Footer from '@/views/index/Footer.vue'

</script>

<style scoped>
.container{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.nav{
  left: 0;
  top: 0;
  right: 0;
  line-height: 128px;
  padding: 0 1.08rem;
  background: #FFFFFF;
}
.content {
  position: absolute;
  background-color: #F5F5F594;
  top: 1.28rem;
  bottom: 0;
  width: 100%;
}
.footer {
  left: 0;
  top: 0;
  right: 0;
  height: 128px;
  padding: .3rem 1.08rem;
  background: #333333;
  color: white;
}
</style>
