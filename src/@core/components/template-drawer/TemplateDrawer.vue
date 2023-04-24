<template>
  <div>
    <VNavigationDrawer v-if="isEditTemplate" color="drawer" location="right" order="1" width="390">
      <template #prepend>
        <div class="pt-3 px-3">
          <VBtn block class="text-white mb-4" color="#29c770"> Save Changes</VBtn>

          <VTabs v-model="tabs" class="border-b" color="primary" density="compact" grow>
            <VTooltip
              location="top"
              offset="5"
              open-delay="100"
              text="Recipients"
              transition="false"
            >
              <template #activator="{ props }">
                <VTab :value="1" v-bind="props">
                  <VIcon icon="$mdiAccountMultiple" />
                </VTab>
              </template>
            </VTooltip>

            <VTooltip location="top" offset="5" open-delay="100" text="Details" transition="false">
              <template #activator="{ props }">
                <VTab :value="2" v-bind="props">
                  <VIcon icon="$mdiServer" />
                </VTab>
              </template>
            </VTooltip>

            <VTooltip location="top" offset="5" open-delay="100" text="Content" transition="false">
              <template #activator="{ props }">
                <VTab :value="3" v-bind="props">
                  <VIcon icon="$mdiPlusCircleOutline" />
                </VTab>
              </template>
            </VTooltip>

            <VTooltip location="top" offset="5" open-delay="100" text="Settings" transition="false">
              <template #activator="{ props }">
                <VTab :value="4" v-bind="props"> <VIcon icon="$mdiCog" /> </VTab>
              </template>
            </VTooltip>
          </VTabs>
        </div>
      </template>

      <VWindow v-model="tabs">
        <VWindowItem v-for="(tabElement, i) in elements" :key="i" :value="i + 1">
          <div class="px-3">
            <Component :is="tabElement" />
          </div>
        </VWindowItem>
      </VWindow>
    </VNavigationDrawer>
  </div>
</template>

<script setup>
import DraggableElements from './components/DraggableElements.vue'
import Recipients from './components/Recipients.vue'
import Details from './components/Details.vue'
import Settings from './components/Settings.vue'
const route = useRoute()
const isEditTemplate = computed(() => {
  return route.name === 'Edit-Template'
})

const tabs = ref(1)
const elements = [Recipients, Details, DraggableElements, Settings]
</script>
