<template>
  <div class="px-4 py-10 text-center sm:px-6 lg:px-8">
    <h1 class="block text-7xl font-bold text-gray-800 dark:text-white sm:text-9xl">:(</h1>
    <h1 class="block text-2xl font-bold text-white"></h1>
    <p class="mt-3 text-gray-600 dark:text-gray-400">{{ title }}</p>
    <p class="text-gray-600 dark:text-gray-400">{{ subtitle }}</p>
  </div>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  }
})
</script>
