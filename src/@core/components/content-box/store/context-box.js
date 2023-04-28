export const useContentBoxStore = defineStore('local-content-box', {
  state: () => ({
    editor: null,
    onEditorFocus: false
  }),

  getters: {},

  actions: {}
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useContentBoxStore, import.meta.hot))
