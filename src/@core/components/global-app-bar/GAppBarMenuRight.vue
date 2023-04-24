<template>
  <div v-if="mdAndUp" class="d-flex align-center fixed right-0 mr-5">
    <GAppBarThemeSwitch class="mr-3" />

    <div class="d-flex align-center cursor-pointer">
      <VMenu activator="parent" offset="12 6" transition="fade-transition">
        <VCard elevation="14" width="300">
          <VListItem title="Profile">
            <template #prepend>
              <VIcon icon="$mdiAccount" />
            </template>
          </VListItem>

          <VCard
            class="border-t d-flex flex-column rounded-0 align-center justify-center"
            height="120"
          >
            <span class="text-grey-lighten-1">Signature here</span>
          </VCard>
          <VCard class="border-b d-flex flex-column rounded-0 align-end justify-center" height="20">
            <small class="mr-3 mb-2">Change your signature</small>
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
          <div c>
            <VListItem title="Logout">
              <template #prepend>
                <VIcon icon="$mdiLocationExit" />
              </template>
            </VListItem>
          </div>
        </VCard>
      </VMenu>

      <div class="d-flex justify-center align-end flex-column mr-0">
        <b>Christian N.</b>
        <small class="mt-n1">c.nicolaisen@simplesign.com </small>
      </div>
      <VBadge
        :offset-x="6"
        :offset-y="3"
        bordered
        class="ml-3"
        color="green"
        dot
        location="bottom right"
      >
        <VAvatar size="40">
          <VImg src="/avatars/christian.jpg">
            <template #placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <VProgressCircular color="grey-lighten-4" indeterminate />
              </div>
            </template>
          </VImg>
        </VAvatar>
      </VBadge>
    </div>
  </div>
  <VBtn v-else icon size="small">
    <VIcon icon="$mdiMenu" />
  </VBtn>
</template>

<script setup>
const { mdAndUp } = useDisplay()

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
