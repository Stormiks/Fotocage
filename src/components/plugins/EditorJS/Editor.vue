<template>
  <div :id="holder"></div>
</template>

<script>
  import EditorJS from '@editorjs/editorjs'

  export default {
    name: 'EditorJS',
    props: {
      holder: {
        type: String,
        default: () => 'vue-editor-js',
        require: true
      },
      config: {
        type: Object,
        default: () => ({}),
        require: true
      },
      initialized: {
        type: Function,
        default: () => {}
      }
    },
    data: () => ({
      editor: null
    }),
    mounted() {
      this.initEditor()
    },
    methods: {
      async initEditor() {
        await this.destroyEditor()
        const self = this
        const editor = new EditorJS({
          holder: this.holder || 'vue-this.editor-js',
          onReady: () => {
            console.log('Editor.js is ready to work!')
            self.$emit('initialized', this.editor)
          },
          ...this.config
        })

        this.editor = editor
      },
      async save() {
        return this.editor.save ? this.editor.save().then(outputData => {
          const blocks = outputData.blocks

          return blocks
        }) : {}
      },
      async destroyEditor() {
        if (this.editor) {
          await this.editor.destroy()
          this.editor = null
        }
      }
    }
  }
</script>
