<template>
  <VAppBar
    :color="isContentBoxFocused ? 'background' : 'appbar-background'"
    class="px-6"
    elevation="15"
    height="62"
  >
    <!-- Content Box (tip-tap) menu is teleported here-->
    <div id="editor-appbar" />

    <template v-if="!isContentBoxFocused">
      <VSpacer />
      <GAppBarMenu />
      <VSpacer />
      <GAppBarMenuRight />
    </template>
  </VAppBar>
</template>

<script setup>
const { isContentBoxFocused } = toRefs(useTemplateDraggableStore())
</script>
