<template>
  <div>
    <GSnackbar />
    <LeftDrawer />
    <TemplateDrawer />

    <GAppBar />
    <VMain scrollable>
      <RouterView v-slot="{ Component }">
        <template v-if="Component">
          <VFadeTransition hide-on-leave mode="out-in">
            <Component :is="Component" />
          </VFadeTransition>
        </template>
      </RouterView>
    </VMain>
  </div>
</template>
