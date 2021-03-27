<template>
  <section class="upload-images">
    <div class="form__upload mx-auto p-2">
      <div
        class="form__upload__input"
        :class="{
          'form__list_visible': files.length > 1
        }"
      >
        <UploadImagesInput
          :class="{
            'form__list_show': showListUploadImages
          }"
          :files-count="files.length"
          :first-file-name="files[0] ? files[0].name : ''"
          @change-input="onChangeInputUploadFile"
          @visible-list-files="onShowListUploadImages"
        />

        <UploadListImages
          v-show="showListUploadImages"
          :list-names="listNameFiles"
          v-slot="{ text }"
        >
          {{ text }}
        </UploadListImages>
      </div>
      <button
        class="btn primary px-5 py-1 ml-3"
        :disabled="!files.length"
        @click.stop="onUpload"
        type="button"
      >Загрузить</button>
    </div>
    <PreviewListFile
      v-show="files.length"
      :list-files="files"
      v-slot="{ index, title, size, src, description }"
    >
      <PreviewImage
        :name="filesInfo[index].title"
        :size="size"
        :src="src"
        :description="filesInfo[index].description"
        :ref="`image-download-${index}`"
        @preview-remove="onDeleteDownloadFile"
        @open-modal-editor="onModalEditorEnabled"
        :key="`upload-image-${title.length}-${size}`"
      />
    </PreviewListFile>

    <ModalPreviewImageEditorContainer
      v-if="files.length"
      @on-open-editor="openModalEditor = !openModalEditor"
      @change-preview-info="onUpdatePreviewInfo"
      ref="modalEditor"
    />
  </section>
</template>

<script>
  import UploadImagesInput from './UploadImagesInput'
  import PreviewListFile from './PreviewListFile'
  import PreviewImage from './PreviewImage'
  import ModalPreviewImageEditorContainer from './ModalPreviewImageEditorContainer'
  import UploadListImages from './UploadListImages'

  export default {
    name: 'ViewsUploadImages',
    components: {
      UploadImagesInput,
      PreviewListFile,
      PreviewImage,
      ModalPreviewImageEditorContainer,
      UploadListImages
    },
    data: () => ({
      files: [],
      filesInfo: [],
      showListUploadImages: false,
      openModalEditor: false,
      fileIndex: -1
    }),
    computed: {
      listNameFiles() {
        const arr = []

        this.files.forEach(f => arr.push(f.name))

        return arr
      }
    },
    watch: {
      openModalEditor(newBool) {
        if (newBool)
          this.$refs.modalEditor.show()
        else
          this.$refs.modalEditor.hide()
      }
    },
    methods: {
      onUpdatePreviewInfo(e) {
        this.$set(this.filesInfo[e.index], 'title', e.title)
        this.$set(this.filesInfo[e.index], 'description', e.description)
      },
      onModalEditorEnabled(e) {
        this.filesInfo.some((f, index) => {
          if (f.title === e.nameFile) {
            const info = {
              ixd: index,
              title: e.nameFile,
              description: e.description
            }

            this.$refs.modalEditor.load(info)

            this.openModalEditor = !this.openModalEditor
            // eslint-disable-next-line no-useless-return
            return
          }
        })
      },
      onShowWindowUploadFile() {
        return document.getElementById(this.idInputFile).click()
      },
      onChangeInputUploadFile(e) {
        if (!e.target.files.length) return

        const files = Array.from(e.target.files)

        files.forEach(file => {
          if (!file.type.match('image')) return

          this.addFileToPreview(file)
        })
      },
      addFileToPreview(img) {
        const reader = new FileReader()

        reader.onload = e => {
          const src = e.target.result

          img.src = src
          img.download = false

          this.filesInfo.push({
            title: img.name,
            description: ''
          })

          this.files.push(img)
        }

        reader.readAsDataURL(img)
      },
      onDeleteDownloadFile(e) {
        if (!e.name) return

        const { name } = e
        this.files = this.files.filter(file => file.name !== name)
      },
      onShowListUploadImages() {
        this.showListUploadImages = !this.showListUploadImages
      },
      changeDownloadStatus(indexFile, status) {
        this.$set(this.files[indexFile], 'download', status)
        this.$refs[`image-download-${indexFile}`].download = status
      },
      changeProgressDownloadFile(indexFile, percentProgress) {
        this.$refs[`image-download-${indexFile}`].progressDownload = percentProgress
      },
      onUpload() {
        this.files.some((f, index) => {
          if (!f.download) {
            const data = {
              src: f.src,
              title: this.filesInfo[index].title,
              description: this.filesInfo[index].description
            }

            this.axios.put('/api/upload/image', data, {
              headers: {
                'Content-Type': 'multipart/form-data'
              },
              onUploadProgress: (progressEvent) => {
                const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)

                this.changeProgressDownloadFile(index, percentCompleted)
              }
            }).then(res => {
              this.changeProgressDownloadFile(index, 100)
              this.changeDownloadStatus(index, res.data.status)
            }).catch(err => {
              console.log('ERROR', err)
            })
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .form {
    &__list_visible {
      position: relative;
    }

    &__upload {
      display: flex;
      max-width: 75%;

      &__input {
        flex-grow: 1;

        &.form__list_show:hover {
          border-radius: 5px 5px 0 0;
        }
      }

      &__image {

      }

      > .btn {
        color: @color-white;
        font-size: 22px;
        font-family: "Helvetica Bold", serif;
        border-radius: 5px;
        background-image: linear-gradient(to top, #ff6600, #ffa400);
        transition: all .33s;

        &:disabled {
          background-image: linear-gradient(to top, #b9b9b9, #dcdcdc);
          pointer-events: none;
          transition: all .33s;
        }
      }
    }
  }
</style>
