<template>
  <VContainer class="h-full">
    <VCard class="h-full pa-0 rounded-lg border" color="inner-card" elevation="8" width="100%">
      <VRow class="h-full" no-gutters>
        <VCol class="border-r dark:border-slate-700" cols="3">
          <AddonsNav />
        </VCol>
        <VCol class="h-full overflow-auto">
          <AddonsList />
        </VCol>
      </VRow>
    </VCard>
  </VContainer>
</template>
