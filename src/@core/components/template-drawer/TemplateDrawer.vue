<template>
  <div>
    <VNavigationDrawer color="drawer" location="right" order="1" width="390">
      <template #prepend>
        <div class="pt-3 px-3">
          <VBtn block class="mb-4" color="green-button"> Save Changes</VBtn>

          <VTabs v-model="activeTab" class="border-b" color="primary" density="compact" grow>
            <VTooltip
              v-for="(tabElement, i) in elements"
              v-bind="{ ...tooltipDefaults }"
              :key="i"
              :text="tabElement.tooltip"
            >
              <template #activator="{ props }">
                <VTab :to="tabElement.to" v-bind="props">
                  <VIcon :icon="tabElement.icon" />
                </VTab>
              </template>
            </VTooltip>
          </VTabs>
        </div>
      </template>

      <!-- Child routes from Edit-Template will render here -->
      <div class="pt-3 px-3">
        <RouterView v-slot="{ Component }">
          <template v-if="Component">
            <VFadeTransition hide-on-leave>
              <Component :is="Component" />
            </VFadeTransition>
          </template>
        </RouterView>
      </div>
    </VNavigationDrawer>
  </div>
</template>

<script setup>
const tooltipDefaults = {
  location: 'top',
  offset: '5',
  openDelay: '100',
  transition: 'false'
}

// Components loaded in tabs. (order matters).
const elements = [
  { to: '/edit-template/recipients', icon: '$mdiAccountMultiple', tooltip: 'Recipients' },
  { to: '/edit-template/details', icon: '$mdiServer', tooltip: 'Details' },
  { to: '/edit-template/draggableelements', icon: '$mdiPlusCircleOutline', tooltip: 'Content' },
  { to: '/edit-template/settings', icon: '$mdiCog', tooltip: 'Settings' }
]

const activeTab = ref(0)
</script>
