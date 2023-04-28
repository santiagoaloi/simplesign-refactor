<template>
  <VContainer class="h-100">
    <VCard class="h-100 pa-0 rounded-lg border" color="inner-card" elevation="8" width="100%">
      <VRow class="h-100" no-gutters>
        <VCol class="border-r dark:border-slate-700" cols="3">
          <VCardText class="px-7 pt-7">
            <VBtn block color="green-button" text="Add new template" to="Edit-Template" />

            <div class="mt-7 flex gap-1 cursor-pointer">
              <VIcon icon="$mdiFileDocumentOutline" />
              <div>My Templates</div>
            </div>
            <div class="mt-4 flex gap-2 cursor-pointer">
              <VIcon icon="$mdiMagnify" />
              <div>Explore Templates</div>
            </div>

            <div class="mt-7 flex items-center">
              <div class="text-overline neutral-color">filters</div>
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
        <VCol class="h-100">
          <div class="flex h-100 flex-col">
            <div class="flex items-center gap-1 border-b pb-3">
              <VIcon class="mt-3 ml-5" icon="$mdiMagnify" size="18" />

              <VTextField
                v-model="search"
                bg-color="transparent"
                density="compact"
                placeholder="Search Templates"
                variant="plain"
              />
            </div>

            <div class="no-scrollbar flex flex-col overflow-auto">
              <TemplateTable :search="search" />
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
</script>
