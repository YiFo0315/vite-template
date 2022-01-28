<template>
  <Poster />
  <Planning  style="margin-top: 4rem"/>
  <n-grid :cols="2">
    <n-gi>
      <PersonalityTest />
    </n-gi>
    <n-gi>
      <ScientificSelection />
    </n-gi>
  </n-grid>
  <Introduction />
</template>

<script lang="ts" setup>

import Planning from '@/views/index/Planning.vue'
import PersonalityTest from '@/views/index/PersonalityTest.vue'
import ScientificSelection from '@/views/index/ScientificSelection.vue'
import Introduction from '@/views/index/Introduction.vue'
import Poster from '@/views/index/Poster.vue'
</script>

<style scoped>

</style>
