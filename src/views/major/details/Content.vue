<template>
  <n-card :bordered="false">
    <n-tabs
      type="line"
      size="large"
      :tabs-padding="20"
      pane-style="padding: 20px;"
    >
      <n-tab-pane name="介绍">
        <p>
          计算机科学与技术（Computer Science and Technology）是一门普通高等学校本科专业，属于计算机类专业，基本修业年限为四年，授予工学或理学学士学位
          ；2012年9月，教育部将新的计算机科学与技术专业取代旧的计算机科学与技术和仿真科学与技术两个专业。
        </p>
        <p>
          计算机科学与技术是一个计算机系统与网络兼顾的计算机学科宽口径专业，旨在培养具有良好的科学素养，具有自主学习意识和创新意识，
          科学型和工程型相结合的计算机专业高水平工程技术人才。
        </p>
      </n-tab-pane>
      <n-tab-pane name="就业前景">招生简章</n-tab-pane>
    </n-tabs>
  </n-card>
</template>

<script lang="ts" setup>
defineProps(['data'])
</script>

<style scoped>

</style>
