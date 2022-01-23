<template>
  <n-card class="Card">
    <Head />
    <n-divider />
    <Table />
  </n-card>
</template>

<script lang="ts" setup>
import Head from '@/views/university/Head.vue'
import Table from '@/views/university/Table.vue'
</script>

<style lang="scss" scoped>
@import '../../styles/mixins';

.Card{
  @include Card
}
</style>
