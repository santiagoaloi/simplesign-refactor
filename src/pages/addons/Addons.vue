<template>
  <VContainer class="h-100">
    <VCard class="h-100 pa-0 rounded-lg border" color="inner-card" elevation="8" width="100%">
      <VRow class="h-100" no-gutters>
        <VCol class="border-r dark:border-slate-700" cols="3">
          <AddonsNav />
        </VCol>
        <VCol class="h-100 overflow-auto">
          <AddonsList />
        </VCol>
      </VRow>
    </VCard>
  </VContainer>
</template>
