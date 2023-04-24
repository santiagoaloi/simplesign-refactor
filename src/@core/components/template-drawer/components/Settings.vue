<template>
  <VList>
    <VListItem v-for="(item, i) in settings" :key="i" :ripple="false" class="border-b pt-5">
      <template #title>
        <div>{{ item.title }}</div>
      </template>

      <template #subtitle>
        <div>{{ item.subtitle }}</div>
      </template>

      <template #append>
        <VSwitch inset />
      </template>
    </VListItem>
  </VList>
</template>

<script setup>
const settings = [
  { title: 'Convert to e-form', subtitle: 'settings' },
  { title: 'Activate credit safe services', subtitle: 'settings' },
  { title: 'Share template', subtitle: 'no' },
  { title: 'Import retargeting code', subtitle: 'Edit code settings' },
  { title: 'Activate BCC recipients', subtitle: 'Manage emails' },
  { title: 'Save a copy to Simple Storage', subtitle: 'Select folder' },
  { title: 'Template redirect URL', subtitle: 'off' }
]
</script>
