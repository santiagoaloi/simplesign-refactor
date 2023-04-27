<template>
  <div>
    <!-- 
    For the child routes to work, <router-view/> 
    in TemplateDrawer needs to be a child of App.vue <router-view/> 
    hence the positioning of the <TemplateDrawer/> component here.
   -->
    <TemplateDrawer />

    <VContainer>
      <VCard elevation="8" height="800" min-height="800" width="100%">
        <div class="border-b">
          <div class="pa-4 d-flex align-center justify-center gap-2">
            <Tiptap></Tiptap>

            <!-- <h3 class="neutral-color">New Document</h3>
            <div class="text-green-500 cursor-pointer">0.00 USD</div>
            <VSpacer />
            <VIcon icon="$mdiDotsVertical" /> -->
          </div>
        </div>

        <VCardText class="fill-height">
          <div id="editor" />

          <Draggable
            :list="store.droppedElements"
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
  </div>
</template>

<script setup>
import Draggable from 'vuedraggable'
import { VTextField } from 'vuetify/components/VTextField'
import { useTemplateStore } from './store/template'

const store = useTemplateStore()

const router = useRouter()
const route = useRoute()

// Map string names to actual Vuetfiy components.
const componentMap = {
  VTextField: VTextField
}

// Map the element.component string to the actual component.
function getComponent(componentName) {
  return componentMap[componentName]
}

// Return a set of prop bindings based on which element is dropped.
function getComponentBidings(element) {
  if (element.component === 'VTextField') {
    return {
      label: element.label
    }
  }
}

// Make sure to always have the first <TemplateDrawer/> tab
// Selected respecting the current route that defines the active tab.
onMounted(() => {
  if (route.name === 'Edit-Template') {
    router.push('/edit-template/recipients')
  }
})
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
