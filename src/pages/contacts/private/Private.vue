<template>
  <FlexContainerCard>
    <template #header>
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
    </template>

    <PrivItemsTable :search="search" />
  </FlexContainerCard>
</template>
<script setup>
const search = useDebouncedRef()
</script>
