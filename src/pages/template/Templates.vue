<template>
  <VContainer class="fill-height">
    <VCard class="fill-height pa-0 rounded-lg border" color="inner-card" elevation="8" width="100%">
      <VRow class="fill-height" no-gutters>
        <VCol class="border-r dark:border-slate-700" cols="3">
          <VCardText class="px-7 pt-7">
            <VBtn block color="green-button" to="Edit-Template"> Add new template</VBtn>

            <div class="mt-7 d-flex gap-1 cursor-pointer">
              <VIcon icon="$mdiFileDocumentOutline" />
              <div>My Templates</div>
            </div>
            <div class="mt-4 d-flex gap-2 cursor-pointer">
              <VIcon icon="$mdiMagnify" />
              <div>Explore Templates</div>
            </div>

            <div class="mt-7 d-flex align-center">
              <div class="text-overline">filters</div>
              <VSpacer />

              <VTooltip
                location="top"
                offset="5"
                open-delay="100"
                text="Show Filters"
                transition="false"
              >
                <template #activator="{ props }">
                  <VIcon
                    class="cursor-pointer"
                    icon="$mdiPlus"
                    v-bind="props"
                    @click="showFilters = !showFilters"
                  />
                </template>
              </VTooltip>
            </div>

            <div v-if="showFilters" class="mt-2">
              <div>Show document types</div>
              <VAutocomplete
                :items="['Type 1', 'Type 2', 'Type 3', 'Type 4']"
                placeholder="Please select"
              ></VAutocomplete>
            </div>
          </VCardText>

          <VDivider v-if="showFilters"></VDivider>

          <VCardText v-if="showFilters" class="px-7">
            <div class="mt-2">
              <div>Show all categories</div>
              <VAutocomplete
                :items="['Category 1', 'Category 2', 'Category 3', 'Category 4']"
                placeholder="Please select"
              ></VAutocomplete>
            </div>

            <div class="mt-2">
              <div>Show all languages</div>
              <VAutocomplete
                :items="['German', 'Swedish', 'Spanish', 'French']"
                placeholder="Please select"
              ></VAutocomplete>
            </div>
          </VCardText>
        </VCol>
        <VCol class="fill-height">
          <div class="d-flex fill-height flex-column">
            <div class="d-flex align-center gap-1 border-b pb-3">
              <VIcon class="mt-3 ml-5" icon="$mdiMagnify" size="18"></VIcon>

              <VTextField
                v-model="search"
                density="compact"
                placeholder="Search Templates"
                variant="plain"
              />
            </div>

            <div class="no-scrollbar flex flex-col overflow-auto">
              <VDataTable
                :headers="headers"
                :items="items"
                :search="search"
                hover
                item-value="name"
              >
                <template #item.document="{ item }">
                  <div class="d-flex align-center">
                    <div class="d-flex flex-column ml-2">
                      <RouterLink to="/">
                        <div class="text-secondary">{{ item.raw.document }}</div>
                      </RouterLink>
                      <small>{{ item.raw.timeStamp }}</small>
                    </div>
                  </div>
                </template>

                <template #item.shared="{ item }">
                  <div class="d-flex align-center">
                    <div class="d-flex flex-column ml-2">
                      <div class="v-avatar-group">
                        <VTooltip
                          v-for="(_, i) in 3"
                          :key="i"
                          location="top"
                          offset="5"
                          open-delay="100"
                          text="John Snow"
                          transition="false"
                        >
                          <template #activator="{ props }">
                            <VAvatar v-bind="props" :size="44" class="cursor-pointer">
                              <VImg :src="`/avatars/avatar${i + 1}.jpg`">
                                <template #placeholder>
                                  <div class="d-flex align-center justify-center fill-height">
                                    <VProgressCircular color="grey-lighten-4" indeterminate />
                                  </div> </template
                              ></VImg>
                            </VAvatar>
                          </template>
                        </VTooltip>
                      </div>
                    </div>
                  </div>
                </template>

                <template #item.published="{ item }">
                  <VSwitch
                    v-model="item.raw.published"
                    :label="`${item.raw.published ? 'Published' : 'Draft'}`"
                    color="primary"
                    hide-details
                    inset
                  ></VSwitch>
                </template>
              </VDataTable>
            </div>
          </div>
        </VCol>
      </VRow>
    </VCard>
  </VContainer>
</template>
<script setup>
const search = useDebouncedRef()

const showFilters = ref(false)

const headers = [
  {
    title: 'Document',
    align: 'start',
    key: 'document',
    width: '320'
  },
  { title: 'Shared With', align: 'center', key: 'shared', width: '200' },
  { title: 'Document Type', align: 'start', key: 'type', width: '170' },
  { title: 'Status', align: 'start', key: 'published' }
]

const items = [
  {
    id: 1,
    shared: '',
    document: 'Search Engine Optimization Proposal',
    timeStamp: '2021 Dec 29 2:13PM',
    type: 'Other',
    published: true
  },
  {
    id: 2,
    shared: '',
    document: 'Freelance Contract',
    timeStamp: '2022 Dec 19 2:13PM',
    type: 'Other',
    published: true
  },
  {
    id: 3,
    shared: '',
    document: 'Studio Rental Agreement',
    timeStamp: '2023 Jan 12 11:33PM',
    type: 'Other',
    published: false
  },
  {
    id: 4,
    shared: '',
    document: 'Marketing Campaign Quote',
    timeStamp: '2023 Apr 2 8:33PM',
    type: 'Other',
    published: false
  },
  {
    id: 5,
    shared: '',
    document: 'Search Engine Optimization Proposal',
    timeStamp: '2021 Dec 29 2:13PM',
    type: 'Other',
    published: true
  },
  {
    id: 6,
    shared: '',
    document: 'Freelance Contract',
    timeStamp: '2022 Dec 19 2:13PM',
    type: 'Other',
    published: true
  },
  {
    id: 7,
    shared: '',
    document: 'Studio Rental Agreement',
    timeStamp: '2023 Jan 12 11:33PM',
    type: 'Other',
    published: false
  },
  {
    id: 8,
    shared: '',
    document: 'Marketing Campaign Quote',
    timeStamp: '2023 Apr 2 8:33PM',
    type: 'Other',
    published: false
  },
  {
    id: 9,
    shared: '',
    document: 'Freelance Contract',
    timeStamp: '2022 Dec 19 2:13PM',
    type: 'Other',
    published: true
  },
  {
    id: 10,
    shared: '',
    document: 'Studio Rental Agreement',
    timeStamp: '2023 Jan 12 11:33PM',
    type: 'Other',
    published: false
  },
  {
    id: 11,
    shared: '',
    document: 'Marketing Campaign Quote',
    timeStamp: '2023 Apr 2 8:33PM',
    type: 'Other',
    published: false
  }
]
</script>
