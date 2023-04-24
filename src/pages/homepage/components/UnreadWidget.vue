<template>
  <VCard class="pa-2 rounded-lg border" elevation="8">
    <VCardTitle>Unread Chat Messages </VCardTitle>

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
    title: 'John Doe',
    date: '3',
    color: 'blue'
  },
  {
    title: 'Louisa Norton',
    date: '2',
    color: 'blue'
  },
  {
    title: 'Helena Payne',
    date: '10',
    color: 'blue'
  }
]
</script>
