<script setup lang="ts">
import { ref } from 'vue'
import { useDropZone } from '@vueuse/core'

const filesData = ref([])
function onDrop(files) {
  filesData.value = []
  if (files) {
    filesData.value = files.map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified
    }))
  }
}
const dropZoneRef = ref()
const { isOverDropZone } = useDropZone(dropZoneRef, onDrop)
</script>

<template>
  <VCard class="pa-2 rounded-lg border" elevation="8" width="100%">
    <VCardTitle>Send a Document </VCardTitle>

    <VCardText>
      <VCard
        ref="dropZoneRef"
        class="border-dashed border-2 dark:border-white border-primary"
        color="drop-zone"
        height="350"
        width="100%"
      >
        <div
          v-if="!filesData.length"
          class="flex flex-column flex-wrap justify-center items-center h-full"
        >
          <div class="text-3xl text-secondary">Drop files here or click to upload</div>
          <div class="text-h4 text-secondary mt-4"><VIcon icon="$mdiTrayArrowDown" /></div>
        </div>
        <div class="flex h-full flex-wrap justify-center items-center">
          <div
            v-for="(file, index) in filesData"
            :key="index"
            class="w-200px bg-black-200/10 ma-2 pa-6"
          >
            <p>Name: {{ file.name }}</p>
            <p>Size: {{ file.size }}</p>
            <p>Type: {{ file.type }}</p>
            <p>Last modified: {{ file.lastModified }}</p>
          </div>
        </div>
      </VCard>
    </VCardText>
  </VCard>
</template>
