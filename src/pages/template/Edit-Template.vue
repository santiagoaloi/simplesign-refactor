<template>
  <div class="fill-height">
    <!-- 
    For the child routes to work, <router-view/> 
    in TemplateDrawer needs to be a child of App.vue <router-view/> 
    hence the positioning of the <TemplateDrawer/> component here.
    -->
    <TemplateDrawer />

    <VContainer class="d-flex fill-height">
      <VCard elevation="8" height="100%" width="100%">
        <VCardText class="fill-height">
          <div class="d-flex fill-height flex-column">
            <div class="d-flex gap-2 align-center">
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
            <div class="no-scrollbar flex flex-col overflow-auto fill-height mt-4">
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
