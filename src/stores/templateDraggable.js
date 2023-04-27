/*
 * General application related logic.
 */

import { v4 as uuidv4 } from 'uuid'

export const useTemplateDraggableStore = defineStore('local-template', {
  state: () => ({
    droppedElements: [],
    isContentBoxFocused: false
  }),

  persist: {
    paths: ['droppedElements']
  },

  getters: {},

  actions: {
    deleteElement(id) {
      this.droppedElements = this.droppedElements.filter((el) => {
        return el.id !== id
      })
    },

    duplicateElement(element) {
      let newElement = { ...element }
      newElement.id = uuidv4()
      // newElement.value = `A new duplicated element was born! `

      this.droppedElements.push(newElement)
    }
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useTemplateDraggableStore, import.meta.hot))
