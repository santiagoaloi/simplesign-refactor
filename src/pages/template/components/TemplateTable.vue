<template>
  <VDataTable :headers="headers" :items="items" :search="search" hover item-value="name">
    <template #item.document="{ item }">
      <div class="flex items-center">
        <div class="flex flex-col ml-2">
          <RouterLink to="/">
            <div class="text-secondary">{{ item.raw.document }}</div>
          </RouterLink>
          <small>{{ item.raw.timeStamp }}</small>
        </div>
      </div>
    </template>

    <template #item.shared="{ item }">
      <div class="flex items-center">
        <div class="flex flex-col ml-2">
          <div class="v-avatar-group">
            <VTooltip
              v-for="(_, i) in 3"
              :key="i"
              location="top"
              offset="5"
              open-delay="100"
              text="John Snow"
              transition="false"
            >
              <template #activator="{ props }">
                <VAvatar v-bind="props" :size="44" class="cursor-pointer">
                  <VImg :src="`/avatars/avatar${i + 1}.jpg`">
                    <template #placeholder>
                      <div class="flex items-center justify-center h-full">
                        <VProgressCircular color="grey-lighten-4" indeterminate />
                      </div> </template
                  ></VImg>
                </VAvatar>
              </template>
            </VTooltip>
          </div>
        </div>
      </div>
    </template>

    <template #item.published="{ item }">
      <VSwitch
        v-model="item.raw.published"
        :label="`${item.raw.published ? 'Published' : 'Draft'}`"
        color="primary"
        hide-details
        inset
      ></VSwitch>
    </template>
  </VDataTable>
</template>
<script setup>
import { headers, items } from '../data/table-data'

defineProps({
  search: {
    type: String,
    default: ''
  }
})
</script>
