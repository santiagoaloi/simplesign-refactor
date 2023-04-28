<template>
  <VList>
    <VListItem
      v-for="(item, i) in recipients"
      :key="i"
      :ripple="false"
      class="border-b pt-5"
      @click="() => {}"
    >
      <template #prepend>
        <VAvatar :color="colors[i]" class="mt-n12" size="small">
          <small>{{ item.name[0] }} {{ item.lastName[0] }}</small>
        </VAvatar>
      </template>

      <template #title>
        <div>{{ item.name }} {{ item.lastName }}</div>
      </template>

      <template #subtitle>
        <div class="flex flex-col">
          <div>{{ item.subtitle }}</div>
          <div class="my-3">
            <VAvatar class="mr-4" color="grey-lighten-2" size="20">
              <small> {{ i + 1 }} </small>
            </VAvatar>

            <VIcon class="mr-4" icon="$mdiEmailOutline" />
            <VIcon icon="$mdiDraw" />
          </div>
        </div>
      </template>

      <template #append>
        <VIcon icon="$mdiChevronRight"></VIcon>
      </template>
    </VListItem>
  </VList>
</template>

<script setup>
const colors = ['red-lighten-4', 'blue-lighten-4', 'green-lighten-4']
const recipients = [
  { name: 'Katherine', lastName: 'Kennedi', subtitle: 'Recipient 1', to: '' },
  { name: 'Peter', lastName: 'Bandel', subtitle: 'Recipient 2', to: '' },
  { name: 'Oscar', lastName: 'Ball', subtitle: 'Recipient 3', to: '' }
]
</script>
