<template>
  <VContainer fluid>
    <VCard elevation="8" height="800" min-height="800" width="100%">
      <div class="border-b">
        <div class="pa-4 d-flex gap-2">
          <h3>New Document</h3>
          <div class="text-green-500 cursor-pointer">0.00 USD</div>
          <VSpacer />
          <VIcon icon="$mdiDotsVertical" />
        </div>
      </div>

      <VCardText class="fill-height">
        <Draggable
          :list="droppedElements"
          class="fill-height"
          ghost-class="ghost"
          group="components"
          handle=".drag-handle"
          item-key="id"
        >
          <template #item="{ element }">
            <div class="d-flex align-center">
              <VIcon class="mr-2 drag-handle drag" icon="$mdiDragVertical" />
              <Component
                :is="getComponent(element.component)"
                v-model="element.value"
                v-bind="{ ...getComponentBidings(element) }"
                class="drag"
              />
              <VIcon class="ml-2 cursor-pointer" icon="$mdiDotsVertical" size="small" />
            </div>
          </template>
        </Draggable>
      </VCardText>
    </VCard>
  </VContainer>
</template>

<script setup>
import Draggable from 'vuedraggable'
import { VTextField } from 'vuetify/components/VTextField'

const droppedElements = reactive([])

// Map string names to actual Vuetfiy components.
const componentMap = {
  VTextField: VTextField
}

// Map the element.component string to the actual component.
function getComponent(componentName) {
  return componentMap[componentName]
}

// Return a set of prop bindings based on which element is cloned,
function getComponentBidings(element) {
  if (element.component === 'VTextField') {
    return {
      label: element.label
    }
  }
}
</script>

<style>
.drag {
  cursor: grab;
}

.drag:active {
  cursor: grabbing;
}

.ghost {
  opacity: 0;
  pointer-events: none;
}
</style>
