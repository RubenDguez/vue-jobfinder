<script setup>
import JobListing from '@/components/JobListing.vue'
import axios from 'axios'
import { onMounted, reactive } from 'vue'
import { RouterLink } from 'vue-router'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

const props = defineProps({
  showAllJobs: {
    type: Boolean,
    default: false,
  },
  limit: Number,
})

const state = reactive({
  jobs: [],
  isLoading: true,
})

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3001/jobs')
    state.jobs = response.data
  } catch (error) {
    console.error('Error fetching jobs:', error)
  } finally {
    state.isLoading = false
  }
})
</script>

<template>
  <section class="container mx-auto py-5 px-20">
    <h3 class="text-3xl font-bold text-green-500 text-center mb-3">Browse Jobs</h3>
    <div v-if="state.isLoading" class="flex justify-center">
      <PulseLoader />
    </div>

    <div class="grid gap-3 lg:grid-cols-3 mb-7">
      <JobListing
        v-for="job in state.jobs.slice(0, limit || state.jobs.length)"
        :job="job"
        :key="job.id"
      />
    </div>
    <div v-if="showAllJobs" class="w-auto flex justify-center">
      <RouterLink to="/jobs" class="bg-black text-white py-2 px-6 rounded-2xl"
        >Show all jobs</RouterLink
      >
    </div>
  </section>
</template>
