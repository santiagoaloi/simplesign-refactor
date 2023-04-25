<template>
  <VCard class="rounded-lg dark:border" elevation="5">
    <div class="d-flex fill-height">
      <div class="flex flex-col px-6 py-8 w-full">
        <div class="d-flex flex-column fill-height">
          <div class="text-h6 text-secondary">
            {{ title }}
          </div>

          <div class="d-flex fill-height">
            {{ body }}
          </div>
        </div>

        <div class="mt-8">
          <div v-if="!added">
            <VBtn color="primary" variant="plain"><VIcon icon="$mdiPlus" start /> Add</VBtn>
          </div>
        </div>
      </div>
      <div v-if="!mdAndDown" class="d-flex justify-end align-start pa-10">
        <VIcon color="primary" icon="$mdiCog" size="50" />
      </div>
    </div>
  </VCard>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  body: {
    type: String,
    default: ''
  },
  added: {
    type: Boolean,
    default: false
  }
})

const { mdAndDown } = useDisplay()
</script>

<style>
.limit-text-to-lines {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 5;
  -webkit-box-orient: vertical;
}
</style>
