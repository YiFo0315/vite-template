<template>
  <n-grid :cols="2">
    <n-gi>
      壹号方舟-好志灯
    </n-gi>
    <n-gi>
      <n-space vertical>
        <n-space>
          <n-button color="#000000">
            <template #icon>
              <n-icon>
                <Apple />
              </n-icon>
            </template>
            AppStore下载
          </n-button>
          <n-button color="#000000">
            <template #icon>
              <n-icon>
                <Android />
              </n-icon>
            </template>
            Android下载
          </n-button>
        </n-space>
        <n-el>
          关注我们：<n-button circle color="#ffffff">
            <template #icon>
              <n-icon color="#000000">
                <Wechat />
              </n-icon>
            </template>
          </n-button>
        </n-el>
      </n-space>
    </n-gi>
  </n-grid>
</template>

<script setup lang="ts">
import { AppleFilled as Apple, AndroidFilled as Android, WechatFilled as Wechat } from '@vicons/antd'
</script>

<style scoped>

</style>
