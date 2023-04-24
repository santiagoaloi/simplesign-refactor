<template>
  <VContainer>
    <VCard class="pa-2 rounded-lg border" elevation="8" width="100%">
      <VCardText>
        <div class="d-flex align-center gap-3">
          <VTextField
            v-model="search"
            color="primary"
            density="compact"
            height="20"
            hide-details
            placeholder="Search"
            prepend-inner-icon="$mdiMagnify"
          />
          <VSpacer />
          <VBtn class="text-white" color="#29c770"> Add Organization</VBtn>
        </div>
      </VCardText>
      <VDataTable :headers="headers" :items="items" :search="search" hover item-value="name">
        <template #item.name="{ item }">
          <div class="d-flex align-center">
            <VAvatar size="35">
              <VImg :src="item.raw.avatar">
                <template #placeholder>
                  <div class="d-flex align-center justify-center fill-height">
                    <VProgressCircular color="grey-lighten-4" indeterminate></VProgressCircular>
                  </div>
                </template>
              </VImg>
            </VAvatar>
            <div class="d-flex flex-column ml-2">
              <RouterLink to="/">
                <div class="text-primary">{{ item.raw.name }}</div>
              </RouterLink>
              <small>{{ item.raw.email }}</small>
            </div>
          </div>
        </template>
      </VDataTable>
    </VCard>
  </VContainer>
</template>
<script setup>
const search = useDebouncedRef()
const headers = [
  {
    title: 'Users',
    align: 'start',
    key: 'name'
  },
  { title: 'Organization', align: 'end', key: 'organization' },
  { title: 'Linked Document', align: 'end', key: 'linked' },
  { title: 'Added', align: 'end', key: 'added' }
]

const items = [
  {
    avatar: '/avatars/avatar1.jpg',
    name: 'Ivan Berg',
    email: 'm.berg@simplesign.com',
    organization: 'SimpleSign',
    linked: 3,
    added: '2022/02/22'
  },
  {
    avatar: '/avatars/avatar2.jpg',

    name: 'Johan keal',
    email: 'j.keal@simplesign.com',
    organization: 'SimpleSign',
    linked: 22,
    added: '2023/02/01'
  },
  {
    avatar: '/avatars/avatar3.jpg',
    name: 'Peter Morris',
    email: 'p.morris@simplesign.com',
    organization: 'SimpleSign',
    linked: 5,
    added: '2023/04/01'
  },
  {
    avatar: '/avatars/avatar4.jpg',
    name: 'Mark Noas',
    email: 'm.noas@simplesign.com',
    organization: 'SimpleSign',
    linked: 4,
    added: '2023/10/21'
  },
  {
    avatar: '/avatars/avatar5.jpg',
    name: 'Santiago Aloi',
    email: 's.aloi@simplesign.com',
    organization: 'SimpleSign',
    linked: 1,
    added: '2023/02/02'
  },
  {
    avatar: '/avatars/avatar6.jpg',
    name: 'Frank Lee',
    email: 'f.lee@simplesign.com',
    organization: 'SimpleSign',
    linked: 120,
    added: '2023/08/11'
  },
  {
    avatar: '/avatars/avatar7.jpg',
    name: 'Graham Axel',
    email: 'g.axel@simplesign.com',
    organization: 'SimpleSign',
    linked: 10,
    added: '2023/08/03'
  },
  {
    avatar: '/avatars/avatar8.jpg',
    name: 'Victora Trujillo',
    email: 'v.trujillo@simplesign.com',
    organization: 'SimpleSign',
    linked: 40,
    added: '2023/08/01'
  },
  {
    avatar: '/avatars/avatar9.jpg',
    name: 'Maria Berg',
    email: 'm.berg@simplesign.com',
    organization: 'SimpleSign',
    linked: 3,
    added: '2022/02/22'
  },
  {
    avatar: '/avatars/avatar10.jpg',
    name: 'Johan Johnsson',
    email: 'j.johnsson@simplesign.com',
    organization: 'SimpleSign',
    linked: 22,
    added: '2023/02/01'
  },
  {
    avatar: '/avatars/avatar11.jpg',
    name: 'Peter Morris',
    email: 'p.morris@simplesign.com',
    organization: 'SimpleSign',
    linked: 5,
    added: '2023/04/01'
  },
  {
    avatar: '/avatars/avatar12.jpg',
    name: 'Mark Noas',
    email: 'm.noas@simplesign.com',
    organization: 'SimpleSign',
    linked: 4,
    added: '2023/10/21'
  },
  {
    avatar: '/avatars/avatar13.jpg',
    name: 'Santiago Aloi',
    email: 's.aloi@simplesign.com',
    organization: 'SimpleSign',
    linked: 1,
    added: '2023/02/02'
  },
  {
    avatar: '/avatars/avatar14.jpg',
    name: 'Frank Lee',
    email: 'f.lee@simplesign.com',
    organization: 'SimpleSign',
    linked: 120,
    added: '2023/08/11'
  },
  {
    avatar: '/avatars/avatar15.jpg',
    name: 'Graham Axel',
    email: 'g.axel@simplesign.com',
    organization: 'SimpleSign',
    linked: 10,
    added: '2023/08/03'
  },
  {
    avatar: '/avatars/avatar16.jpg',
    name: 'Victora Trujillo',
    email: 'v.trujillo@simplesign.com',
    organization: 'SimpleSign',
    linked: 40,
    added: '2023/08/01'
  }
]
</script>
