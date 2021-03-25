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
      v-slot="{ index, title, size, src }"
    >
      <PreviewImage
        :name="title"
        :size="size"
        :src="src"
        :ref="`image-download-${index}`"
        @preview-remove="onDeleteDownloadFile"
        :key="`upload-image-${title.length}-${size}`"
      />
    </PreviewListFile>
  </section>
</template>

<script>
  import UploadImagesInput from './UploadImagesInput.vue'
  import PreviewListFile from './PreviewListFile'
  import PreviewImage from './PreviewImage'
  import UploadListImages from './UploadListImages'

  export default {
    name: 'ViewsUploadImages',
    components: {
      UploadImagesInput,
      PreviewListFile,
      PreviewImage,
      UploadListImages
    },
    data: () => ({
      files: [],
      showListUploadImages: false
    }),
    computed: {
      listNameFiles() {
        const arr = []

        this.files.forEach(f => arr.push(f.name))

        return arr
      }
    },
    methods: {
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
        console.log('egre')
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
              title: f.name
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
  .form__list_visible {
    position: relative;
  }

  .form__upload {
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

  .image_title {
    font-size: 20px;
    font-family: serif;
  }
</style>
