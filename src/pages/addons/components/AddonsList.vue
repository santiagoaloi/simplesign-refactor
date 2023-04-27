<template>
  <div class="flex h-100 flex-col">
    <div class="flex align-center gap-1 border-b pb-3">
      <VIcon class="mt-3 ml-5" icon="$mdiMagnify" size="18"></VIcon>
      <VTextField
        v-model="search"
        color="primary"
        density="compact"
        placeholder="Search Add-Ons"
        variant="plain"
      />
    </div>

    <div
      :class="{ 'justify-center': !filteredAddons.length }"
      class="no-scrollbar flex fill-height align-center flex-col overflow-auto"
    >
      <div class="addon-card-wrapper p-4">
        <AddonCard
          v-for="addon in filteredAddons"
          :key="addon.title"
          :body="addon.body"
          :title="addon.title"
        />
      </div>

      <NotFound
        v-if="!filteredAddons.length"
        subtitle="Try a different search query"
        title="No addons found matching your search"
      />
    </div>
  </div>
</template>
<script setup>
import { addons } from '../data/addons'

const search = useDebouncedRef()
const searchableFields = ['title', 'body']

const filteredAddons = computed(() => {
  return addons.filter((item) =>
    searchableFields
      .map((field) => item[field])
      .some((value) =>
        value
          .toString()
          .toLowerCase()
          .includes(search.value?.toLowerCase() ?? '')
      )
  )
})
</script>

<style scoped>
.addon-card-wrapper {
  @apply grid gap-4 lg:grid-cols-2
}
</style>
