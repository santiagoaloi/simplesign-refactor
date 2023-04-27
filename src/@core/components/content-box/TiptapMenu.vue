<template>
  <div>
    <input
      :value="editor.getAttributes('textStyle').color"
      class="mt-2"
      type="color"
      @input="editor.chain().focus().setColor($event.target.value).run()"
    />

    <template v-for="(item, index) in items">
      <div v-if="item.type === 'divider'" :key="`divider${index}`" class="divider" />
      <MenuItem v-else :key="index" v-bind="item" />
    </template>
  </div>
</template>

<script setup>
import MenuItem from './TiptapMenuButton.vue'

const props = defineProps({
  editor: {
    type: Object,
    required: true
  }
})

function setLink() {
  const previousUrl = props.editor.getAttributes('link').href
  const url = window.prompt('URL', previousUrl)

  // cancelled
  if (url === null) {
    return
  }

  // empty
  if (url === '') {
    props.editor.chain().focus().extendMarkRange('link').unsetLink().run()

    return
  }

  // update link
  props.editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
}

function setColor() {
  props.editor.chain().focus().setColor('#958DF1').run()
}

const items = [
  {
    icon: '$mdiLink',
    title: 'Set link',
    action: () => setColor()
  },

  {
    icon: '$mdiFormatBold',
    title: 'Bold',
    action: () => props.editor.chain().focus().toggleBold().run(),
    isActive: () => props.editor.isActive('bold')
  },
  {
    icon: '$mdiFormatItalic',
    title: 'Italic',
    action: () => props.editor.chain().focus().toggleItalic().run(),
    isActive: () => props.editor.isActive('italic')
  },
  {
    icon: '$mdiFormatStrikethrough',
    title: 'Strike',
    action: () => props.editor.chain().focus().toggleStrike().run(),
    isActive: () => props.editor.isActive('strike')
  },
  {
    icon: '$mdiCodeTags',
    title: 'Code',
    action: () => props.editor.chain().focus().toggleCode().run(),
    isActive: () => props.editor.isActive('code')
  },
  {
    icon: '$mdiMarker',
    title: 'Highlight',
    action: () => props.editor.chain().focus().toggleHighlight().run(),
    isActive: () => props.editor.isActive('highlight')
  },
  {
    type: 'divider'
  },
  {
    icon: '$mdiFormatHeader1',
    title: 'Heading 1',
    action: () => props.editor.chain().focus().toggleHeading({ level: 1 }).run(),
    isActive: () => props.editor.isActive('heading', { level: 1 })
  },
  {
    icon: '$mdiFormatHeader2',
    title: 'Heading 2',
    action: () => props.editor.chain().focus().toggleHeading({ level: 2 }).run(),
    isActive: () => props.editor.isActive('heading', { level: 2 })
  },
  {
    icon: '$mdiFormatParagraph',
    title: 'Paragraph',
    action: () => props.editor.chain().focus().setParagraph().run(),
    isActive: () => props.editor.isActive('paragraph')
  },
  {
    icon: '$mdiFormatListBulleted',
    title: 'Bullet List',
    action: () => props.editor.chain().focus().toggleBulletList().run(),
    isActive: () => props.editor.isActive('bulletList')
  },
  {
    icon: '$mdiFormatListNumbered',
    title: 'Ordered List',
    action: () => props.editor.chain().focus().toggleOrderedList().run(),
    isActive: () => props.editor.isActive('orderedList')
  },
  {
    icon: '$mdiFormatListCheckbox',
    title: 'Task List',
    action: () => props.editor.chain().focus().toggleTaskList().run(),
    isActive: () => props.editor.isActive('taskList')
  },
  {
    icon: '$mdiCodeBracesBox',
    title: 'Code Block',
    action: () => props.editor.chain().focus().toggleCodeBlock().run(),
    isActive: () => props.editor.isActive('codeBlock')
  },
  {
    type: 'divider'
  },
  {
    icon: '$mdiFormatQuoteClose',
    title: 'Blockquote',
    action: () => props.editor.chain().focus().toggleBlockquote().run(),
    isActive: () => props.editor.isActive('blockquote')
  },
  {
    icon: '$mdiMinus',
    title: 'Horizontal Rule',
    action: () => props.editor.chain().focus().setHorizontalRule().run()
  },
  {
    type: 'divider'
  },
  {
    icon: '$mdiWrap',
    title: 'Hard Break',
    action: () => props.editor.chain().focus().setHardBreak().run()
  },
  {
    icon: '$mdiFormatClear',
    title: 'Clear Format',
    action: () => props.editor.chain().focus().clearNodes().unsetAllMarks().run()
  },
  {
    icon: '$mdiLink',
    title: 'Set link',
    action: () => setLink()
  },
  {
    type: 'divider'
  },
  {
    icon: '$mdiArrowULeftTop',
    title: 'Undo',
    action: () => props.editor.chain().focus().undo().run()
  },
  {
    icon: '$mdiArrowURightTop',
    title: 'Redo',
    action: () => props.editor.chain().focus().redo().run()
  }
]
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
