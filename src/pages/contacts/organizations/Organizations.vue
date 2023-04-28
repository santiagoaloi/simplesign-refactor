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
      <VBtn color="green-button" text="Add Organization" />
    </template>

    <OrgItemsTable :search="search" />
  </FlexContainerCard>
</template>
<script setup>
const search = useDebouncedRef()
</script>
