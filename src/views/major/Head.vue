<template>
  <n-page-header>
    <template #title>
      <n-tabs ref="tabsInstRef" v-model:value="value">
        <n-tab :name="tab">
          我是 {{ tab }}
        </n-tab>
      </n-tabs>
    </template>
    <template #header>
      <n-breadcrumb>
        <n-breadcrumb-item>首页</n-breadcrumb-item>
        <n-breadcrumb-item>查专业</n-breadcrumb-item>
      </n-breadcrumb>
    </template>
  </n-page-header>
</template>

<script>
export default {
  name: 'Head'
}
</script>

<style scoped>

</style>
