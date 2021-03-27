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

        // await this.$nextTick()
        // await this.$nextTick()
        // await this.initialized(this.editor)
      },
      async save() {
        return this.editor.save ? this.editor.save().then(data => {
          const blocks = data.blocks

          const description = () => {
            let textTempl = ''

            for (let i = 1; i < blocks.length; i++)
              if (blocks[i].type === 'paragraph') textTempl += `<p>${blocks[i].data.text}</p>`

            return textTempl
          }

          const info = {
            title: blocks[0].data.text,
            description: description()
          }

          return info
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
