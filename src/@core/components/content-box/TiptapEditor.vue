<template>
  <div v-if="editor">
    <!-- teleport to GAppBar-->
    <Teleport to="#editor-appbar">
      <MenuBar
        v-if="onEditorFocus"
        :editor="editor"
        class="d-flex flex-wrap align-center justify-end"
        @mousedown.prevent
      />
    </Teleport>

    <div>
      <EditorContent :editor="editor" @focusin="focusIn()" @focusout="focusOut()" />
    </div>
  </div>
</template>

<script setup>
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-3'

// Extensions
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import Highlight from '@tiptap/extension-highlight'
import Link from '@tiptap/extension-link'

import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'

import MenuBar from './TiptapMenu.vue'

const store = useTemplateDraggableStore()

const editor = ref(null)
const onEditorFocus = ref(false)

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

watch(
  () => props.modelValue,
  (value) => {
    // HTML
    const isSame = editor.value.getHTML() === value

    // JSON
    // const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value)

    if (isSame) {
      return
    }

    editor.value.commands.setContent(value, false)
  }
)

function focusIn() {
  // Local to this component
  onEditorFocus.value = true

  // Global to teleported menu icons
  store.isContentBoxFocused = true
}

function focusOut() {
  // Local to this component
  onEditorFocus.value = false

  // Global to teleported menu icons
  store.isContentBoxFocused = false
}

onMounted(() => {
  editor.value = new Editor({
    extensions: [
      StarterKit.configure({
        history: false
      }),

      //Extensions
      Highlight,
      TaskItem,
      TaskList,
      Link.configure({
        openOnClick: true
      }),
      Color,
      TextStyle
    ],

    content: props.modelValue,

    onUpdate: () => {
      // HTML

      emit('update:modelValue', editor.value.getHTML())

      // JSON
      // this.$emit('update:modelValue', this.editor.getJSON())
    }
  })
})

onBeforeUnmount(() => {
  editor.value.destroy()
})
</script>

<style lang="scss">
.ProseMirror a  {
color: rgba(var(--v-theme-primary));
cursor: pointer;
text-decoration: underline;
}



.ProseMirror:focus {
    outline: none;
}

/* Basic editor styles */
.ProseMirror {
  padding: 15px;
  // border: dashed 1px rgba(var(--v-border-color));


  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0D0D0D;
    border-radius: 0.5rem;
    color: #FFF;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;

    code {
      background: none;
      color: inherit;
      font-size: 0.8rem;
      padding: 0;
    }
  }

  mark {
    background-color: #FAF594;
  }

  img {
    height: auto;
    max-width: 100%;
  }

  hr {
    margin: 1rem 0;
  }

  blockquote {
    border-left: 2px solid rgba(#0D0D0D, 0.1);
    padding-left: 1rem;
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0D0D0D, 0.1);
    margin: 2rem 0;
  }

ul[data-type="taskList"] {
  list-style: none;
  padding: 0;

  li {
    display: flex;
    align-items: center;

    > label {
      flex: 0 0 auto;
      margin-right: 0.5rem;
      user-select: none;
    }

    > div {
      flex: 1 1 auto;
    }
  }

  input[type="checkbox"] {
    cursor: pointer;
  }  
 }
}

.ProseMirror-focused {
  padding: 15px;

}
</style>
