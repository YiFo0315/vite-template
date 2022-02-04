<template>
  <n-checkbox-group :value="value" @update:value="handleUpdateValue">
    <n-space item-style="display: flex;">
      <n-checkbox
        :checked="unlimitedChecked"
        :indeterminate="unlimitedChecked"
        @update:checked="handleCheckedChange"
      >
        不限
      </n-checkbox>
      <n-checkbox
        v-for="(item, index) in options"
        :key="index"
        :value="item"
        :label="item"
      />
    </n-space>
  </n-checkbox-group>
</template>

<script lang="ts" setup>

import { ref } from 'vue'

defineProps(['options', 'value'])
const emit = defineEmits(['update:value'])

const unlimitedChecked = ref<boolean>(true)
const handleCheckedChange = (checked: boolean) => {
  if (checked) {
    emit('update:value', null)
    unlimitedChecked.value = checked
  }
}
const handleUpdateValue = (value: string[]) => {
  if (value.length > 0) {
    emit('update:value', value)
    unlimitedChecked.value = false
  } else {
    emit('update:value', null)
    unlimitedChecked.value = true
  }
}
</script>
