<script setup>
import { defineProps, ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import Card from './Card.vue'

const props = defineProps({
  job: Object,
})

const showFullDescription = ref(false)

const handleTruncatedText = () => {
  showFullDescription.value = !showFullDescription.value
}

const truncatedDescription = computed(() => {
  let description = props.job.description

  if (!showFullDescription.value) {
    return description.substring(0, 90) + '...'
  }

  return description
})
</script>

<template>
  <Card>
    <p class="text-sm">{{ job.type }}</p>
    <h3 class="text-2xl">{{ job.title }}</h3>

    <p>
      {{ truncatedDescription }}
      <span class="text-green-500">
        <button @click="handleTruncatedText()" style="cursor: pointer">
          {{ `${showFullDescription ? 'Less' : 'More'}` }}
        </button>
      </span>
    </p>

    <p class="text-xl font-bold text-green-500">{{ job.salary }} / year</p>

    <div class="text-amber-600 text-sm flex items-center gap-2">
      <i class="pi pi-map-marker" />
      <p>{{ job.location }}</p>
    </div>
    <RouterLink :to="`/job/${job.id}`" class="text-center py-2 px-6 bg-green-600 text-white rounded-2xl">Learn More</RouterLink>
  </Card>
</template>
