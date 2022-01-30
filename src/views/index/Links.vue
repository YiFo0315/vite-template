<template>
  <n-card title="📖 友情链接" :bordered="false" header-style="font-size:24px;font-weight:bold">
    <n-grid x-gap="12" :cols="6" class="links-grid">
      <n-gi class="links-ig">
        <img class="links-img" src="../../assets/img/Links/company1.png" @click="toLink('http://www.xdf.cn/')">
      </n-gi>
      <n-gi class="links-ig">
        <img class="links-img" src="../../assets/img/Links/company2.png" @click="toLink('https://www.baidu.com/')">
      </n-gi>
      <n-gi class="links-ig">
        <img class="links-img" src="../../assets/img/Links/company3.png" @click="toLink('https://www.360.cn/')">
      </n-gi>
      <n-gi class="links-ig">
        <img class="links-img" src="../../assets/img/Links/company4.png" @click="toLink('https://new.qq.com/ch/edu/')">
      </n-gi>
      <n-gi class="links-ig">
        <img class="links-img" src="../../assets/img/Links/company5.png" @click="toLink('http://edu.sina.com.cn/')">
      </n-gi>
      <n-gi class="links-ig">
        <img class="links-img" src="../../assets/img/Links/company6.png" @click="toLink('https://edu.163.com/')">
      </n-gi>
    </n-grid>
  </n-card>
</template>

<script>
export default {
  name: 'Links',
  methods: {
    toLink(url) {
      window.location.href = url
    }
  }
}
</script>

<style scoped>
.links-grid{
  height: 100px;
  cursor:pointer;
}
.links-ig{
  margin: auto;
}
</style>
