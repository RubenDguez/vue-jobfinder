<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const props = defineProps({
  isUpdate: {
    type: Boolean,
    default: false,
  },
})

const type = ref('')
const title = ref('')
const description = ref('')
const salary = ref('')
const location = ref('')
const companyName = ref('')
const companyLogo = ref('')
const companyWebsite = ref('')
const companyDescription = ref('')

const getData = () => {
  return {
    type: type.value,
    title: title.value,
    description: description.value,
    salary: salary.value,
    location: location.value,
    company: {
      name: companyName.value,
      logo: companyLogo.value,
      website: companyWebsite.value,
      description: companyDescription.value,
    },
  }
}

const handleCreate = async () => {
  try {
    await axios.post('http://localhost:3001/jobs', getData())
    router.push('/jobs');
  } catch (error) {
    console.error('Error submitting job:', error)
  }
}

const handleUpdate = async () => {
  try {
    await axios.put(`http://localhost:3001/jobs/${route.params.id}`, getData())
    router.push(`/job/${route.params.id}`);
  } catch (error) {
    console.error('Error submitting job:', error)
  }
}

const handleSubmit = async () => {
  if (!props.isUpdate) return handleCreate()
  return handleUpdate()
}

onMounted(async () => {
  if (props.isUpdate) {
    try {
      const response = await axios.get(`http://localhost:3001/jobs/${route.params.id}`)
      type.value = response.data.type
      title.value = response.data.title
      description.value = response.data.description
      salary.value = response.data.salary
      location.value = response.data.location
      companyName.value = response.data.company.name
      companyLogo.value = response.data.company.logo
      companyWebsite.value = response.data.company.website
      companyDescription.value = response.data.company.description
    } catch (error) {
      console.error('Error fetching job data:', error)
    }
  }
})
</script>

<template>
  <section class="flex flex-col justify-center items-center">
    <form
      @submit.prevent="handleSubmit()"
      class="container max-w-2xl mx-auto flex flex-col gap-4 mt-5 p-10 shadow-lg rounded-xl"
    >
      <h3 class="text-green-500 font-bold text-2xl text-left">Add Job</h3>
      <div class="flex flex-col gap-2 shadow p-3">
        <h4 class="text-green-500 font-bold text-2xl text-left">General Information</h4>
        <div class="flex flex-col gap-1">
          <label for="type" class="text-green-500 text-xs">* Type</label>
          <select
            v-model="type"
            :value="type"
            required
            name="type"
            id="type"
            class="border border-green-400 rounded px-4 py-1 bg-gray-50 text-green-500"
          >
            <option value="">select one</option>
            <option value="Full-Time">Full Time</option>
            <option value="Part-Time">Part Time</option>
            <option value="Contract-To-Hire">Contract To Hire</option>
            <option value="Remote">Remote</option>
          </select>
        </div>
        <div class="flex flex-col gap-1">
          <label for="title" class="text-green-500 text-xs">* Title</label>
          <input
            v-model="title"
            required
            :disabled="props.isUpdate"
            type="text"
            name="title"
            id="title"
            class="border border-green-400 rounded px-4 py-1 bg-gray-50 text-green-500"
          />
        </div>
        <div class="flex flex-col gap-1">
          <label for="description" class="text-green-500 text-xs">* Description</label>
          <textarea
            v-model="description"
            required
            rows="5"
            name="description"
            id="description"
            class="border border-green-400 rounded px-4 py-1 bg-gray-50 text-green-500"
            style="resize: none"
          />
        </div>
        <div class="flex flex-col gap-1">
          <label for="salary" class="text-green-500 text-xs">* Salary</label>
          <input
            v-model="salary"
            required
            type="text"
            name="salary"
            id="salary"
            placeholder="$85,000 - $125,000"
            class="border border-green-400 rounded px-4 py-1 bg-gray-50 text-green-500"
          />
          <p class="text-xs text-orange-500">
            Do not include <span class="font-bold">'payment cadence'</span> we assume they are all
            in years
          </p>
        </div>
        <div class="flex flex-col gap-1">
          <label for="location" class="text-green-500 text-xs">* Location</label>
          <input
            v-model="location"
            required
            type="text"
            name="location"
            id="location"
            class="border border-green-400 rounded px-4 py-1 bg-gray-50 text-green-500"
          />
        </div>
      </div>

      <div class="flex flex-col gap-2 shadow p-3">
        <h4 class="text-green-500 font-bold text-2xl text-left">Company Information</h4>
        <div class="flex flex-col gap-1">
          <label for="companyName" class="text-green-500 text-xs">* Name</label>
          <input
            v-model="companyName"
            required
            :disabled="props.isUpdate"
            type="text"
            name="companyName"
            id="companyName"
            class="border border-green-400 rounded px-4 py-1 bg-gray-50 text-green-500"
          />
        </div>
        <div class="flex flex-col gap-1">
          <label for="companyLogo" class="text-green-500 text-xs">Logo URL</label>
          <input
            :disabled="props.isUpdate"
            v-model="companyLogo"
            type="text"
            name="companyLogo"
            id="companyLogo"
            class="border border-green-400 rounded px-4 py-1 bg-gray-50 text-green-500"
          />
        </div>
        <div class="flex flex-col gap-1">
          <label for="companyWebsite" class="text-green-500 text-xs">* Website</label>
          <input
            v-model="companyWebsite"
            :disabled="props.isUpdate"
            required
            type="text"
            name="companyWebsite"
            id="companyWebsite"
            class="border border-green-400 rounded px-4 py-1 bg-gray-50 text-green-500"
          />
        </div>
        <div class="flex flex-col gap-1">
          <label for="companyDescription" class="text-green-500 text-xs"
            >* Company Description</label
          >
          <textarea
            v-model="companyDescription"
            required
            :disabled="props.isUpdate"
            rows="5"
            name="companyDescription"
            id="companyDescription"
            class="border border-green-400 rounded px-4 py-1 bg-gray-50 text-green-500"
            style="resize: none"
          />
        </div>
      </div>
      <hr class="my-2" style="color: lightgray" />

      <button
        type="submit"
        :class="`text-white py-2 px-6 ${props.isUpdate ? 'bg-amber-500' : 'bg-green-800'} rounded-2xl`"
        style="cursor: pointer"
      >
        {{ props.isUpdate ? 'Update' : 'Submit' }}
      </button>
    </form>
  </section>
</template>
