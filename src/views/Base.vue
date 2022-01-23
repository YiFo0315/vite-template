<template>
  <n-layout class="container">
    <n-layout-header class="nav">
      <Nav />
    </n-layout-header>
    <n-layout-content class="content">
      <router-view :key="$route.fullPath"></router-view>
      <!--      <Suspense>-->
      <!--        <template #default>-->
      <!--          <router-view></router-view>-->
      <!--        </template>-->
      <!--        <template #fallback>-->
      <!--          Loading...-->
      <!--        </template>-->
      <!--      </Suspense>-->
    </n-layout-content>
  </n-layout>
</template>

<script setup lang="ts">
import Nav from '@/components/nav/Nav.vue'

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
  line-height: 62px;
  height: 62px;
  padding: 0 48px;
  background: #FFFFFF;
}
.content {
  position: absolute;
  background-color: #F5F5F594;
  top: 62px;
  bottom: 0;
  width: 100%;
}
</style>
