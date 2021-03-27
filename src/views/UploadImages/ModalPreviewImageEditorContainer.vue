<template>
  <modal
    name="ModalPreviewImageEditorContainer"
    class="preview_image__modal-editor modal-editor__preview"
    :height="`auto`"
    :scrollable="true"
    @opened="onOpenedModal"
    @closed="onClosedModal"
  >
    <div
      v-if="loadingModal"
      class="modal-editor__box"
    >
      <EditorJS
        ref="editor"
        :config="config"
        @initialized="onInitializedEditor"
      />

      <button
        @click.stop="save"
        type="button"
      >Сохранить</button>
    </div>
  </modal>
</template>

<script>
  import Header from '@editorjs/header'
  import Paragraph from '@editorjs/paragraph'

  export default {
    name: 'ModalPreviewImageEditorContainer',
    props: {
      dataEditor: {
        type: Object,
        default: () => ({})
      }
    },
    components: {
      EditorJS: () => import('plugins/EditorJS/Editor')
    },
    data: () => ({
      config: {
        tools: {
          header: {
            class: Header
          },
          paragraph: {
            class: Paragraph,
            inlineToolbar: true,
            config: {
              placeholder: 'Paragraph'
            }
          }
        },
        data: {}
      },
      loadingModal: false,
      loading: true,
      indexFile: -1
    }),
    mounted() {
    },
    watch: {
      loading(newBool) {
        if (!newBool)
          this.$emit('on-load-editor')
      }
    },
    methods: {
      onOpenedModal(e) {
        this.loadingModal = true
        this.loading = false
      },
      onClosedModal() {
        this.loadingModal = false
        this.loading = true
      },
      show() {
        this.$modal.show('ModalPreviewImageEditorContainer')
      },
      hide() {
        this.indexFile = -1
        this.$modal.hide('ModalPreviewImageEditorContainer')
      },
      load(data) {
        this.indexFile = data.ixd

        this.config.data = {
          time: new Date(),
          blocks: [
            {
              type: 'header',
              data: {
                text: data.title,
                level: 5
              }
            },
            {
              type: 'paragraph',
              data: {
                text: data.description
              }
            }
          ]
        }
      },
      save() {
        this.$refs.editor.save().then(data => {
          this.$emit('change-preview-info', {
            index: this.indexFile,
            info: { ...data }
          })

          this.hide()
        })
      },
      onInitializedEditor() {
        this.loading = false
      }
    }
  }
</script>

<style lang="less" scoped>
  .modal-editor__box {
    padding: 1rem;
  }
</style>
