/*
 * General application related logic.
 */

export const useTemplateStore = defineStore('local-template', {
  state: () => ({
    droppedElements: []
  }),

  persist: true,

  getters: {},

  actions: {}
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
