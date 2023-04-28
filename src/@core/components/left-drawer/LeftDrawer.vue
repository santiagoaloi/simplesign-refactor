<template>
  <VNavigationDrawer
    :rail="rail"
    color="drawer"
    elevation="7"
    expand-on-hover
    rail-width="64"
    width="260"
  >
    <VList class="pa-3 mt-2" nav>
      <div class="flex items-center mb-3 justify-between">
        <RouterLink to="/">
          <div class="flex">
            <VImg src="/company_logos/simplesign.svg" width="40" />

            <template v-if="!isDark">
              <VImg class="ml-4" src="/company_logos/simplesign-variant.svg" width="135">
                <template #placeholder>
                  <div class="flex items-center justify-center h-100">
                    <VProgressCircular color="grey-lighten-4" indeterminate />
                  </div>
                </template>
              </VImg>
            </template>

            <template v-if="isDark">
              <VImg class="ml-4" src="/company_logos/simplesign-variant-dark.png" width="135">
                <template #placeholder>
                  <div class="flex items-center justify-center h-100">
                    <VProgressCircular color="grey-lighten-4" indeterminate />
                  </div>
                </template>
              </VImg>
            </template>
          </div>
        </RouterLink>

        <div>
          <VIcon
            :icon="rail ? '$radioOff' : '$radioOn'"
            class="mt-n1 cursor-pointer"
            color="primary"
            size="small"
            @click="rail = !rail"
          />
        </div>
      </div>

      <VListItem
        :ripple="false"
        active-color="primary"
        prepend-icon="$mdiHomeOutline"
        title="Dashboard"
        to="/"
      />

      <VListGroup>
        <template #activator="{ props }">
          <VListItem :ripple="false" v-bind="props" title="Contacts">
            <template #prepend>
              <VIcon icon="$mdiAccountMultiple" />
            </template>
          </VListItem>
        </template>

        <VListItem
          v-for="([title, icon, to], i) in contacts"
          :key="i"
          :ripple="false"
          :title="title"
          :to="to"
          active-color="primary"
          @click="router.push(to)"
        >
          <template #prepend>
            <VIcon :icon="icon" size="x-small" />
          </template>
        </VListItem>
      </VListGroup>

      <VListItem
        :ripple="false"
        active-color="primary"
        prepend-icon="$mdiFileDocumentOutline"
        title="Templates"
        to="/templates"
      />

      <VListItem
        :ripple="false"
        active-color="primary"
        prepend-icon="$mdiPuzzleOutline"
        title="Add-Ons"
        to="/addons"
      />
    </VList>
  </VNavigationDrawer>
</template>

<script setup>
const rail = ref(false)
const router = useRouter()

const { isDark } = toRefs(useAppStore())

const contacts = [
  ['Private', '$mdiCircleOutline', '/contacts/Private'],
  ['Organizations', '$mdiCircleOutline', '/contacts/Organizations']
]
</script>

<style>
.v-list-group__items .v-list-item {
    -webkit-padding-start: 9px !important;
    padding-inline-start: 9px !important;
}

.v-list-item__overlay {
transition: opacity 0s!important ;
transition-duration: 0s!important; 
transition-delay: 0s!important; 
transition-property: unset!important; 
}
</style>
