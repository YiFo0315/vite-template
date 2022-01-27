<template>
  <n-card title="升学规划" :bordered="false">
    <n-grid x-gap="12" :cols="5">
      <n-gi>
        <div class="light-green">个人评测</div>
      </n-gi>
      <n-gi>
        <div class="green">高一选科</div>
      </n-gi>
      <n-gi>
        <div class="light-green">高考志愿填报</div>
      </n-gi>
      <n-gi>
        <div class="green">查大学</div>
      </n-gi>
      <n-gi>
        <div class="green">查专业</div>
      </n-gi>
    </n-grid>
  </n-card>
</template>

<script>
export default {
  name: 'Planning'
}
</script>

<style scoped>
.light-green {
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items:center;
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items:center;
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}
</style>
