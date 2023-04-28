<template>
  <div v-if="mdAndUp" class="flex items-center fixed right-0 mr-5">
    <div class="flex items-center cursor-pointer">
      <div class="flex text-white cursor-pointer mr-4 align-center">
        <VMenu activator="parent" offset="20 7" transition="fade-transition">
          <VList v-model="language" density="compact" nav return-object>
            <VListItem
              v-for="item in languages"
              :key="item.title"
              :subtitle="item.subtitle"
              :title="item.title"
              link
              @click="language = item"
            >
              <template #prepend>
                <VAvatar :image="item.flag" rounded="0" size="16" />
              </template>
            </VListItem>
          </VList>
        </VMenu>

        <VAvatar :image="language.flag" class="mr-2" rounded="0" size="16" /> {{ language.title }}
      </div>

      <GAppBarThemeSwitch class="mr-3" />

      <VMenu offset="12 6" transition="fade-transition">
        <VCard elevation="14" width="300">
          <VListItem title="Profile">
            <template #prepend>
              <VIcon icon="$mdiAccount" />
            </template>
          </VListItem>

          <VCard class="border-t flex flex-col rounded-0 items-center justify-center" height="120">
            <div class="d-flex fill-height align-center justify-center text-grey-lighten-1">
              Signature here
            </div>
          </VCard>
          <VCard class="border-b flex flex-col rounded-0 align-end justify-center" height="20">
            <small class="d-flex mr-3 justify-end">Change your signature</small>
          </VCard>

          <div class="border-b">
            <VListItem v-for="item in firstBlock" :key="item.title" :title="item.title">
              <template #prepend>
                <VIcon :icon="item.icon" />
              </template>
            </VListItem>
          </div>
          <div class="border-b">
            <VListItem v-for="item in SecondBlock" :key="item.title" :title="item.title">
              <template #prepend>
                <VIcon :icon="item.icon" />
              </template>

              <template #append>
                <small class="text-gray-400">{{ item.counter }}</small>
              </template>
            </VListItem>
          </div>
          <div>
            <VListItem title="Logout">
              <template #prepend>
                <VIcon icon="$mdiLocationExit" />
              </template>
            </VListItem>
          </div>
        </VCard>
        <template #activator="{ props }">
          <VBadge
            v-bind="props"
            :offset-x="6"
            :offset-y="3"
            bordered
            class="ml-3"
            color="green"
            dot
            location="bottom right"
          >
            <div class="flex justify-center align-end flex-col mr-3">
              <b>Christian N.</b>
              <small class="mt-1">c.nicolaisen@simplesign.com </small>
            </div>

            <VAvatar size="40">
              <VImg src="/avatars/christian.jpg">
                <template #placeholder>
                  <div class="flex items-center justify-center h-full">
                    <VProgressCircular color="grey-lighten-4" indeterminate />
                  </div>
                </template>
              </VImg>
            </VAvatar>
          </VBadge>
        </template>
      </VMenu>
    </div>
  </div>
  <VBtn v-else icon="$mdiMenu" size="small" />
</template>

<script setup>
const { mdAndUp } = useDisplay()

const language = ref({
  title: 'German',
  flag: '/flags/germany.gif'
})

const languages = [
  {
    title: 'German',
    flag: '/flags/germany.gif'
  },
  {
    title: 'French',
    flag: '/flags/france.gif'
  }
]

const firstBlock = [
  {
    title: 'User',
    icon: '$mdiAccount'
  },
  {
    title: 'Billing',
    icon: '$mdiCreditCard'
  }
]

const SecondBlock = [
  {
    title: 'Signature left',
    icon: '$mdiPen',
    counter: '20'
  },
  {
    title: 'SMS available',
    icon: '$mdiEmailOutline',
    counter: '10'
  }
]
</script>
