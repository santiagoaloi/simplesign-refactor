<template>
  <VCard class="rounded-lg dark:border" elevation="5">
    <div class="flex h-full">
      <div class="flex flex-col px-6 py-8 w-full">
        <div class="flex flex-col h-full">
          <div class="text-h6 text-secondary">
            {{ title }}
          </div>

          <div class="flex h-full">
            {{ body }}
          </div>
        </div>

        <div class="mt-8">
          <div v-if="!added">
            <VBtn color="primary" variant="plain"> Add <VIcon end icon="$mdiPlus" /> </VBtn>
          </div>
        </div>
      </div>
      <div v-if="!mdAndDown" class="flex justify-end items-start pa-10">
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
