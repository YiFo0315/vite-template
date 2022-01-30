<template>
  <n-card title="📖 升学规划" :bordered="false" header-style="font-size:24px;font-weight:bold">
    <n-grid x-gap="12" :cols="5">
      <n-gi>
        <div class="gi-card">
          <div class="card-top">
            <img src="../../assets/img/Planning/ceping.jpg" class="card-img">
          </div>
          <div class="card-bottom">
            个人测评-认识自我
          </div>
        </div>
      </n-gi>
      <n-gi>
        <div class="gi-card">
          <div class="card-top">
            <img src="../../assets/img/Planning/xuanke.jpg" class="card-img">
          </div>
          <div class="card-bottom">
            高一选科-先人一步
          </div>
        </div>
      </n-gi>
      <n-gi>
        <div class="gi-card">
          <div class="card-top">
            <img src="../../assets/img/Planning/zhiyuan.jpg" class="card-img">
          </div>
          <div class="card-bottom">
            志愿填报-科学全面
          </div>
        </div>
      </n-gi>
      <n-gi>
        <div class="gi-card">
          <div class="card-top">
            <img src="../../assets/img/Planning/daxue.jpg" class="card-img">
          </div>
          <div class="card-bottom">
            查大学-精确获取
          </div>
        </div>
      </n-gi>
      <n-gi>
        <div class="gi-card">
          <div class="card-top">
            <img src="../../assets/img/Planning/zhuanye.jpg" class="card-img">
          </div>
          <div class="card-bottom">
            查专业-准确定位
          </div>
        </div>
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
.gi-card{
  flex-direction: column;
  height: 140px;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items:center;
  border-radius: 8px;
  cursor:pointer;
  user-select: none; 
}
.gi-card:hover{
  
}
.card-top{
  font-size: 24px;
  height: 110px;
  text-align: center;
  line-height: 70px;
}
.card-img{
  height: 90px;
  width: auto;
  border-radius: 5px;
}
.card-bottom{
  font-size: 20px;
  height: 20px;
  line-height: 20px;
}
</style>
