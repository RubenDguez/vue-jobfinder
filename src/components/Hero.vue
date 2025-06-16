<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  title: {
    type: String,
    default: 'Become a Vue Dev',
  },
  subtitle: {
    type: String,
    default: 'Learn Vue.js from scratch',
  },
})
</script>

<template>
  <section class="bg-green-500 py-10 text-white flex flex-col gap-4">
    <header>
      <h3 class="text-4xl text-center">{{ title }}</h3>
    </header>
    <p class="text-xl text-center">{{ subtitle }}</p>
  </section>
</template>
