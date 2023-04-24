<template>
  <div id="draggableElements">
    <div class="text-overline">Fields</div>
    <Draggable
      :clone="cloneElement"
      :group="{ name: 'components', pull: 'clone', put: false }"
      :list="droppableComponents"
      class="drag"
      item-key="id"
    >
      <template #item="{ element }">
        <VRow>
          <VCol sm="6">
            <VCard class="border" color="draggable-items" height="50">
              <div class="d-flex align-center justify-center fill-height">
                <VIcon class="mr-4" icon="$mdiDragVertical" />
                <VSpacer />

                <small> {{ element.name }}</small>
                <VSpacer />
                <VIcon class="mr-4" icon="$mdiFormatLetterCaseUpper" />
              </div>
            </VCard>
          </VCol>
        </VRow>
      </template>
    </Draggable>
  </div>
</template>
<script setup>
import { v4 as uuidv4 } from 'uuid'
import Draggable from 'vuedraggable'

const droppableComponents = [
  { name: 'Text Field', icon: '$mdiFormatLetterCaseUpper', component: 'VTextField' }
]

let elementCount = 0

// Brake the element reference by making a new one.
// Asigning a random id to keep unique elements (needed for re-ordering on drag)
function cloneElement(element) {
  elementCount += 1
  const cloned = structuredClone(element)

  cloned.value = `Hey there, I'm text field ${elementCount}`
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
