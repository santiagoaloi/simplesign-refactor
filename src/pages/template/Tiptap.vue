<template>
  <div v-if="editor" class="editor">
    <MenuBar :editor="editor" class="d-flex flex-wrap align-center" />
    <Teleport to="#editor">
      <EditorContent :editor="editor" class="" />
    </Teleport>
  </div>
</template>

<script>
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-3'

// Extensions
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import Highlight from '@tiptap/extension-highlight'
import Link from '@tiptap/extension-link'

import MenuBar from './TiptapMenuBar.vue'

export default {
  components: {
    EditorContent,
    MenuBar
  },

  data() {
    return {
      editor: null
    }
  },

  mounted() {
    this.editor = new Editor({
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
        })
      ]
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  }
}
</script>

<style lang="scss">
a {
color: rgba(var(--v-theme-primary));
cursor: pointer;
text-decoration: underline;
}


/* Basic editor styles */
.ProseMirror {
  padding: 1rem;
  margin:1rem;
  border: dashed 1px rgba(var(--v-border-color));


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
  padding: 1rem;
  margin:1rem;
}
</style>
