<template>
  <div>
    <template v-for="(item, index) in items">
      <div v-if="item.type === 'divider'" :key="`divider${index}`" class="divider" />
      <MenuItem v-else :key="index" v-bind="item" />
    </template>
  </div>
</template>

<script>
import MenuItem from './TiptapMenuItem.vue'

export default {
  components: {
    MenuItem
  },

  props: {
    editor: {
      type: Object,
      required: true
    }
  },

  methods: {
    setLink() {
      const previousUrl = this.editor.getAttributes('link').href
      const url = window.prompt('URL', previousUrl)

      // cancelled
      if (url === null) {
        return
      }

      // empty
      if (url === '') {
        this.editor.chain().focus().extendMarkRange('link').unsetLink().run()

        return
      }

      // update link
      this.editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
    }
  },

  data() {
    return {
      items: [
        {
          icon: '$mdiFormatBold',
          title: 'Bold',
          action: () => this.editor.chain().focus().toggleBold().run(),
          isActive: () => this.editor.isActive('bold')
        },
        {
          icon: '$mdiFormatItalic',
          title: 'Italic',
          action: () => this.editor.chain().focus().toggleItalic().run(),
          isActive: () => this.editor.isActive('italic')
        },
        {
          icon: '$mdiFormatStrikethrough',
          title: 'Strike',
          action: () => this.editor.chain().focus().toggleStrike().run(),
          isActive: () => this.editor.isActive('strike')
        },
        {
          icon: '$mdiCodeTags',
          title: 'Code',
          action: () => this.editor.chain().focus().toggleCode().run(),
          isActive: () => this.editor.isActive('code')
        },
        {
          icon: '$mdiMarker',
          title: 'Highlight',
          action: () => this.editor.chain().focus().toggleHighlight().run(),
          isActive: () => this.editor.isActive('highlight')
        },
        {
          type: 'divider'
        },
        {
          icon: '$mdiFormatHeader1',
          title: 'Heading 1',
          action: () => this.editor.chain().focus().toggleHeading({ level: 1 }).run(),
          isActive: () => this.editor.isActive('heading', { level: 1 })
        },
        {
          icon: '$mdiFormatHeader2',
          title: 'Heading 2',
          action: () => this.editor.chain().focus().toggleHeading({ level: 2 }).run(),
          isActive: () => this.editor.isActive('heading', { level: 2 })
        },
        {
          icon: '$mdiFormatParagraph',
          title: 'Paragraph',
          action: () => this.editor.chain().focus().setParagraph().run(),
          isActive: () => this.editor.isActive('paragraph')
        },
        {
          icon: '$mdiFormatListBulleted',
          title: 'Bullet List',
          action: () => this.editor.chain().focus().toggleBulletList().run(),
          isActive: () => this.editor.isActive('bulletList')
        },
        {
          icon: '$mdiFormatListNumbered',
          title: 'Ordered List',
          action: () => this.editor.chain().focus().toggleOrderedList().run(),
          isActive: () => this.editor.isActive('orderedList')
        },
        {
          icon: '$mdiFormatListCheckbox',
          title: 'Task List',
          action: () => this.editor.chain().focus().toggleTaskList().run(),
          isActive: () => this.editor.isActive('taskList')
        },
        {
          icon: '$mdiCodeBracesBox',
          title: 'Code Block',
          action: () => this.editor.chain().focus().toggleCodeBlock().run(),
          isActive: () => this.editor.isActive('codeBlock')
        },
        {
          type: 'divider'
        },
        {
          icon: '$mdiFormatQuoteClose',
          title: 'Blockquote',
          action: () => this.editor.chain().focus().toggleBlockquote().run(),
          isActive: () => this.editor.isActive('blockquote')
        },
        {
          icon: '$mdiMinus',
          title: 'Horizontal Rule',
          action: () => this.editor.chain().focus().setHorizontalRule().run()
        },
        {
          type: 'divider'
        },
        {
          icon: '$mdiWrap',
          title: 'Hard Break',
          action: () => this.editor.chain().focus().setHardBreak().run()
        },
        {
          icon: '$mdiFormatClear',
          title: 'Clear Format',
          action: () => this.editor.chain().focus().clearNodes().unsetAllMarks().run()
        },
        {
          icon: '$mdiLink',
          title: 'Set link',
          action: () => this.setLink()
        },
        {
          type: 'divider'
        },
        {
          icon: '$mdiArrowULeftTop',
          title: 'Undo',
          action: () => this.editor.chain().focus().undo().run()
        },
        {
          icon: '$mdiArrowURightTop',
          title: 'Redo',
          action: () => this.editor.chain().focus().redo().run()
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.divider {
background-color: rgba(#fff, 0.25);
height: 1.25rem;
margin-left: 0.5rem;
margin-right: 0.75rem;
width: 1px;
}
</style>
