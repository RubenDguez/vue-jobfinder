<script setup>
import axios from 'axios'
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const state = reactive({
  job: Object,
  isLoading: true,
})

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:3001/jobs/${route.params.id}`)
    state.job = response.data
  } catch (error) {
    console.error('Error fetching job data:', error)
  } finally {
    state.isLoading = false
  }
})
</script>

<template>
  <section v-if="!state.isLoading" class="md:container mt-5 mx-auto px-4">
    <div class="flex flex-col md:flex-row gap-4">
      <div class="flex flex-col gap-3 shadow-xl w-full md:w-2/3 p-4 rounded">
        <h2 class="text-green-500 text-4xl font-bold">Job Description</h2>
        <p>{{ state.job.type }}</p>
        <h3 class="text-2xl">{{ state.job.title }}</h3>
        <p class="grow">{{ state.job.description }}</p>
        <p class="text-xl font-bold text-green-500">{{ state.job.salary }} / year</p>
        <div class="text-amber-600 text-sm flex items-center gap-2">
          <i class="pi pi-map-marker" />
          <p>{{ state.job.location }}</p>
        </div>
      </div>
      <div class="flex flex-col gap-3 shadow-xl w-full md:w-1/3 p-4 rounded">
        <h2 class="text-green-500 text-4xl font-bold">Company</h2>
        <h3 class="text-2xl">{{ state.job.company.name }}</h3>
        <img
          v-if="state.job.company.logo !== ''"
          :src="state.job.company.logo"
          alt="logo"
        />
        <p class="grow">{{ state.job.company.description }}</p>
        <a :href="state.job.company.website" class="text-amber-600">{{
          state.job.company.website
        }}</a>
        <hr class="my-2" style="color: lightgray" />

        <RouterLink
          :to="`/job/update/${route.params.id}`"
          class="bg-amber-400 rounded-2xl py-1 text-center text-white shadow"
          >Edit</RouterLink
        >
        <RouterLink
          :to="`/job/delete/${route.params.id}`"
          class="bg-red-400 rounded-2xl py-1 text-center text-white shadow"
          >Delete</RouterLink
        >
      </div>
    </div>
  </section>
</template>
