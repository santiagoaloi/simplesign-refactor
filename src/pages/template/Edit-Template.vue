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
        <VCardText>
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
        </VCardText>
        <VDivider />

        <!-- This is where dropped draggable elements render -->
        <VCardText class="fill-height">
          <DraggableElementsDropzone />
        </VCardText>
      </VCard>
    </VContainer>
  </div>
</template>
<script setup>
const store = useTemplateDraggableStore()
</script>
