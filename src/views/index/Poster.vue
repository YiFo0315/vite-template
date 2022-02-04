<template>
  <div class="poster">
    <n-grid x-gap="12" :cols="2">
      <n-gi></n-gi>
      <n-gi class="center">
      </n-gi>
    </n-grid>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.poster {
  position: absolute;
  left: 0;
  right: 0;
  height: 4rem;
  background: url("../../assets/img/Banner/hero-bg.png") no-repeat;
  background-size: cover;
}
.center {
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items:center;
  background: url('/src/assets/img/Banner/hero-img.png') no-repeat;
  height: 4rem;
}
.Card {
  width: 3rem;
}
</style>
