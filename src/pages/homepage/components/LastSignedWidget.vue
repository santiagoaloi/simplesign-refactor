<template>
  <VCard class="pa-2 rounded-lg border" elevation="8">
    <VCardTitle>Last Signed Documents </VCardTitle>

    <VList lines="two">
      <VListItem v-for="doc in docs" :key="doc.title" :title="doc.title">
        <template #prepend>
          <VAvatar :color="`${doc.color}-lighten-5`" rounded>
            <VIcon :color="`${doc.color}-lighten-2`" icon="$mdiGithub" />
          </VAvatar>
        </template>

        <template #append>
          <small class="text-gray-400">{{ doc.date }}</small>
        </template>
      </VListItem>
    </VList>
  </VCard>
</template>

<script setup>
const docs = [
  {
    title: 'Rental Aggrement',
    date: '3 months ago',
    color: 'indigo'
  },
  {
    title: 'Offer',
    date: '2 days ago',
    color: 'indigo'
  },
  {
    title: 'Document',
    date: '10 months ago',
    color: 'indigo'
  }
]
</script>
