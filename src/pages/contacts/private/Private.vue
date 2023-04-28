<template>
  <VContainer>
    <VCard class="pa-2 rounded-lg border" elevation="8" width="100%">
      <VCardText>
        <div class="flex items-center gap-3">
          <VTextField
            v-model="search"
            color="primary"
            density="compact"
            height="20"
            hide-details
            placeholder="Search"
            prepend-inner-icon="$mdiMagnify"
          />
          <VSpacer />
          <VBtn
            v-for="btn in ['Bulk Upload', 'Add Contact']"
            :key="btn"
            :text="btn"
            color="green-button"
          />
        </div>
        <PrivItemsTable :search="search" />
      </VCardText>
    </VCard>
  </VContainer>
</template>
<script setup>
const search = useDebouncedRef()
</script>
