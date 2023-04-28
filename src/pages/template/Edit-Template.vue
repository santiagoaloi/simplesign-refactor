<template>
  <div class="h-100">
    <!-- 
    For the child routes to work, <router-view/> 
    in TemplateDrawer needs to be a child of App.vue <router-view/> 
    hence the positioning of the <TemplateDrawer/> component here.
    -->
    <TemplateDrawer />

    <VContainer class="flex h-100">
      <VCard elevation="8" height="100%" width="100%">
        <VCardText class="h-100">
          <div class="flex h-100 flex-col">
            <div class="flex gap-2 items-center">
              <h4 class="neutral-color">New Document</h4>
              <div class="text-green-500 cursor-pointer">0.00 USD</div>
              <VSpacer />
              <VBtn
                prepend-icon="$mdiTrashCanOutline"
                size="small"
                text="Whipe"
                @click="store.clearElements()"
              />
            </div>

            <VDivider class="mt-3 ml-n5 mr-n5" />

            <!-- This is where dropped draggable elements render -->
            <div class="no-scrollbar flex flex-col overflow-auto h-100 mt-4">
              <DraggableElementsDropzone />
            </div>
          </div>
        </VCardText>
      </VCard>
    </VContainer>
  </div>
</template>
<script setup>
const store = useTemplateDraggableStore()
</script>
