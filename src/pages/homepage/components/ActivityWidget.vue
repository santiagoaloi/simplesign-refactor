<template>
  <VCard class="pa-2 rounded-lg border" elevation="8">
    <VCardTitle>Latest Activity </VCardTitle>

    <VCardText>
      <VTimeline density="compact" side="end" truncate-line="both">
        <VTimelineItem
          v-for="doc in docs"
          :key="doc.title"
          :dot-color="doc.signed ? 'blue' : 'orange'"
          class="mb-4"
          size="x-small"
          width="100%"
        >
          <VListItem :subtitle="doc.subtitle" :title="doc.title">
            <template #append>
              <VChip :color="doc.signed ? 'blue' : 'orange'" class="ml-3" size="small">{{
                doc.signed ? 'Signed' : 'Delivered'
              }}</VChip></template
            >
          </VListItem>
        </VTimelineItem>
      </VTimeline>
    </VCardText>
  </VCard>
</template>

<script setup>
const docs = [
  {
    title: 'Document Sent 25 days ago by John Doe',
    subtitle: 'Signed by Helena Payne 25 days ago',
    signed: true
  },
  {
    title: 'Data Processing Agreement Sent about a month ago by Louisa Norton',
    subtitle: 'Signed by Helena Payne 25 days ago',
    signed: false
  },
  {
    title: 'Document Sent 25 days ago by John Doe',
    subtitle: 'Signed by Helena Payne 25 days ago',
    signed: true
  },
  {
    title: 'Online Store',
    subtitle: 'Email delivered to Helena Payne about a month ago',
    signed: false
  },
  {
    title: 'Data Processing Agreement Sent about a month ago by Louisa Norton',
    subtitle: 'Signed by Helena Payne 25 days ago',
    signed: false
  }
]
</script>
