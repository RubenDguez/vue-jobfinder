<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav
    class="bg-green-600 py-6 px-6 flex gap-3 flex-col items-center md:flex-row md:justify-between shadow-md"
  >
    <a href="#">
      <h1 class="text-white text-3xl">Vue Jobs</h1>
    </a>

    <div class="flex gap-2">
      <RouterLink to="/" class="text-white py-2 px-6 bg-green-800 rounded-2xl">Home</RouterLink>
      <RouterLink to="/jobs" class="text-white py-2 px-6 bg-green-800 rounded-2xl">Jobs</RouterLink>
      <RouterLink to="/add-job" class="text-white py-2 px-6 bg-green-800 rounded-2xl"
        >Add Job</RouterLink
      >
    </div>
  </nav>
</template>
