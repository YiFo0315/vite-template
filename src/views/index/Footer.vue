<template>
  <n-grid :cols="8" class="footer">
    <n-gi></n-gi>
    <n-gi class="footer-gi">
      <div class="gi-top">
        壹号方舟-好志灯
      </div>
      <div class="gi-bottom">
        <div class="bottom-list">高考志愿填报专家</div>
      </div>
    </n-gi>
    <n-gi class="footer-gi">
      <div class="gi-top">
        常见问题
      </div>
      <div class="gi-bottom">
        <div class="bottom-list">产品白皮书</div>
        <div class="bottom-list">产品说明书</div>
      </div>
    </n-gi>
    <n-gi class="footer-gi">
      <div class="gi-top">
        关于我们
      </div>
      <div class="gi-bottom">
        <div class="bottom-list">团队介绍</div>
        <div class="bottom-list">联系我们</div>
        <div class="bottom-list">隐私政策</div>
        <div class="bottom-list">用户协议</div>
      </div>
    </n-gi>
    <n-gi>
      <div class="gi-top">
        关注我们
      </div>
      <div class="gi-bottom">
        <img class="bottom-img" src="../../assets/img/Footer/wx.png">
      </div>
    </n-gi>
    <n-gi>
      <div class="gi-top">
        安卓下载
      </div>
      <div class="gi-bottom">
        <img class="bottom-img" src="../../assets/img/Footer/andriod.png">
      </div>
    </n-gi>
    <n-gi>
      <div class="gi-top">
        苹果下载
      </div>
      <div class="gi-bottom">
        <img class="bottom-img" src="../../assets/img/Footer/apple.png">
      </div>
    </n-gi>
    <n-gi>
    </n-gi>
  </n-grid>
</template>

<script setup lang="ts">
import { AppleFilled as Apple, AndroidFilled as Android, WechatFilled as Wechat } from '@vicons/antd'
</script>

<style scoped>
.footer {
  height: 240px;
  background: #333333;
  color: white;
  margin-top: 1rem;
  min-width: 100%;
}
.gi-top{
  font-size: 18px;
  font-weight: bold;
  height: 50px;
  padding-left: 30px;
  padding-top: 20px;
}
.gi-bottom{
  font-size: 16px;
  height: 190px;
  padding-left: 30px;
  color: #999999;
}
.bottom-list{
  cursor: pointer;
  margin-top: 6px;
}
.bottom-img{
  width: 120px;
  height: auto;
}
</style>
