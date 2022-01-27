<template>
  <n-card title="专业介绍" :bordered="false">
    <n-grid x-gap="16" :cols="4">
      <n-gi>
        <n-card title="软件工程" class="Card">
          <template #cover>
            <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg">
          </template>
          计算机类
        </n-card>
      </n-gi>
      <n-gi>
        <n-card title="软件工程" class="Card">
          <template #cover>
            <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg">
          </template>
          计算机类
        </n-card>
      </n-gi>
      <n-gi>
        <n-card title="软件工程" class="Card">
          <template #cover>
            <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg">
          </template>
          计算机类
        </n-card>
      </n-gi>
      <n-gi>
        <n-card title="软件工程" class="Card">
          <template #cover>
            <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg">
          </template>
          计算机类
        </n-card>
      </n-gi>
    </n-grid>
  </n-card>
</template>

<script>
export default {
  name: 'Introduction'
}
</script>

<style scoped>
.Card {
  width: 2.5rem;
}
</style>
