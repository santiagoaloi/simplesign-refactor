<template>
  <VContainer fluid>
    <DropZone />
    <VRow class="mt-3">
      <VCol sm="6">
        <ActivityWidget />
      </VCol>
      <VCol sm="6">
        <TasksWidget />
      </VCol>
      <VCol sm="6">
        <RenewalsWidget />
      </VCol>
      <VCol sm="6">
        <RenewalsWidget />
      </VCol>
      <VCol sm="4">
        <ForgottenWidget />
      </VCol>
      <VCol sm="4">
        <LastSignedWidget />
      </VCol>
      <VCol sm="4">
        <MostActiveWidget />
      </VCol>
      <VCol sm="4">
        <UnreadWidget />
      </VCol>
      <VCol sm="4">
        <ExpireWidget />
      </VCol>
      <VCol sm="4">
        <BouncedWidget />
      </VCol>
      <VCol sm="4">
        <TemplateWidget />
      </VCol>
      <VCol>
        <ContractWidget />
      </VCol>
    </VRow>
  </VContainer>
</template>
