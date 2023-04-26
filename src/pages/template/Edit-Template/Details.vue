<template>
  <div class="mt-3">
    <div class="my-2">
      <div class="pl-2">Visible document name</div>
      <VTextField placeholder="New Template" />
    </div>

    <div class="my-2">
      <div class="pl-2">User language</div>
      <VAutocomplete
        :items="['German', 'Swedish', 'Spanish', 'French']"
        placeholder="Please select"
      />
    </div>

    <VDivider class="my-3" />

    <div class="my-2">
      <div class="pl-2">Signing deadline in</div>
      <VTextField placeholder="-" suffix="days" />
    </div>

    <div class="my-2">
      <div class="pl-2">Signing reminder in</div>
      <VTextField placeholder="-" suffix="days" />
    </div>

    <VDivider class="my-3" />

    <div class="my-2">
      <div class="pl-2">Your imvitation message</div>
      <VTextarea placeholder="Write your message here" />
    </div>

    <div class="my-2">
      <div class="pl-2">Confirmation message</div>
      <VTextarea placeholder="Write your message here" />
    </div>

    <VDivider class="my-3" />

    <VList>
      <VListItem v-for="(item, i) in switches" :key="i" :ripple="false" class="border-b pt-5">
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
  </div>
</template>

<script setup>
const switches = [
  { title: 'Custom SMS invitation', subtitle: 'Edit message' },
  { title: 'Document Key', subtitle: 'Password' },
  { title: 'Save to specific folder', subtitle: 'Select folder' },
  { title: 'Forward', subtitle: 'Allow forward' },
  { title: 'Chat', subtitle: 'Allow chat' },
  { title: 'Document workflow', subtitle: 'Workflow' }
]
</script>
