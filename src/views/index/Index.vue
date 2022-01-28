<template>
  <n-layout class="container">
    <n-layout-header class="nav">
      <Head />
    </n-layout-header>
    <n-layout-content class="content">
      <n-card content-style="padding: 0 108px;" :bordered="false">
        <Content />
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
  height: 1.7rem;
  padding: 0 1.08rem;
  background: #FFFFFF;
}
.content {
  position: absolute;
  background-color: #F5F5F594;
  top: 1.7rem;
  bottom: 0;
  width: 100%;
}
.footer {
  left: 0;
  top: 0;
  right: 0;
  height: 128px;
  padding: .3rem 1.28rem;
  background: #333333;
  color: white;
}
</style>
