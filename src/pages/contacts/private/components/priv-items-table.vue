<template>
  <VDataTable :headers="headers" :items="items" :search="search" hover item-value="name">
    <template #item.name="{ item }">
      <div class="flex items-center">
        <VAvatar size="35">
          <VImg :src="item.raw.avatar">
            <template #placeholder>
              <div class="flex items-center justify-center h-full">
                <VProgressCircular color="grey-lighten-4" indeterminate></VProgressCircular>
              </div>
            </template>
          </VImg>
        </VAvatar>
        <div class="flex flex-col ml-2">
          <RouterLink to="/">
            <div class="text-secondary">{{ item.raw.name }}</div>
          </RouterLink>
          <small>{{ item.raw.email }}</small>
        </div>
      </div>
    </template>
  </VDataTable>
</template>
<script setup>
defineProps({
  search: {
    type: String,
    default: ''
  }
})
import { items, headers } from '../data/private-data'
</script>
