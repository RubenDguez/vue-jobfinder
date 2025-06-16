<script setup>
import { defineProps } from 'vue'
import Card from './Card.vue';

const props = defineProps({
  job: Object,
})
</script>

<template>
  <Card>
    <p>{{ job.type }}</p>
    <h3 class="text-2xl">{{ job.title }}</h3>
    <p>{{ job.description }}</p>

    <p class="text-xl font-bold text-green-500">{{ job.salary }} / year</p>

    <p class="text-amber-600 text-sm">{{ job.location }}</p>
    <a href="#" class="text-center py-2 px-6 bg-green-600 text-white rounded-2xl">Learn More</a>
  </Card>
</template>
