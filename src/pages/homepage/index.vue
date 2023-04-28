<template>
  <VContainer>
    <DropZone />
    <VRow class="mt-3">
      <template v-for="widget in widgets" :key="widget.id">
        <VCol :sm="widget.columns">
          <Component :is="widget.component" />
        </VCol>
      </template>
    </VRow>
  </VContainer>
</template>

<script setup>
import TasksWidget from './components/TasksWidget.vue'
import UnreadWidget from './components/UnreadWidget.vue'
import ExpireWidget from './components/ExpireWidget.vue'
import BouncedWidget from './components/BouncedWidget.vue'
import ContractWidget from './components/ContractWidget.vue'
import TemplateWidget from './components/TemplateWidget.vue'
import ActivityWidget from './components/ActivityWidget.vue'
import RenewalsWidget from './components/RenewalsWidget.vue'
import ForgottenWidget from './components/ForgottenWidget.vue'
import LastSignedWidget from './components/LastSignedWidget.vue'
import MostActiveWidget from './components/MostActiveWidget.vue'

const widgets = reactive([
  { id: 1, component: markRaw(ActivityWidget), columns: '6' },
  { id: 2, component: markRaw(TasksWidget), columns: '6' },
  { id: 3, component: markRaw(RenewalsWidget), columns: '6' },
  { id: 4, component: markRaw(RenewalsWidget), columns: '6' },
  { id: 5, component: markRaw(ForgottenWidget), columns: '4' },
  { id: 6, component: markRaw(LastSignedWidget), columns: '4' },
  { id: 7, component: markRaw(MostActiveWidget), columns: '4' },
  { id: 8, component: markRaw(UnreadWidget), columns: '4' },
  { id: 9, component: markRaw(ExpireWidget), columns: '4' },
  { id: 10, component: markRaw(BouncedWidget), columns: '4' },
  { id: 11, component: markRaw(TemplateWidget), columns: '4' },
  { id: 12, component: markRaw(ContractWidget), columns: '8' }
])
</script>
