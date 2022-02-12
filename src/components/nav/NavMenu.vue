<template>
  <n-menu
    :value="activeKey"
    mode="horizontal"
    :options="menuOptions"
    :render-label="renderMenuLabel"
  />
</template>

<script lang="ts">
import { computed, defineComponent, h } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

export interface menuOptionsProps {
  label: string,
  key: string,
  icon?: string,
  children?: menuOptionsProps[]
}
const useMenuOptionsEffect = () => {
  const route = useRoute()
  const activeKey = computed(() => route.name)
  const renderMenuLabel = (option:menuOptionsProps) => h(
    RouterLink,
    {
      to: { name: option.key }
    },
    { default: () => option.label }
  )
  const menuOptions:menuOptionsProps[] = [
    {
      label: '首页',
      key: 'index'
    },
    {
      label: '科学选科',
      key: 'index'
    },
    {
      label: '志愿填报',
      key: 'index'
    },
    {
      label: '个人测评',
      key: 'index'
    },
    {
      label: '查大学',
      key: 'university'
    },
    {
      label: '查专业',
      key: 'major'
    }
  ]
  return {
    activeKey,
    menuOptions,
    renderMenuLabel
  }
}
export default defineComponent({
  name: 'NavMenu',
  setup() {
    const { activeKey, menuOptions, renderMenuLabel } = useMenuOptionsEffect()
    return {
      activeKey,
      menuOptions,
      renderMenuLabel
    }
  }
})
</script>

<style scoped>

</style>
