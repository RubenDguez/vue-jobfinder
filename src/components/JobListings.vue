<script setup>
import JobListing from '@/components/JobListing.vue'
import jobs from '@/data/jobs.json'
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  showAllJobs: {
    type: Boolean,
    default: false,
  },
  limit: Number,
})
</script>

<template>
  <section class="container mx-auto py-5 px-20">
    <h3 class="text-3xl font-bold text-green-500 text-center mb-3">Browse Jobs</h3>
    <div class="grid gap-3 lg:grid-cols-3 mb-7">
      <JobListing v-for="job in jobs.slice(0, limit || jobs.length)" :job="job" :key="job.id" />
    </div>
    <div v-if="showAllJobs" class="w-auto flex justify-center">
      <RouterLink to="/jobs" class="bg-black text-white py-2 px-6 rounded-2xl">Show all jobs</RouterLink>
    </div>
  </section>
</template>
