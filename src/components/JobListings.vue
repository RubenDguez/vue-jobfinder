<script setup>
import JobListing from '@/components/JobListing.vue'
import { defineProps } from 'vue'
import jobs from '@/data/jobs.json'

const props = defineProps({
  showAllJobs: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <section class="container mx-auto py-5 px-20">
    <div class="grid gap-3 lg:grid-cols-3 mb-7">
      <JobListing v-for="job in jobs" :job="job" :key="job.id" />
    </div>
    <div v-if="showAllJobs" class="w-auto flex justify-center">
      <a href="#" class="bg-black text-white py-2 px-6 rounded-2xl text-2xl">Show all jobs</a>
    </div>
  </section>
</template>
