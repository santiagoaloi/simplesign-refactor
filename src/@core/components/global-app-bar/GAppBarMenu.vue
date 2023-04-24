<template>
  <VFadeTransition hide-on-leave>
    <div v-if="!mobile" class="flex">
      <div class="text-white cursor-pointer mr-4">
        <VMenu activator="parent" offset="20 7" transition="fade-transition">
          <VList lines="two">
            <VListItem
              v-for="item in menu"
              :key="item.title"
              :subtitle="item.subtitle"
              :title="item.title"
            >
              <template #prepend>
                <VAvatar rounded>
                  <VIcon :icon="item.icon" />
                </VAvatar>
              </template>
            </VListItem>
          </VList>
        </VMenu>
        Send New
      </div>

      <div class="text-white cursor-pointer mr-4">Document</div>
      <div class="text-white cursor-pointer">Contract Control</div>
    </div>
  </VFadeTransition>
</template>

<script setup>
const { mobile } = useDisplay()

const menu = [
  {
    title: 'Select Template',
    subtitle: 'Fillout a template and send',
    icon: '$mdiFileDocumentOutline'
  },
  {
    title: 'Upload Document',
    subtitle: 'Upload Document',
    icon: '$mdiEmailOutline'
  },
  {
    title: 'Blank Page',
    subtitle: 'Create document and send',
    icon: '$mdiFileOutline'
  }
]
</script>

<style scoped>
.text-color {
  color: rgba(var(--v-app-typography)) !important;
}
</style>
