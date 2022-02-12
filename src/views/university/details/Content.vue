<template>
  <n-card :bordered="false">
    <n-tabs
      type="line"
      size="large"
      :tabs-padding="20"
      pane-style="padding: 20px;"
    >
      <n-tab-pane name="介绍">
        <n-card title="研究生学科信息" :bordered="false">{{ data.postgraduateDiscipline }}</n-card>

      </n-tab-pane>
      <n-tab-pane name="招生简章">招生简章</n-tab-pane>
    </n-tabs>
  </n-card>
</template>

<script lang="ts" setup>
defineProps(['data'])
</script>

<style scoped>

</style>
