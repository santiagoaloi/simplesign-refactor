<template>
  <Draggable
    :class="{ 'dropzone--hover': store.isDragging }"
    :list="store.droppedElements"
    class="h-100 overflow-auto no-scrollbar"
    ghost-class="ghost"
    group="components"
    handle=".drag-handle"
    item-key="id"
  >
    <template #item="{ element }">
      <div>
        <div class="flex justify-end">
          <VIcon class="mr-2 drag-handle drag" icon="$mdiDragHorizontal" />

          <VMenu offset="15 220" transition="fade-transition">
            <template #activator="{ props }">
              <VIcon
                v-bind="props"
                class="ml-2 cursor-pointer"
                icon=" $mdiDotsVertical"
                size="small"
              />
            </template>

            <VCard class="mx-auto" width="240">
              <VList nav>
                <VListItem
                  v-for="item in menu"
                  :key="item.title"
                  :ripple="false"
                  :title="item.title"
                  @click="item.action(element)"
                >
                  <template #prepend>
                    <VAvatar rounded>
                      <VIcon :icon="item.icon" />
                    </VAvatar>
                  </template>
                </VListItem>
              </VList>
            </VCard>
          </VMenu>
        </div>
        <Component
          :is="getComponent(element.component)"
          v-model="element.value"
          v-bind="{ ...getComponentBidings(element) }"
          class="my-2"
        />
      </div>
    </template>
  </Draggable>
</template>
<script setup>
import Draggable from 'vuedraggable'
import { VTextField } from 'vuetify/components/VTextField'
import ContentBox from '@/@core/components/content-box/ContentBox.vue'

const store = useTemplateDraggableStore()

const menu = [
  {
    title: 'Duplicate',
    icon: '$mdiContentDuplicate',
    action(element) {
      store.duplicateElement(element)
    }
  },
  {
    title: 'Delete',
    icon: '$mdiTrashCanOutline',
    action(element) {
      store.deleteElement(element.id)
    }
  }
]

// Map string names to actual Vuetfiy components.
const componentMap = {
  VTextField: VTextField,
  ContentBox: ContentBox
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

const router = useRouter()
const route = useRoute()

// Make sure to always have the first <TemplateDrawer/> tab
// Selected respecting the current route that defines the active tab.
onMounted(() => {
  if (route.name === 'Edit-Template') {
    // using replace, makes sure you can't go back to Edit-Template route.
    router.replace('/edit-template/recipients')
  }
})
</script>

<style>
.dropzone--hover {
 outline: dashed 1px #ccc
}

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
