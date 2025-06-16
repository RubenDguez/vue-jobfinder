<script setup>
import { RouterLink } from 'vue-router';
import Card from './Card.vue';
</script>

<template>
    <section class="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 md:px-20 py-10 shadow-md">
        <Card bg="bg-green-100">
            <h3 class="text-xl font-bold">For Developers</h3>
            <p>Browse our VUE jobs and start your career</p>
            <div class="flex justify-end">
                <RouterLink to="/jobs" class="text-white py-2 px-6 bg-black rounded-2xl">Browse Jobs</RouterLink>
            </div>
        </Card>
        <Card bg="bg-green-100">
            <h3 class="text-xl font-bold">For Employers</h3>
            <p>List your job and find the perfect developer for the role</p>
            <div class="flex justify-end">
                <RouterLink to="/add-job" class="text-white py-2 px-6 bg-green-600 rounded-2xl">Add Job</RouterLink>
            </div>
        </Card>
    </section>
</template>
