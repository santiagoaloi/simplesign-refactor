<template>
  <div>
    <div class="text-overline">Draggable Elements</div>
    <Draggable
      :clone="cloneElement"
      :group="{ name: 'components', pull: 'clone', put: false }"
      :list="droppableComponents"
      class="drag flex gap-4"
      item-key="id"
      @end="store.isDragging = false"
      @start="store.isDragging = true"
    >
      <template #item="{ element }">
        <div class="flex flex-grow-1">
          <VCard class="border" color="draggable-items" height="50" width="100%">
            <div class="flex items-center justify-center h-100">
              <VIcon class="mr-4" icon="$mdiDragVertical" />
              <VSpacer />

              <small> {{ element.name }}</small>
              <VSpacer />
              <VIcon :icon="element.icon" class="mr-4" />
            </div>
          </VCard>
        </div>
      </template>
    </Draggable>
  </div>
</template>
<script setup>
import { v4 as uuidv4 } from 'uuid'
import Draggable from 'vuedraggable'

const droppableComponents = [
  { name: 'Text Field', icon: '$mdiFormatLetterCaseUpper', component: 'VTextField' },
  { name: 'Content Box', icon: '$mdiFormatTextbox', component: 'ContentBox' }
]

const store = useTemplateDraggableStore()

let elementCount = 0

// Brake the element reference by making a new one.
// Asigning a random id to keep unique elements (needed for re-ordering on drag)
function cloneElement(element) {
  elementCount += 1
  const cloned = structuredClone(element)

  cloned.value = `Hey there, I'm element #${elementCount}`
  cloned.label = `Field label  ${elementCount}`

  cloned.id = uuidv4()
  return cloned
}
</script>

<style scoped>
.drag {
    cursor: grab;
}

.drag:active {
  cursor: grabbing;
}
</style>
