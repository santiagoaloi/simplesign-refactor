<template>
  <VCard class="pa-2 rounded-lg border" elevation="8">
    <VCardTitle>Auto Renewal On </VCardTitle>

    <VList lines="two">
      <VListItem v-for="doc in docs" :key="doc.title" :subtitle="doc.subtitle" :title="doc.title">
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
    subtitle: 'Starbucks',
    date: 'Dec 10 2021',
    color: 'red'
  },
  {
    title: 'Offer',
    subtitle: 'Add Money',
    date: 'Dec 10 2021',
    color: 'green'
  },
  {
    title: 'Document',
    subtitle: 'Refund',
    date: 'Dec 10 2021',
    color: 'orange'
  }
]
</script>
