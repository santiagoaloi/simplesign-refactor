<template>
  <VBtn
    :class="{ 'text-primary': isActive ? isActive() : null }"
    :title="title"
    class="rounded-0"
    size="33"
    @click="action"
  >
    <VIcon :icon="icon" />
  </VBtn>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },

  title: {
    type: String,
    required: true
  },

  action: {
    type: Function,
    required: true
  },

  isActive: {
    type: Function,
    default: null
  }
})
</script>
