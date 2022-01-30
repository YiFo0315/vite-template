<template>
  <n-card title="📖 热门资讯" :bordered="false" header-style="font-size:24px;font-weight:bold">
    <n-list v-for="item in infoList" :key="item.id" bordered class="info-list">
      <n-list-item>
        <template #prefix>
          <img :src="item.img">
        </template>
        <template #suffix>
          {{item.date}}
        </template>
        <n-thing :title="item.title" :description="item.description" class="info-thing"
                 @click="toInfo(item.url)">
          <br />
        </n-thing>
      </n-list-item>
    </n-list>
  </n-card>
</template>

<script>
export default {
  name: 'Info',
  data() {
    return {
      infoList: [
        {
          id: 1,
          title: '天津：2022年高考小语种首考1月8日举行 考前温馨提示来了',
          description: '2022年我市普通高考小语种科目第一次考试将于1月8日举行，为确保考生顺利参加考试，市高招办提示如下...',
          img: '/src/assets/img/Info/info1.png',
          label: '高考资讯',
          date: '2021.12.30',
          url: 'https://storage-oss.ipin.com/oss-data/article202201281216345692972.html'
        },
        {
          id: 2,
          title: '山东：2022年普通高校招生艺术类专业 统考考评工作正在有序',
          description: '我省2022年普通高校招生美术类、书法类、文学编导类、音乐类（笔试）等艺术类专业统考笔试科目已于12月19日结束...',
          img: '/src/assets/img/Info/info2.png',
          label: '艺考',
          date: '2021.12.29',
          url: 'https://storage-oss.ipin.com/oss-data/article202201281137421722962.html'
        },
        {
          id: 3,
          title: '甘肃：2022年中国民航大学与中国国际航空公司招飞预选初检日',
          description: '甘肃：2022年中国民航大学与中国国际航空公司招飞预选初检日...',
          img: '/src/assets/img/Info/info3.png',
          label: '民航招飞',
          date: '2021.12.22',
          url: 'https://storage-oss.ipin.com/oss-data/article202201192305219402937.html'
        },
        {
          id: 4,
          title: '山东：关于我省2022年普通高校招生艺术类专业统考有关情况的',
          description: '12月19日，山东省2022年普通高校招生艺术类专业统考（笔试）过程中，我院监测发现疑似个别考生违规携带手机拍摄试卷上网的情况...',
          img: '/src/assets/img/Info/info4.png',
          label: '艺考',
          date: '2021.12.20',
          url: 'https://storage-oss.ipin.com/oss-data/article202201192224411502921.html'
        },
        {
          id: 5,
          title: '山东：关于组织2022年高考补报名工作的公告',
          description: '为更好服务考生，经研究，决定在2022年夏季高考外语听力考试、高职（专科）单独考试招生和综合评价招生报名前...',
          img: '/src/assets/img/Info/info5.png',
          label: '重要提醒',
          date: '2021.12.17',
          url: 'https://storage-oss.ipin.com/oss-data/article202201192206269812913.html'
        }
      ]
    }
  },
  methods: {
    toInfo(url) {
      window.location.href = url
    }
  }
}
</script>

<style scoped>
.info-list{
  height: 120px;
  border:0;
  user-select: none;
}
::v-deep .n-list-item__main{
  cursor: pointer;
}
::v-deep .n-list-item__main:hover .n-thing-header__title{
  text-decoration:underline;
  color: #00aff0;
}
::v-deep .n-list-item__prefix img{
  height: 100px;
  width:auto;
  border-radius: 5px;
  margin-top: 10px;
  margin-left: 10px;
}
.info-thing{
  font-size: 16px;
}
::v-deep .n-thing-header__title{
    font-size: 26px!important;
    height: 50px;
    line-height: 50px;

}
::v-deep .n-list-item__suffix{
  color: #818692;
}
</style>
