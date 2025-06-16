<script setup>
import { defineProps } from 'vue'

defineProps({
  bg: {
    type: String,
    default: 'bg-gray-50',
  },
})
</script>

<template>
  <div :class="`${bg} shadow-md py-3 px-6 rounded-2xl w-auto flex flex-col gap-2`">
    <slot></slot>
  </div>
</template>
