<template>
  <n-card class="Card">
    <Head :data="data"/>
    <n-grid x-gap="12" :cols="4">
      <n-gi :span="3">
        <Content :data="data"/>
      </n-gi>
      <n-gi>
        <n-space vertical>
          <n-card title="校训">
            明义、锐思、弘毅、致远
          </n-card>
          <n-card title="推荐专业">
            <n-button text>计算机科学与技术</n-button>
          </n-card>
          <n-card title="优秀校友">
            空
          </n-card>
        </n-space>
      </n-gi>
    </n-grid>

  </n-card>
</template>

<script lang="ts" setup>
import Content from '@/views/university/details/Content.vue'
import Head from '@/views/university/details/Head.vue'

const data = {
  id: 1,
  name: '临沂大学',
  rank: 1,
  province: '山东',
  city: '临沂',
  is_doublefirstclass: false,
  type: '公办',
  is985: false,
  is211: false,
  has_graduateschool: true,
  // eslint-disable-next-line max-len
  avatar: 'https://bkimg.cdn.bcebos.com/pic/14ce36d3d539b600cc2b594ceb50352ac75cb760?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
  // eslint-disable-next-line max-len
  introduce: '临沂大学（Linyi University），简称临大（LYU），位于山东省临沂市；是山东省省属的综合性大学， [1]  国家发改委“产教融合”项目重点建设高校， [2]  山东省应用型人才培养特色名校工程”重点建设大学， [1]  “卓越教师培养计划”实施高校，CDIO工程教育联盟成员单位。\n'
      // eslint-disable-next-line max-len
      + '学校创办于1941年，与抗大一分校与中共滨海地委共同创建的滨海建国学院一脉相承，后多次迁徙合并，历经滨海公学、临沂第一师范、临沂教育学院、临沂师范学院等发展阶段， [3]  2010年经教育部批准更名为临沂大学。 [4] \n'
      // eslint-disable-next-line max-len
      + '截至2021年9月，学校占地约6000亩，校舍面积114余万平方米，固定资产总值48.56亿元，教学科研仪器设备总值5.36亿元，馆藏纸质文献492余万册，中外文数据库70个；设有24个学院、5个校级研究机构、5个教辅机构和5个直属机构， 在招79个本科专业，涵盖11大学科门类；化学学科进入ESI全球排名前1%学科榜单 [37]  ；设有4个硕士授权一级学科、11个硕士专业学位授权类别；有教职工2694人，其中专任教师2037人，具有博士学位的教职工750余人；全日制在校生42000余人，其中硕士研究生400余人、本科生30800余人、国际生120余人。'
}
</script>

<style lang="scss" scoped>
@import '../../../styles/mixins';

.Card{
  @include Card;
}
</style>
