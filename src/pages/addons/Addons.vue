<template>
  <VContainer class="fill-height">
    <VCard class="fill-height pa-0 rounded-lg border" color="inner-card" elevation="8" width="100%">
      <VRow class="fill-height" no-gutters>
        <VCol class="border-r dark:border-slate-700" cols="3">
          <AddonsNav />
        </VCol>
        <VCol class="fill-height overflow-auto">
          <AddonsList />
        </VCol>
      </VRow>
    </VCard>
  </VContainer>
</template>
